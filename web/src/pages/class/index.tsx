import {
  EHeader,
  ESideBar,
  ERecentActivities,
  TableContext, EClassInforCombined
} from "../../components";
import {Box, Flex, Grid, GridItem, Heading} from "@chakra-ui/react";
import {useParams} from "react-router";
import {EAddClass} from "../../components";
import {useContext, useEffect, useState} from "react";
import {type ClassInfor, getPost} from "../../ulti";


export default function () {
  const {id} = useParams()
  const [classInfor,setClassInfor] = useState<ClassInfor>({
    id: 1,
    code: 'abcxyz',
    name: 'class1',
    users: [
      {
        id: 1,
        name: 'admin',
        status: 'confirming',
        role: 'teacher'
      }
    ]
  })

  const injector: any = useContext(TableContext)
const{accessToken,user} = injector
  // const user = {
  //   name: "Johnson",
  //   role: "Teacher",
  //   avata:{
  //     url: "https://avatars2.githubusercontent.com/u/55?v=4",
  //   }}
  useEffect(() => {
    const dataClass = async () => {
      //api get data
      try {
        const res = await getPost(`/master/class/${id}`, accessToken)
        setClassInfor(res.data);
      } catch (e: any) {
        console.log(e)
      }
    }
    dataClass();

  }, []);


  const recentActivities = [
    {
      avatar: "https://i.pravatar.cc/300?u=iu",
      uploadedTest: "Test 1",
      time: '23-04-2025 00:00:00',
    },
    {
      avatar: "https://i.pravatar.cc/300?u=po",
      uploadedTest: "Test 2",
      time: '23-05-2025 00:00:00',
    },
  ]

  if (id === 'add'){
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
      <Grid templateColumns={'repeat(4,1fr)'}
            gap={'24px'}
      >
        <GridItem colSpan={3}>
          <EClassInforCombined classInfor={classInfor}></EClassInforCombined>
        </GridItem>
        <GridItem colSpan={1}>
          <ERecentActivities activities={recentActivities}/>
        </GridItem>
      </Grid>
      </Box>
      {/*)*/}
    </Box>
  )
}