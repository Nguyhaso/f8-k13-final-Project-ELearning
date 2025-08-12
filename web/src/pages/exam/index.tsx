import {EAddClass, EAddExam, EHeader, ESideBar, ETitlePath, EUploadFile, TableContext} from "../../components";
import {Box, Flex, Heading, SimpleGrid} from "@chakra-ui/react";
import {useParams} from "react-router";
import {useContext} from "react";


export default function () {
  const {id, examList} = useParams()


  const injector: any = useContext(TableContext)
  const { user} = injector


  if (id === 'add') {
    return (
      <Box>
        <EHeader user={user}></EHeader>
        <Heading p={'24px'}>Add new class</Heading>
        <Flex justify={'center'} align={'center'} height={'calc(100vh - 200px)'}>
          <EAddClass/>
        </Flex>
      </Box>
    )
  }
  return (
    <Box>
      <EHeader user={user}></EHeader>
      <ESideBar classCode={id ?? 'default'}></ESideBar>
      <Box ml={{base:'50px',sm:'50px', md:'200px'}} p={'6'}>
        <ETitlePath  separator=">"
                     separatorGap="8px"
                     items={[
                       { title: 'Home', url: '/classes' },
                       { title: `Class ${id}`, url: `/class/${id}/exams` },
                       { title: `Exam ${examList}`, url: `/class/${id}/exams/${examList}` },
                       { title: 'Adding exam' }, // current page (no `url`)
                     ]}/>

        <SimpleGrid columns={{base: 1, md:2}} columnGap="4" rowGap={'4'}>

          <EUploadFile/>
          <EAddExam/>
        </SimpleGrid>
      </Box>
    </Box>
  )
}