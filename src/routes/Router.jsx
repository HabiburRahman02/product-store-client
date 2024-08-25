import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Shop from "../pages/Shop/Shop";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Secret from "../pages/Secret/Secret";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/shop',
        element: <Shop></Shop>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: '/secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      }
    ]
  }
]);

export default router;