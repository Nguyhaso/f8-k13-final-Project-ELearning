import {Box, Button, Text, VStack} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { BsGlobe2, BsPeople, BsTrophy} from "react-icons/bs";

export default function ({classCode}:{classCode:string}) {
  const navigate = useNavigate();

  return (
    <Box
      position="fixed"
      left={0}
      top={'68px'}
      height={"calc(100vh - 68px)"}
      width="200px"
      bg="white"
      p={4}
      display={'flex'}
      flexDirection={'column'}
    >
      <VStack flex={'1'} align="start" gap={4} >
        <Button
          width="100%"
          variant="ghost"
          justifyContent="flex-start"
          borderRight="4px solid transparent"
          borderRadius="0"
          _hover={{
            bg: 'white',
            color: "blue.500",
          }}
          onClick={() => navigate(`/class/${classCode}/`)}
        >
          <BsGlobe2 />
          Dashboard
        </Button>
        <Button  width="100%"
                 variant="ghost"
                 justifyContent="flex-start"
                 borderRight="4px solid transparent"
                 borderRadius="0"
                 _hover={{
                   bg: 'white',
                   color: "blue.500",
                 }}
                 onClick={() => navigate(`/class/${classCode}/exams`)}>
          <BsTrophy/>
          Test List
        </Button>
        <Button  width="100%"
                 variant="ghost"
                 justifyContent="flex-start"
                 borderRight="4px solid transparent"
                 borderRadius="0"
                 _hover={{
                   bg: 'white',
                   color: "blue.500",
                 }}
                 onClick={() => navigate(`/class/${classCode}/members`)}>
          <BsPeople/>
          Student List
        </Button>
      </VStack>
      <VStack color={'gray.500'} fontSize={'small'}>
        <Text>@2025 Alrights reserved</Text>
        <Text>BKStar</Text>
        <Text>Version 1.9.2</Text>
      </VStack>
    </Box>
  );
};