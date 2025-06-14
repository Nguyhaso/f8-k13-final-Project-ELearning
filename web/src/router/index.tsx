import {
  createBrowserRouter,
} from "react-router";
import LoginPage from '../pages/login'
import Register from '../pages/register'
import Classes from '../pages/classes'
import Class from "../pages/class";
import Members from "../pages/members";
import Exams from "../pages/exams";


const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/classes",
    element: <Classes/>,
  },
  {
    path: "/class/:id",
    element: <Class/>,
  },
  {
    path: "/class/:id/members",
    element: <Members/>,
  },
  {
    path: "/class/:id/exams",
    element: <Exams/>,
  },
]);
export default router;


