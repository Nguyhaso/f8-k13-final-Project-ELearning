import { Provider } from "./components/ui/provider"
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import LoginPage from './pages/login'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider>
      <RouterProvider router={router} />
    </Provider>
)