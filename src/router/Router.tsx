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
        path: PATHS.HOME,
        element: <Home />,
      },

      {
        path: PATHS.WORK,
        element: <Works />,
      },
    ],
  },
]);
