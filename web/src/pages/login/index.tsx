import {
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
import {useForm} from "react-hook-form";
import {PasswordInput} from "../../components/ui/password-input.tsx";
import {useNavigate} from "react-router";
import {postMethod} from "../../ulti";
import {useState} from "react";

export default function LoginHeader() {
  interface FormValues {
    email: string;
    password: string;
  }

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormValues>();

  const [formError, setFormError] = useState<string | null>(null);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await postMethod('/login/', data)
      if (res) {
        localStorage.setItem('accessToken', res.access)
        localStorage.setItem('refreshToken', res.refresh)
        navigate('/classes')
      }
    } catch (error: any) {
      console.log(error.response.data.detail)
      if (error.response.data.detail) setFormError(error.response.data.detail)
      else (setFormError('some thing went wrong'))
    }
  })


  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg="white"
    >
      <Flex
        direction="column"
        p={14}
        align="center"
        justify="center"
        bg="gray.50"
        rounded={'2xl'}
        borderWidth="1px"

      >
        <Flex>
          <Image
            src="https://bk-exam-public.s3.ap-southeast-1.amazonaws.com/logo2.png"
            boxSize="70px"
            fit="contain"
            mx="auto"
            alt="BKStar Logo"
          />
          <Text fontSize="48px" lineHeight="70px" fontWeight="bold">
            BK
          </Text>
          <Text fontSize="48px" lineHeight="70px" fontWeight="bold" color="yellow.500">
            Star
          </Text>
        </Flex>

        <Heading size="md" textAlign="center" mt={4}>
          Login
        </Heading>
        <Text fontSize="sm" color="gray.600" textAlign="center" mb={6}>
          Cung cấp giải pháp toàn diện cho lớp học thông minh
        </Text>

        <form onSubmit={onSubmit} style={{width: "100%", maxWidth: "400px"}}>

          <Stack gap="4" align="stretch">
            <Field.Root invalid={!!errors.email}>
              <Input placeholder="Enter Email" autoFocus {...register("email",{required:"Email is required"})} />
              <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={!!errors.password}>
              <PasswordInput placeholder="Enter Password" {...register("password",{required:"Password is required"})} />
              <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
            </Field.Root>

            {formError && (
              <Text color="red.500" fontSize="sm" mb={2} textAlign="center">
                {formError}
              </Text>
            )}

            <HStack justify="space-between" mt={2} align="center">
              <Checkbox.Root value="remember me">
                <Checkbox.HiddenInput/>
                <Checkbox.Control/>
                <Checkbox.Label>Remember me</Checkbox.Label>
              </Checkbox.Root>

              <Button onClick={() => navigate("/register")}>
                Register
              </Button>
            </HStack>
            <Button type="submit" colorScheme="blue" width="full">
              Login
            </Button>
          </Stack>
        </form>
      </Flex>
    </Flex>
  );
}
