import {EHeader, ESideBar, ERecentActivities, EClassStat, EClassInfor, EClassMemberList} from "../../components";
import {Box, Grid, GridItem, VStack} from "@chakra-ui/react";
import {useParams} from "react-router";

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
  return (
    <Box>
      <EHeader user={user}></EHeader>
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
    </Box>
  )
}