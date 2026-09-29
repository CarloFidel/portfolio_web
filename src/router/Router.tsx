import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Works from "../pages/Works";
import { PATHS } from "../constants/paths.constatnts";
import { WorkDetail } from "../pages/WorkDetail";

export const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: PATHS.WORKS_PAGE,
        element: <Works />,
      },
      {
        path: `${PATHS.WORKS_PAGE}/:projectId`,
        element: <WorkDetail />,
      },
    ],
  },
]);
