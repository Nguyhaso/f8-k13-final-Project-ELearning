import ReactDOM from "react-dom/client"
import {
  RouterProvider,
} from "react-router";
import {ChakraProvider, defaultSystem} from "@chakra-ui/react";
import router from "./router";
import { ToastContainer } from "react-toastify";



ReactDOM.createRoot(document.getElementById("root")!).render(

  <ChakraProvider value={defaultSystem}  >
    <RouterProvider router={router} />
    <ToastContainer />
  </ChakraProvider>

);