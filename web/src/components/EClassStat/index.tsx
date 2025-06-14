import {Grid, HStack, Text} from "@chakra-ui/react";
import {BsFiles, BsPeople} from "react-icons/bs";

export default function ({members = 3, tests = 5}){
  return (
    <Grid templateColumns={'repeat(2,1fr)'} gap={'12px'}  width={'100%'} fontSize={'6xl'} color={'blue.500'}>
      <HStack justify={'left'} bg={'white'} rounded={'2xl'} p={'12px'}  >
        <BsPeople/>
        <Text fontSize={'xl'}>{members} members</Text>
      </HStack>
      <HStack justify={'left'} bg={'white'} rounded={'2xl'} p={'12px'}  >
        <BsFiles/>
        <Text fontSize={'xl'}>{tests} tests</Text>
      </HStack>
    </Grid>
  )
}