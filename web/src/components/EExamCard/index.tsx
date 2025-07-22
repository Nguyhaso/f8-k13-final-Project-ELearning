import {Text, Flex, Box, Icon} from "@chakra-ui/react";
import {FaRegFileAlt} from "react-icons/fa";
import {Link, useParams} from "react-router";



interface ExamCardProps {
  title: string;
  startDate: string;
  examId: number;
}



export default function ExamCard({ title, startDate , examId}: ExamCardProps) {
  const {id} =useParams();
  return (
    <Box
      bg="white"
      borderRadius="md"
      boxShadow="sm"
      p={4}
      borderLeft="4px solid"
      borderColor="blue.400"
      maxW="md"
    >
      <Flex align="center" gap={4}>
        <Icon as={FaRegFileAlt} boxSize={8} color="blue.400" />
        <Box>

          <Text fontWeight="bold">
            <Link to={`/class/${id}/exams/${examId}`} style={{ color: 'inherit', textDecoration: 'underline' }}>
              {title}
            </Link>
          </Text>
          <Text fontSize="sm" color="gray.500">
            Ngày bắt đầu: {startDate}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
