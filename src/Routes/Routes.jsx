import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layOut/Main";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
    },
  ]);
  export default router