import {EHeader, ESideBar, EClassMemberList} from "../../components";
import {Box} from "@chakra-ui/react";
import {useParams} from "react-router";

export default function () {
  const user = {
    name: "Johnson",
    role: "Teacher",
    avatar: "https://avatars2.githubusercontent.com/u/55?v=4",
  }

  const {id} = useParams()
  return (
    <Box>
      <EHeader user={user}></EHeader>
      <ESideBar classCode={id ?? 'default'}></ESideBar>
      <Box
            ml={'200px'}
            p={'24px'}
            gap={'24px'}
      >

            <EClassMemberList></EClassMemberList>

      </Box>
    </Box>
  )
}