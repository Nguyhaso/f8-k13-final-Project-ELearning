import {useEffect, useState} from "react";
import {Spinner, Flex, Text} from "@chakra-ui/react";
import {useLocation, useNavigate} from "react-router";
import { postMethod} from "../../ulti";

export default function ProtectedLayout({children}: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const publicPaths = ["/login", "/register"];

  useEffect(() => {
      const checkToken = async () => {
          const currentPath = location.pathname;
          if (publicPaths.includes(currentPath)) {
            setLoading(false);
            setAuthorized(true);
            return;
          }

          const accessToken = localStorage.getItem("accessToken");
          const refreshToken = localStorage.getItem("refreshToken");

          if (!accessToken || !refreshToken) {
            navigate('/login');
            return null;
          }
        try {
          const res =  await postMethod(`/login/get_new_token`,{refresh: refreshToken});
          if (res?.status === 200) {
            setAuthorized(true);
            localStorage.setItem('accessToken', res.data.access)
            localStorage.setItem('refreshToken', res.data.refresh)
          } else {
            navigate("/login");
          }
        } catch {
          navigate("/login");
        } finally {
          setLoading(false);
        }
      };

      //     try {
      //       const checkAccessToken = await getPost(accessToken)
      //       return null;
      //     } catch (error:any) {
      //
      //       if (error?.response?.data?.detail === 'token expired')
      //         try {
      //           const res = await postMethod("/login/get_new_token/", {refresh: refreshToken})
      //           if (res?.status === 200) {
      //             setAuthorized(true);
      //             localStorage.setItem('accessToken', res.data.access)
      //             localStorage.setItem('refreshToken', res.data.refresh)
      //           } else {
      //             navigate("/login");
      //           }
      //         } catch {
      //           navigate("/login");
      //         }
      //     } finally {
      //       setLoading(false);
      //     }
      //   }
      // ;

    checkToken().catch(console.error);
    }, [location.pathname]
  )
  ;

  if (loading) {
    return (
      <Flex minH="100vh" justify="center" align="center" direction="column">
        <Spinner size="xl" color="blue.500"/>
        <Text mt={4}>Đang xác thực phiên đăng nhập...</Text>
      </Flex>
    );
  }

  if (!authorized) return null;

  return <>{children}</>;
}
