import {EHeader, ESideBar, EClassMemberList, TableContext} from "../../components";
import {Box} from "@chakra-ui/react";
import {useParams} from "react-router";
import {useContext, useEffect, useState} from "react";
import {getPost, type UserClassInfor} from "../../ulti";

export default function () {
  const injector: any = useContext(TableContext)
  const{user, accessToken} = injector
  console.log(user)
  const {id} = useParams()
  const [memberList, setMemberList] = useState<UserClassInfor[]>([])

  useEffect(() => {
    const dataMember = async () => {
      //api get data
      try {
        const res = await getPost(`/master/class/${id}`, accessToken)
        setMemberList(res.data.users);
      } catch (e: any) {
        console.log(e)
      }
    }
    dataMember();

  }, []);

  return (
    <Box>
      <EHeader user={user}></EHeader>
      <ESideBar classCode={id ?? 'default'}></ESideBar>
      <Box
            ml={'200px'}
            p={'24px'}
            gap={'24px'}
      >

            <EClassMemberList memberList={memberList}></EClassMemberList>

      </Box>
    </Box>
  )
}