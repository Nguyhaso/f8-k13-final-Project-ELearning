import {Box, Button, Flex, HStack, Input, InputGroup, Text} from "@chakra-ui/react";
import {BsPlusLg, BsSearch} from "react-icons/bs";
import { useNavigate } from "react-router";

interface ESearchProps {
  searchName?: string,
  searchButton?: string,
}
export default function ({searchName, searchButton}: ESearchProps) {
  const navigate = useNavigate();
  return (
    <Flex justify={'space-between'} p={'12px'} align={'center'}>
      <Text textStyle={'xl'} fontWeight={'bold'}>{searchName}</Text>
      <HStack>
        <Box>
          <InputGroup startElement={<BsSearch />}>
            <Input placeholder={'Search...'}/>
          </InputGroup>
        </Box>
        <Button
          // borderColor="blue.400"
          bg="blue.500"
          color="white"
          _hover={{bg: "yellow.500"}}
          padding="10px"
          onClick={()=>navigate('/class/add')}
        >
          <BsPlusLg/>
          {searchButton}
        </Button>
      </HStack>
    </Flex>
  )
}