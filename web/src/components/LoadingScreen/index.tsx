import {Flex, Spinner,Text} from "@chakra-ui/react";

export default function (){
  return (
    <Flex minH="100vh" justify="center" align="center" direction="column" bg="gray.50">
      <Spinner size="xl" color="blue.500" />
      <Text mt={4}>Đang tải dữ liệu lớp học...</Text>
    </Flex>
  );
}