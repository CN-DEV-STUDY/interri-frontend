import { ROUTES_ROOT_MAIN } from "@/routes/routes";
import { createBrowserRouter } from "react-router-dom";
import App from "@/App";

const router = createBrowserRouter([
  {
    path: ROUTES_ROOT_MAIN,
    element: <App />,
  },
]);

export default router;
