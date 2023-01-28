import {createBrowserRouter} from "react-router-dom";
import Billings from "../pages/Billings/Billings";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/LoginRegistration/Login";
import Registration from "../pages/LoginRegistration/Registration";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Billings></Billings>,
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: "/login",
        element: <Login></Login>,
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: "/register",
        element: <Registration></Registration>,
        errorElement: <ErrorPage></ErrorPage>
    }
]);

export default router;