import {
  ROUTES_ROOT_MAIN,
  ROUTES_DESIGN_REQUEST_REGISTRATION,
  ROUTES_ROOT_HOME,
  ROUTES_DESIGN_REQUEST_DETAILS,
  ROUTES_LOGIN,
} from "@/routes/routes";
import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import DesignReqRegist from "@/components/DesignReqRegist";
import Home from "@/components/Home";
import DesignReqDetail from "@/container/designReq/DesignReqDetail";
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
        element: <DesignReqDetail />,
      },
    ],
  },
  {
    path: ROUTES_DESIGN_REQUEST_REGISTRATION,
    element: <DesignReqRegist />,
  },
]);

export default router;
