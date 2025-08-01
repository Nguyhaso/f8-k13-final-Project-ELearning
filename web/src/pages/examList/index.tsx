import {
  EHeader,
  ESideBar, ETitlePath,
  TableContext
} from "../../components";
import {Box, Flex, Heading} from "@chakra-ui/react";
import {useParams} from "react-router";
import {EAddClass} from "../../components";
import {useContext} from "react";


export default function () {
  const {id} = useParams()


  const injector: any = useContext(TableContext)
  const {user} = injector


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
      <Box ml={{base: '50px', sm: '50px', md: '200px'}} p={'6'}>
        <ETitlePath/>

      </Box>
      {/*)*/}
    </Box>
  )
}
