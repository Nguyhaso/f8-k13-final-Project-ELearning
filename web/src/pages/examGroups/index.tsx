import {Box, Heading, SimpleGrid} from '@chakra-ui/react';
import {EHeader, ESearch, ESideBar, EExamCard, TableContext} from '../../components'
import {useContext, useEffect, useState} from "react";
import {type ExamGroupInfor, getPost} from "../../ulti";
import {useParams} from "react-router";

export default function (){

  const className: string = "Test 1"
  const injector: any = useContext(TableContext)
  const{user, accessToken} = injector
  console.log(user)
  const {id} = useParams()
  // const id = '52'
  const [examGroupList, setExamGroupList] = useState<ExamGroupInfor[]>([])

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


  return (
    <Box bg={'gray.50'}>
      <EHeader pageName={className} user={user}></EHeader>
      <ESideBar classCode={id ?? 'default'}></ESideBar>
      <Box
        ml={'200px'}
      >
        <ESearch searchName={'Exam List'} searchButton={'Creat New Test'}></ESearch>

        <Heading ml={'12px'}>
          Current Exam
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={'6'}
          // minChildWidth={'sm'}
          p={'6'}
        >
          {examGroupList.map((item, index) => (
            <EExamCard
              key={index}
              title={item.name}
              startDate={item.start_time}
            />
          ))}

        </SimpleGrid>

      </Box>
    </Box>
  )
}