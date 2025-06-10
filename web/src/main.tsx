import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import LoginPage from './pages/login'
import Register from './pages/register'
import {ChakraProvider, defaultSystem} from "@chakra-ui/react";


const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);


ReactDOM.createRoot(document.getElementById("root")!).render(

  <ChakraProvider value={defaultSystem} >
    <RouterProvider router={router} />
  </ChakraProvider>

);