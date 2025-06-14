import {Box, Heading, SimpleGrid} from '@chakra-ui/react';
import {EHeader, ESearch, ESideBar, EExamCard} from '../../components'
import {useParams} from 'react-router';

export default function (){
  const className: string = "Test 1"

  const user ={
    name: "Johnson",
    role: "Teacher",
    avatar: "https://avatars2.githubusercontent.com/u/55?v=4",
  }

  const examList= [
    {title: 'Test 1', date:'25/01/2025'},
    {title: 'Test 2', date:'25/02/2025'},
    {title: 'Test 3', date:'25/03/2025'},
    {title: 'Test 4', date:'25/04/2025'},
  ]
  const {id} = useParams();
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
          {examList.map((item, index) => (
            <EExamCard
              key={index}
              title={item.title}
              startDate={item.date}
            />
          ))}

        </SimpleGrid>

      </Box>
    </Box>
  )
}