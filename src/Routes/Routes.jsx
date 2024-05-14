import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import AddBlogs from "../Pages/AddBlogs";
import Blogs from "../Pages/Blogs";
import List from "../Pages/List";
import Feature from "../Pages/Feature";
import PrivateRoutes from "./PrivateRoutes";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children :[
        {
          path: "/",
          element :<Home></Home>
        },
        {
          path: "/signIn",
          element :<SignIn></SignIn>
        },
        {
          path: "/signUp",
          element :<SignUp></SignUp>
        },
        {
          path: "/addBlogs",
          element :<PrivateRoutes>
            <AddBlogs></AddBlogs>
          </PrivateRoutes>
        },
        {
          path: "/blogs",
          element :<Blogs></Blogs>
        },
        {
          path: "/wishlist",
          element :<List></List>
        },
        {
          path: "/feature",
          element :<Feature></Feature>
        },
      ]
    },
  ]);
  export default router