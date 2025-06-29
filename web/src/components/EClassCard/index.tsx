import {Text, Flex, HStack, Button} from "@chakra-ui/react";
import {BsDoorOpen, BsShare} from "react-icons/bs";

interface EClassProps {
  className?: string,
  classNumberOfMember?: number,
  classCode?: any,
  classWidth?: number,
  navigateToClass: ()=>void
}
export default function ({className, classNumberOfMember, classCode, navigateToClass}: EClassProps) {

  return (
  <Flex direction="column" p={'12px'} color={'white'} bg={'blue.500'} rounded={'2xl'}>
    <HStack justify="space-between">
      <Text fontSize={'xl'} fontWeight="bold">Class : {className}</Text>
      <Button
        bg="blue.500"
        color="white"
        _hover={{bg: "blue.600"}}
        size="sm"
        padding="10px"
        onClick={()=>navigateToClass()}
      >
        <BsDoorOpen/>
        Enter Class
      </Button>
    </HStack>
    <Text fontSize={'4xl'} fontWeight={'bold'}>{classNumberOfMember}</Text>

    <HStack justify={'space-between'} align={'center'}>
      <Text fontSize={'md'}>Number of participant</Text>
      <HStack>
        <Text fontSize={'md'}>Class Code : {classCode}</Text>
        <Button
          borderColor={'white'}
          bg="blue.500"
          color="white"
          _hover={{bg: "blue.600"}}
          size="xs"
          padding="10px"
        >
          <BsShare/>
          Share
        </Button>
      </HStack>
    </HStack>
  </Flex>

  )
}