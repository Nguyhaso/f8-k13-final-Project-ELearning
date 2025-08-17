import {
  createBrowserRouter,
} from "react-router";
import LoginPage from '../pages/login'
import Register from '../pages/register'
import Classes from '../pages/classes'
import Class from "../pages/class";
import Members from "../pages/members";
import ExamGroups from "../pages/examGroups";
import ExamList from "../pages/examList";
import {ProtectedLayout} from "../components";
import Exam from "../pages/exam";
import NotFound404 from "../pages/404";


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
      <ProtectedLayout>
        <Members/>
      </ProtectedLayout>


  },
  {
    path: "/class/:id/exams",
    element:
      <ProtectedLayout>
        <ExamGroups/>
      </ProtectedLayout>
  },
  {
    path: "/class/:id/exams/:examList",
    element:
      <ProtectedLayout>
        <ExamList/>
      </ProtectedLayout>
  },
  {
    path: "/class/:id/exams/:examList/:exam",
    element:
      <ProtectedLayout>
        <Exam/>
      </ProtectedLayout>
  },
  {
    path: "/*",
    element:
      <NotFound404/>

  },
]);
export default router;


