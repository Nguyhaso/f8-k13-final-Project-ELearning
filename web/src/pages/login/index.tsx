import {
  Button,
  Checkbox,
  Field,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { PasswordInput } from "../../components/ui/password-input.tsx";

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
        Đăng Nhập
      </Heading>
      <Text fontSize="sm" color="gray.600" textAlign="center" mb={6}>
        Cung cấp giải pháp toàn diện cho lớp học thông minh
      </Text>

      <form onSubmit={onSubmit} style={{ width: "100%", maxWidth: "400px" }}>
        <Stack gap="4" align="stretch">
          <Field.Root invalid={!!errors.username}>
            <Input placeholder="Nhap email" {...register("username")} />
            <Field.ErrorText>{errors.username?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.password}>
            <PasswordInput placeholder="Nhap mat khau" {...register("password")} />
            <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
          </Field.Root>

          <Checkbox.Root mt="2" value="remember me">
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>Ghi nhớ tôi</Checkbox.Label>
          </Checkbox.Root>

          <Button type="submit" colorScheme="blue" width="full">
            Đăng nhập
          </Button>
        </Stack>
      </form>
    </Flex>
  );
}
