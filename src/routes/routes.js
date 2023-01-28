import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Billings from "../pages/Billings/Billings";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/LoginRegistration/Login";
import Registration from "../pages/LoginRegistration/Registration";

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
                path: "/billings",
                element: <Billings></Billings>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Registration></Registration>,
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
]);

export default router;