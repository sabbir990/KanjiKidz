import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login";
import Register from "./Register";
import Manage_users from "./Dashboard/Manage_users";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Root />,
    },
    {
        path : '/dashboard',
        element : <Dashboard />,
        children : [
            {
                path : '/dashboard/manage_users',
                element : <Manage_users />
            }
        ]
    },
    {
        path : '/login',
        element : <Login />
    },
    {
        path : '/register',
        element : <Register />
    }
])

export default router;