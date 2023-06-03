import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Registe";
import Secret from "../pages/shared/Secret/Secret";
import PrivateRoutes from "./PrivateRoutes";
import MYCart from "../pages/Dashboard/MyCart/MYCart";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../pages/Dashboard/ManageItem/ManageItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";


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
          path:'/menu',
          element:<Menu></Menu>,
        },
        {
          path:'/order/:category',
          element:<Order></Order>,
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/register',
          element: <Register></Register>,
        },
        {
          path: '/secret',
          element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>, 
      children: [
        {
          path: 'userhome', 
          element: <UserHome></UserHome>,
        },
        {
          path: 'mycart', 
          element: <MYCart></MYCart>,
        },
        {
          path: 'payment', 
          element: <Payment></Payment>,
        },
        // Admin Routes -------------------------
        {
          path: 'adminhome', 
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>,
        },
        {
          path: 'allusers', 
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
        },
        {
          path: 'additem', 
          element: <AdminRoute><AddItem></AddItem></AdminRoute>,
        },
        {
          path: 'manageitem', 
          element: <AdminRoute><ManageItem></ManageItem></AdminRoute>,
        },
      ]
    }

  ]);
