import {Box, Button, Flex, Grid, HStack, Icon, Table, Tag, Text, VStack} from "@chakra-ui/react";
import {BsFiles, BsLaptop, BsPeople, BsShare} from "react-icons/bs";
import {FaKey} from "react-icons/fa";
import type { ClassInfor } from "../../ulti/index.ts";

export default function ({classInfor}: { classInfor:ClassInfor }) {
  const getRoleTagColor = (role: string) => {
    switch (role) {
      case 'teacher':
        return 'pink';
      case 'student':
        return 'green';
      default:
        return 'gray';
    }
  };

  return (
    <VStack gap={'12px'}>
      <Flex width={'100%'} direction="column" p={'12px'} color={'white'} bg={'blue.500'} rounded={'2xl'}>
        <HStack justify="left">
          <BsLaptop/>
          <Text fontSize={'xl'} fontWeight="bold">{classInfor.name}</Text>
        </HStack>
        <Text>Teacher : {classInfor.users[0].name}</Text>
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
      <Grid templateColumns={'repeat(2,1fr)'} gap={'12px'}  width={'100%'} fontSize={'6xl'} color={'blue.500'}>
        <HStack justify={'left'} bg={'white'} rounded={'2xl'} p={'12px'}  >
          <BsPeople/>
          <Text fontSize={'xl'}>{classInfor.users.length} members</Text>
        </HStack>
        <HStack justify={'left'} bg={'white'} rounded={'2xl'} p={'12px'}  >
          <BsFiles/>
          <Text fontSize={'xl'}>5 tests</Text>
        </HStack>
      </Grid>
      <Box borderRadius="2xl" p={5} bg="white" width={'100%'}>
        <Text fontWeight="semibold" fontSize="md" mb={4} color="blue.600">
          Member List
        </Text>

        <Table.Root >
          <Table.Header bg="gray.50">
            <Table.Row>
              <Table.ColumnHeader>No.</Table.ColumnHeader>
              <Table.ColumnHeader>Full Name</Table.ColumnHeader>
              <Table.ColumnHeader>Role</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {classInfor.users.map((member, index) => (
              <Table.Row key={member.id} bg={index % 2 === 0 ? 'gray.50' : 'white'}>
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{member.name}</Table.Cell>
                <Table.Cell>
                  <Flex align="center" gap={2}>
                    <Tag.Root>
                      <Tag.Label colorScheme={getRoleTagColor(member.role)}>
                        {member.role}
                      </Tag.Label>
                    </Tag.Root>
                    {member.role ==='teacher' && <Icon as={FaKey} color="orange.400" />}
                  </Flex>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
    </VStack>
  )
}