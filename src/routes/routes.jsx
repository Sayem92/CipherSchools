import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/errorPage/ErrorPage";
import Main from "../layout/Main";
import Home from "../components/home/Home";
import Register from "../components/form/Register";

export const router = createBrowserRouter([{
    path: '/',
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/home',
            element:<Home></Home>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
    ]
}])