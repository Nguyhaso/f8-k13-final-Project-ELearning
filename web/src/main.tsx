import ReactDOM from "react-dom/client"
import {
  RouterProvider,
} from "react-router";
import {ChakraProvider, defaultSystem} from "@chakra-ui/react";
import router from "./router";



ReactDOM.createRoot(document.getElementById("root")!).render(

  <ChakraProvider value={defaultSystem} >
    <RouterProvider router={router} />
  </ChakraProvider>

);