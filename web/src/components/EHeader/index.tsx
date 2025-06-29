import {Avatar, Menu, Button, Flex, Portal, HStack, Image, Stack, Text, VStack} from "@chakra-ui/react";
import {BsHouse, BsPlusLg} from "react-icons/bs";
import {LuChevronDown} from "react-icons/lu";
import {useNavigate} from "react-router";

interface User {
  avatar: string;
  name: string;
  role: string;
}

interface EheaderProps {
  pageName?: string;
  user: User
}


export default function Eheader({pageName, user}: EheaderProps) {
const navigate = useNavigate();
  return (
    <Flex justify="space-between" p={'12px'} bg={'white'}>
      <HStack
      >
        <HStack justify={'flex-start'} mr={'100px'}>
          <Image
            src="https://bk-exam-public.s3.ap-southeast-1.amazonaws.com/logo2.png"
            boxSize="40px"
            fit="contain"
            mx="auto"
            alt="BKStar Logo"
          />
          <VStack align={'center'} gap={'0'}>
            <Flex align={'center'} h={'24px'}>
              <Text fontSize="24px" fontWeight="bold"> BK</Text>
              <Text fontSize="24px" fontWeight="bold" color="yellow.500">Star</Text>
            </Flex>
            <Text>Classroom</Text>
          </VStack>
        </HStack>
        <Text fontWeight={'bolder'}>{pageName}</Text>
      </HStack>
      <Flex justify={'space-between'} align={'center'} gap={'8px'}>
        <Button
          borderColor="blue.400"
          color="blue.500"
          bg="white"
          _hover={{bg: "blue.100"}}
          size="sm"
          padding="10px"
          onClick={()=>navigate('/class/add')}
        >
          <BsPlusLg/>
          Create Class
        </Button>
        <Button size="sm" bg="white" _hover={{bg: "blue.100"}} padding="10px" color="blue.500"
        onClick={()=>navigate('/classes')}
        >
          <BsHouse/> Home
        </Button>
        <Flex align={'center'} gap={'8px'} >
          <HStack key={user.name} gap="4">
            <Avatar.Root>
              <Avatar.Fallback name={user.name}/>
              <Avatar.Image src={user.avatar}/>
            </Avatar.Root>
            <Stack gap="0">
              <Text fontWeight="medium">{user.name}</Text>
              <Text color="fg.muted" textStyle="sm">
                {user.role}
              </Text>
            </Stack>
          </HStack>
          <Menu.Root>
            <Menu.Trigger asChild>
              <Button variant={'ghost'} size="2xs">
                <LuChevronDown/>
              </Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="userInfor">User Information</Menu.Item>
                  <Menu.Item value="logOut">Logout</Menu.Item>

                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </Flex>
      </Flex>
    </Flex>
  )
}