import {
  Box,
  Button,
  Checkbox,
  Field,
  Flex,
  Heading, HStack,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { PasswordInput } from "../../components/ui/password-input.tsx";
import {useNavigate} from "react-router";

export default function LoginHeader() {
  interface FormValues {
    username: string;
    password: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => console.log(data));

 const navigate = useNavigate();
  return (
    <Flex
      minH="100vh"
      direction="column"
      align="center"
      justify="center"
      px={4}
    >
      <Flex>
        <Image
          src="https://bk-exam-public.s3.ap-southeast-1.amazonaws.com/logo2.png"
          boxSize="70px"
          fit="contain"
          mx="auto"
          alt="BKStar Logo"
        />
        <Text fontSize="48px" lineHeight="70px" fontWeight="bold" >
          BK
        </Text>
        <Text fontSize="48px" lineHeight="70px" fontWeight="bold" color="yellow.500" >
          Star
        </Text>
      </Flex>

      <Heading size="md" textAlign="center" mt={4}>
        Login
      </Heading>
      <Text fontSize="sm" color="gray.600" textAlign="center" mb={6}>
        Cung cấp giải pháp toàn diện cho lớp học thông minh
      </Text>

      <form onSubmit={onSubmit} style={{ width: "100%", maxWidth: "400px" }}>
        <Stack gap="4" align="stretch">
          <Field.Root invalid={!!errors.username}>
            <Input placeholder="Enter Email" {...register("username")} />
            <Field.ErrorText>{errors.username?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.password}>
            <PasswordInput placeholder="Enter Password" {...register("password")} />
            <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
          </Field.Root>

          <HStack justify="space-between" mt={2} align="center">
          <Checkbox.Root  value="remember me">
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>Remember me</Checkbox.Label>
          </Checkbox.Root>

            <Button onClick={()=>navigate("/register")}>
              Register
            </Button>
          </HStack>
          <Button type="submit" colorScheme="blue" width="full">
            Login
          </Button>
        </Stack>
      </form>
    </Flex>
  );
}
