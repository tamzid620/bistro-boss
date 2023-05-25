
import {
    createBrowserRouter
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Order from "../pages/Order/Order/Order";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element:  <Home></Home>,
        },
        {
          path:'menu',
          element:<Menu></Menu>,
        },
        {
          path:'order',
          element:<Order></Order>,
        },
      ]
    },
  ]);
