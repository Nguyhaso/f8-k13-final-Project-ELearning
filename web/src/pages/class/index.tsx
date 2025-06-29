import {EHeader, ESideBar, ERecentActivities, EClassStat, EClassInfor, EClassMemberList} from "../../components";
import {Box, Flex, Grid, GridItem, Heading, VStack} from "@chakra-ui/react";
import {useParams} from "react-router";
import EAddClass from "../../components/EAddClass";

export default function () {
  const user = {
    name: "Johnson",
    role: "Teacher",
    avatar: "https://avatars2.githubusercontent.com/u/55?v=4",
  }
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
  const {id} = useParams()

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

      {/*if (id === 'add')*/}
      {/*return (*/}
      {/*<>*/}
      {/*<p>ahihi</p>*/}
      {/*</>*/}
      {/*)*/}
      {/*else return (*/}
      <ESideBar classCode={id ?? 'default'}></ESideBar>
      <Grid templateColumns={'repeat(4,1fr)'}
            ml={'200px'}
            p={'24px'}
            gap={'24px'}
      >
        <GridItem colSpan={3}>
          <VStack gap={'12px'}>
            <EClassInfor></EClassInfor>
            <EClassStat></EClassStat>
            <EClassMemberList></EClassMemberList>
          </VStack>
        </GridItem>
        <GridItem colSpan={1}>
          <ERecentActivities activities={recentActivities}/>
        </GridItem>
      </Grid>
      {/*)*/}
    </Box>
  )
}