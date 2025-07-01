import {
  createBrowserRouter,
} from "react-router";
import LoginPage from '../pages/login'
import Register from '../pages/register'
import Classes from '../pages/classes'
import Class from "../pages/class";
import Members from "../pages/members";
import Exams from "../pages/exams";
import {ProtectedLayout} from "../components";


const router = createBrowserRouter([
  {
    path: "/login",
    element:
      <ProtectedLayout>
        <LoginPage/>
      </ProtectedLayout>,
  },
  {
    path: "/register",
    element:
      <ProtectedLayout>
        <Register/>
      </ProtectedLayout>,
  },
  {
    path: "/classes",
    element:
      <ProtectedLayout>
        <Classes/>
      </ProtectedLayout>

  },
  {
    path: "/class/:id",
    element:
      <ProtectedLayout>
        <Class/>
      </ProtectedLayout>

  },
  {
    path: "/class/:id/members",
    element:
      <Members/>

  },
  {
    path: "/class/:id/exams",
    element:
      <Exams/>

  },
]);
export default router;


