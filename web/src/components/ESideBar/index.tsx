import {
  Box,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Drawer,
  IconButton, Portal
} from "@chakra-ui/react";
import {useNavigate} from "react-router";
import {BsGlobe2, BsPeople, BsTrophy, BsList, BsStack, BsHammer} from "react-icons/bs";
import {LuHam} from "react-icons/lu";

export default function Sidebar({classCode}: { classCode: string }) {
  const navigate = useNavigate();
  const isMobile = useBreakpointValue({base: true, md: false}) ;

  const SidebarContent = () => (
    <VStack flex="1" align="start" gap={4}>
      <Button
        width="100%"
        variant="ghost"
        justifyContent="flex-start"
        borderRight="4px solid transparent"
        borderRadius="0"
        _hover={{bg: 'white', color: "blue.500"}}
        onClick={() => {
          navigate(`/class/${classCode}/`);
        }}
      >
        <BsGlobe2/>
        Dashboard
      </Button>
      <Button
        width="100%"
        variant="ghost"
        justifyContent="flex-start"
        borderRight="4px solid transparent"
        borderRadius="0"
        _hover={{bg: 'white', color: "blue.500"}}
        onClick={() => {
          navigate(`/class/${classCode}/exams`);
        }}
      >
        <BsTrophy/>
        Test List
      </Button>
      <Button
        width="100%"
        variant="ghost"
        justifyContent="flex-start"
        borderRight="4px solid transparent"
        borderRadius="0"
        _hover={{bg: 'white', color: "blue.500"}}
        onClick={() => {
          navigate(`/class/${classCode}/members`);
        }}
      >
        <BsPeople/>
        Student List
      </Button>
    </VStack>
  );

  return (
    <>
      {isMobile ? (
        <>

          <Drawer.Root placement={'start'}>
            <Drawer.Trigger asChild>
              <IconButton
                aria-label="Open menu"
                position="fixed"
                top="100px"
                left="16px"
                zIndex={1000}>
                <BsList/>
              </IconButton>
            </Drawer.Trigger>
            <Portal>
              <Drawer.Backdrop/>
              <Drawer.Content
                position="fixed"
                top="0"
                left="0"
                height="100vh"
                maxW="200px"
              >
                <Drawer.Body
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between">

                  {SidebarContent()}
                  <VStack color="gray.500" fontSize="small" mt={6}>
                    <Text>@2025 All rights reserved</Text>
                    <Text>BKStar</Text>
                    <Text>Version 1.9.2</Text>
                  </VStack>
                </Drawer.Body>
              </Drawer.Content>
            </Portal>
          </Drawer.Root>
        </>
      ) : (
        <Box
          position="fixed"
          left={0}
          top="68px"
          height="calc(100vh - 68px)"
          width="200px"
          bg="white"
          p={4}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          {SidebarContent()}
          <VStack color="gray.500" fontSize="small">
            <Text>@2025 All rights reserved</Text>
            <Text>BKStar</Text>
            <Text>Version 1.9.2</Text>
          </VStack>
        </Box>
      )}
    </>
  );
}
