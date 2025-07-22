import {
  EHeader,
  ESideBar,
  ERecentActivities,
  TableContext, EClassInforCombined, EUploadFile, EAddExam
} from "../../components";
import {Box, Flex, Grid, GridItem, Heading, SimpleGrid} from "@chakra-ui/react";
import {useParams} from "react-router";
import {EAddClass} from "../../components";
import {useContext, useEffect, useState} from "react";
import {type ClassInfor, getPost} from "../../ulti";


export default function () {
  const {id, exam} = useParams()


  const injector: any = useContext(TableContext)
  const {accessToken, user} = injector


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
      <Box ml={{base:'50px',sm:'50px', md:'200px'}}>
        <SimpleGrid columns={{base: 1, md:2}} columnGap="4" p={'6'}>
          <EUploadFile/>
          <EAddExam/>
        </SimpleGrid>
      </Box>
    </Box>
  )
}