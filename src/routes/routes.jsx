import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login";
import Register from "./Register";
import Manage_users from "./Dashboard/Manage_users";
import Lesson_management from "./Dashboard/Lesson_management";
import Add_lesson from "./Dashboard/Add_lesson";

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
            },
            {
                path : '/dashboard/lesson_management',
                element : <Lesson_management />
            },
            {
                path : '/dashboard/add_lesson',
                element : <Add_lesson />
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