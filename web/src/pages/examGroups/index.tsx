import {
  Box,
  Button,
  Dialog,
  Field,
  Heading,
  HStack,
  Input,
  Portal,
  SimpleGrid,
  Stack
} from '@chakra-ui/react';
import {EHeader, ESearch, ESideBar, EExamCard, TableContext} from '../../components'
import {useContext, useEffect, useState} from "react";
import {decode, type ExamGroupInfor, type ExamGroupPayload, getNewToken, getPost, postBearerMethod} from "../../ulti";
import {useNavigate, useParams} from "react-router";

export default function () {
  const navigate = useNavigate();
  const className: string = "Test 1"
  const injector: any = useContext(TableContext)
  const {user, accessToken, refreshToken} = injector
  const {id} = useParams()
  // const id = '52'
  const [examGroupList, setExamGroupList] = useState<ExamGroupInfor[]>([])
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [examGroupsPayload, setExamGroupsPayload] = useState<ExamGroupPayload>({
    name: "",
    await_time: 0,
    start_time: ""
  })
  const [errors, setErrors] = useState<{
    name?: string;
    interval?: string;
    start_time?: string;
  }>({});


  useEffect(() => {
    const dataMember = async () => {
      //api get data
      try {
        const res = await getPost(`/exam_group/?class_id=${id}`, accessToken)
        setExamGroupList(res.data);
      } catch (e: any) {
        console.log(e)
      }
    }
    dataMember();

  }, []);

  const onSave = async (e:React.FormEvent) => {
    if (e) e.preventDefault(); // 👈 Prevent reload
    const newErrors: typeof errors = {};

    if (!examGroupsPayload.name.trim()) {
      newErrors.name = "This field is required";
    }
    if (!examGroupsPayload.await_time) {
      newErrors.interval = "This field is required";
    }
    if (!examGroupsPayload.start_time.trim()) {
      newErrors.start_time = "This field is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    console.log("Submit data", examGroupsPayload);

    if (!accessToken || !refreshToken) {
      navigate('/login');
      return null;
    }
    let currentToken = accessToken;
    const decoded = decode(accessToken);
    const now = Date.now() / 1000;
    if (decoded.exp < now) {
      const newTokenData = await getNewToken(refreshToken);
      localStorage.setItem('accessToken', newTokenData.data.access);
      currentToken = newTokenData.data.access;
    }
    const payload = {
      ...examGroupsPayload,
      class_id: id,
      is_once: true,
      is_save_local: true
    };
    console.log(payload);
    //api post data
    try {
      const response = await postBearerMethod('/exam_group', payload, currentToken)
      if (response) {
        window.location.reload();
      }
    } catch (e: any) {
      console.error(e)
    }
  }


  return (
    <Box bg={'gray.50'}>
      <EHeader pageName={className} user={user}></EHeader>
      <ESideBar classCode={id ?? 'default'}></ESideBar>
      <Box
        ml={'200px'}
      >
        <ESearch
          searchName={'Exam List'}
          searchButton={'Creat New Test'}
          onclick={() => setDialogOpen(true)}
        ></ESearch>

        <Heading ml={'12px'}>
          Current Exam
        </Heading>
        <SimpleGrid
          columns={{base: 1, md: 2, lg: 3}}
          gap={'6'}
          // minChildWidth={'sm'}
          p={'6'}
        >
          {examGroupList.map((item, index) => (
            <EExamCard
              key={index}
              examId={item.id}
              title={item.name}
              startDate={item.start_time}
            />
          ))}

        </SimpleGrid>

      </Box>
      <Dialog.Root open={isDialogOpen} onOpenChange={(details) => setDialogOpen(details.open)}>
        <Portal>
          <Dialog.Backdrop/>
          <Dialog.Positioner>
            <form onSubmit={onSave}>
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title>Create New Exam</Dialog.Title>
                </Dialog.Header>
                <Dialog.Body pb="4">
                  <Stack gap="4">
                    <Field.Root invalid={!!errors.name}>
                      <Field.Label>Exam Name<Field.RequiredIndicator/></Field.Label>
                      <Input
                        placeholder="Exam name..."
                        value={examGroupsPayload?.name}
                        onChange={(e) =>
                          setExamGroupsPayload({
                            ...examGroupsPayload,
                            name: e.target.value,
                          })}
                      />
                      <Field.ErrorText>{errors.name}</Field.ErrorText>
                    </Field.Root>
                    <Field.Root required invalid={!!errors.interval}>
                      <Field.Label>Interval between tests (minutes)<Field.RequiredIndicator/></Field.Label>
                      <Input type="number"
                             value={examGroupsPayload?.await_time}
                             onChange={(e) =>
                               setExamGroupsPayload({
                                 ...examGroupsPayload,
                                 await_time: Number(e.target.value),
                               })}/>
                      <Field.ErrorText>{errors.interval}</Field.ErrorText>
                    </Field.Root>

                    <Field.Root invalid={!!errors.start_time}>
                      <Field.Label>Start Time<Field.RequiredIndicator/></Field.Label>
                      <Input type="date"
                             value={examGroupsPayload?.start_time}
                             onChange={(e) =>
                               setExamGroupsPayload({
                                 ...examGroupsPayload,
                                 start_time: e.target.value,
                               })}/>
                      <Field.ErrorText>{errors.start_time}</Field.ErrorText>

                    </Field.Root>
                  </Stack>
                </Dialog.Body>
                <Dialog.Footer>
                  <HStack>
                    <Dialog.ActionTrigger asChild>
                      <Button variant="outline"
                              borderColor="blue.400"
                              color="blue.500"
                              bg="white"
                              _hover={{bg: "blue.100"}}
                      >Cancel</Button>
                    </Dialog.ActionTrigger>
                    <Button
                      type={'submit'}
                      bg="blue.500"
                      color="white"
                      _hover={{bg: "yellow.500"}}
                      padding="10px"
                      onClick={onSave}
                    >Create</Button>
                  </HStack>
                </Dialog.Footer>
                <Dialog.CloseTrigger top="0" insetEnd="-12">
                </Dialog.CloseTrigger>
              </Dialog.Content>
            </form>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </Box>
  );

}