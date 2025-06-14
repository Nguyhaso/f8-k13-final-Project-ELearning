import {Button, Flex, HStack, Text} from "@chakra-ui/react";
import { BsLaptop,  BsShare} from "react-icons/bs";

export default function ({teacher = 'Mr.Huang'}){
  return (
    <Flex width={'100%'} direction="column" p={'12px'} color={'white'} bg={'blue.500'} rounded={'2xl'}>
      <HStack justify="left">
        <BsLaptop/>
        <Text fontSize={'xl'} fontWeight="bold">Test 1</Text>
      </HStack>
      <Text>Teacher : {teacher}</Text>
      <HStack justify={'space-between'} align={'center'}>
        <HStack>
          <Text>Share Class</Text>
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