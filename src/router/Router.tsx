import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Works from "../pages/Works";
import { PATHS } from "../constants/paths.constatnts";

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
    ],
  },
]);
