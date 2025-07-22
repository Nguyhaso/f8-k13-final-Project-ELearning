import {Box, Button, Field, Input, NumberInput, SimpleGrid} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {type examPayloadProp, type payloadErrorProp} from "../../ulti";
import QuestionTypeComp from "./questionTypeComp.tsx";


export default function () {

  const initialExam = {
    name: "",
    code: "",
    exam_group: 0,
    number_of_question: 1,
    total_time: 0,
    correct_answer: {},
    question: [{
      type: 'singleSelection',
      correct_answer: '',
      index: 0
    }],
    description: "",
    file: "",
    deleted_question: ""
  }

  //create question[]
  const [exam, setExam] = useState<examPayloadProp>(initialExam);
  useEffect(() => {
    const count = exam.number_of_question || 1;
    const newQuestions = Array.from({length: count}, (_, i) => ({
      type: exam.question[i]?.type ?? 'singleSelection',
      correct_answer: '',
      index: i
    }));
    setExam((prev) => ({...prev, question: newQuestions}));
  }, [exam.number_of_question]);

  const [PayloadError, setPayloadError] = useState<payloadErrorProp>({})

  const onCreate = async () => {
    const newError: payloadErrorProp = {}
    if (!exam.name.length) newError.name = 'Exam name cannot be empty'
    if (exam.code.length < 6) newError.code = 'Security code at least 6 characters'

    setPayloadError(newError)

    if (Object.keys(newError).length === 0) {

      // api below
    }
  }

  const pressEnter = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate()
  }
  return (
    <Box p={'24px'} bg={'white'} rounded={'xl'}>
      <form onSubmit={pressEnter}>
        <SimpleGrid columns={{base: 1, md: 2}} gap={{base: "24px", md: "40px"}}>
          {/*<VStack p={'24px'} bg={'white'} rounded={'xl'} w={'500px'}>*/}
          <Field.Root required invalid={!!PayloadError.name}>
            <Field.Label>
              Exam name <Field.RequiredIndicator/>
            </Field.Label>
            <Input placeholder="Enter Exam name"
                   variant="outline"
                   colorPalette={'blue'}
                   _invalid={{borderColor: "red.500", boxShadow: "0 0 0 1px red"}}
                   borderColor={'blue.500'}
                   onChange={(e) => setExam({...exam, name: e.target.value})}
            />
            <Field.ErrorText>{PayloadError.name}</Field.ErrorText>
          </Field.Root>

          <Field.Root required invalid={!!PayloadError.code}>
            <Field.Label>
              Exame Code <Field.RequiredIndicator/>
            </Field.Label>
            <Input placeholder="Enter Exam Code"
                   variant="outline"
                   colorPalette={'blue'}
                   _invalid={{borderColor: "red.500", boxShadow: "0 0 0 1px red"}}
                   borderColor={'blue.500'}
                   onChange={(e) => setExam({...exam, code: e.target.value})}
            />
            <Field.ErrorText>{PayloadError.code}</Field.ErrorText>
          </Field.Root>

          <Field.Root required invalid={!!PayloadError.total_time}>
            <Field.Label>
              Exame Duration (minutes) <Field.RequiredIndicator/>
            </Field.Label>
            <Input type={'number'}
                   placeholder="Enter Exam duration"
                   variant="outline"
                   colorPalette={'blue'}
                   _invalid={{borderColor: "red.500", boxShadow: "0 0 0 1px red"}}
                   borderColor={'blue.500'}
                   onChange={(e) => setExam({...exam, total_time: Number(e.target.value)})}
            />
            <Field.ErrorText>{PayloadError.total_time}</Field.ErrorText>
          </Field.Root>

          <Field.Root required>
            <Field.Label>
              Number of question <Field.RequiredIndicator/>
            </Field.Label>
            <NumberInput.Root
              defaultValue={`${exam.number_of_question}`} min={1} max={60} step={1} w='100%'
              value={String(exam.number_of_question)}
              onValueChange={(e) => setExam({...exam, number_of_question: Number(e.value)})}
            >
              <NumberInput.Control/>
              <NumberInput.Input
                colorPalette={'blue'}
                _invalid={{borderColor: "red.500", boxShadow: "0 0 0 1px red"}}
                borderColor={'blue.500'}
              />
            </NumberInput.Root>
          </Field.Root>
        </SimpleGrid>

        {exam.question.map((question, index) => (
          <QuestionTypeComp
            type={question.type}
            index={index}
            key={index}
            onChange={(e:any) => {
              const updatedQuestions = exam.question.map((q, i) =>
                i === index ? {...q, type: e.currentTarget.value} : q)
              setExam({...exam, question: updatedQuestions})
              // console.log(e.currentTarget.value)
            }}
            onAnswer={(answer:any) => {
              const updated = [...exam.question];
              updated[index].correct_answer = answer;
              setExam({...exam, question: updated});
            }}
          />
        ))}


        <Button
          type={'submit'}
          borderColor="blue.400"
          bg="blue.500"
          color="white"
          _hover={{bg: "blue.700"}}
          size="sm"
          padding="xl"
        >Create</Button>
      </form>
    </Box>
  )
}
