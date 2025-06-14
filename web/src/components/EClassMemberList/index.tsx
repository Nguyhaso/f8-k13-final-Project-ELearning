
import {
  Box,
  Table,
  Text,
  Tag,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { FaKey } from 'react-icons/fa';

const members = [
  { id: 1, name: 'Trần Xuân Bằng', role: 'teacher', isAdmin: true },
  { id: 2, name: 'Phạm Thùy Dương', role: 'Student', isAdmin: false },
  { id: 3, name: 'bang', role: 'Học sinh', isAdmin: false },
];

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

export default function MemberList() {
  return (
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
          {members.map((member, index) => (
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
                  {member.isAdmin && <Icon as={FaKey} color="orange.400" />}
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}
