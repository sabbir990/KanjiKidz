import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login";
import Register from "./Register";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Root />,
    },
    {
        path : '/dashboard',
        element : <Dashboard />
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