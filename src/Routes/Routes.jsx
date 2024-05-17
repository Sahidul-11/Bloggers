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
import PrivateRoutes from "./PrivateRoutes";
import Details from "../Components/Details";
import Update from "../Components/Update";
import FeaturedBlogs from "../Pages/FeaturedBlogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/addBlogs",
        element: <PrivateRoutes>
          <AddBlogs></AddBlogs>
        </PrivateRoutes>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/details/:id",
        element: <PrivateRoutes>
          <Details></Details>
        </PrivateRoutes>
      },
      {
        path: "/wishlist",
        element: <PrivateRoutes>
          <List></List>
        </PrivateRoutes>
      },
      {
        path: "/update/:id",
        element: <PrivateRoutes>
          <Update></Update>
        </PrivateRoutes>
      },
      {
        path: "/feature",
        element:<FeaturedBlogs></FeaturedBlogs>
      },
    ]
  },
]);
export default router