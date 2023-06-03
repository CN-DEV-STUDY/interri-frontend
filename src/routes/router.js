import {
  ROUTES_ROOT_MAIN,
  ROUTES_DESIGN_REQUEST_REGISTRATION,
  ROUTES_ROOT_HOME,
  ROUTES_DESIGN_REQUEST_DETAILS,
  ROUTES_LOGIN,
} from "@/routes/routes";
import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import DesignRequestRegistration from "@/components/DesignReqRegist";
import Home from "@/components/Home";
import DesignRequestDetail from "@/components/DesignRequestDetail";
import Login from "@/components/user/Login";

const router = createBrowserRouter([
  {
    path: ROUTES_ROOT_MAIN,
    element: <App />,
    // errorElement: <ErrorBoundary />,
    children: [],
  },
  {
    path: ROUTES_LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES_ROOT_HOME,
    element: <Home />,
    children: [
      {
        path: ROUTES_DESIGN_REQUEST_DETAILS,
        element: <DesignRequestDetail />,
      },
    ],
  },
  {
    path: ROUTES_DESIGN_REQUEST_REGISTRATION,
    element: <DesignRequestRegistration />,
  },
]);

export default router;
