import {Box, Button, Field, Flex, Heading, HStack, Image, Input, Stack, Text} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import {PasswordInput} from "../../components/ui/password-input.tsx";
import {postMethod} from "../../ulti";

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export default function () {
    const {
      register,
      handleSubmit,
      formState: {errors},
      reset,
      getValues,
    } = useForm<FormValues>()

  const onSubmit = handleSubmit (async (data)=> {
    const dataSubmit = {
      name: data.name,
      email: data.email,
      role: "student",
      status: "confirming",
      password: data.password,
    }

    await postMethod('/master/user/',dataSubmit)
    console.log(dataSubmit)

  })

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      height="100vh"
      bg="gray.50"
    >
      <Box
      bg={"white"}
      p={"24px"}
      borderRadius={"3xl"}
      boxShadow={"lg"}
      width={"100%"}
      maxW="500px"

      >
      <Flex
        align="center"
        justify="center"
        gap={2}
        mb={6}
      >
        <Image
          src="https://bk-exam-public.s3.ap-southeast-1.amazonaws.com/logo2.png"
          boxSize="70px"
          fit="contain"
          alt="BKStar Logo"
        />
        <Text fontSize="48px" lineHeight="70px" fontWeight="bold">
          BK
        </Text>
        <Text
          fontSize="48px"
          lineHeight="70px"
          fontWeight="bold"
          color="yellow.500"
        >
          Star
        </Text>
      </Flex>

      <Heading size="3xl" textAlign="center" m={4}>
        Đăng kí học viên
      </Heading>

      <form onSubmit={onSubmit}>
        <Stack gap="8" >

          <Field.Root invalid={!!errors.name}>
          <Field.Label>Full Name</Field.Label>
          <Input type={"text"} placeholder={"Enter Full Name"} {...register("name",{required:"Name is required"})}></Input>
            <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.email}>
            <Field.Label>Email Address</Field.Label>
            <Input
              type="email"
              placeholder="Enter Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Invalid email format",
                },
              })}
            />
            <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.password}>
            <Field.Label>Password</Field.Label>
            <PasswordInput
              placeholder="Enter Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.confirmPassword}>
            <Field.Label>Confirm Password</Field.Label>
            <PasswordInput
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === getValues("password") ||
                  "Passwords do not match",
              })}
            />
            <Field.ErrorText>{errors.confirmPassword?.message}</Field.ErrorText>
          </Field.Root>

          <HStack gap={"4"} justify={"center"} pt={2}>
            <Button type="submit" bg={"green.600"}>Submit</Button>
            <Button type="reset" bg={"red.600"} onClick={()=> reset()}>Cancel</Button>
          </HStack>
        </Stack>
      </form>
      </Box>
    </Flex>
  );
}
