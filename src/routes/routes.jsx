import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login";
import Register from "./Register";
import Manage_users from "./Dashboard/Manage_users";
import Lesson_management from "./Dashboard/Lesson_management";
import Add_lesson from "./Dashboard/Add_lesson";
import Vocabulary_management from "./Dashboard/Vocabulary_management";
import Add_vocabulary from "./Dashboard/Add_vocabulary";
import Lessons from "./User_Routes/Lessons";
import Lesson_details from "./User_Routes/Lesson_details";
import Tutorials from "./User_Routes/Tutorials";
import User_profile from "./User_Routes/User_profile";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Root />,
        children : [
            {
                index : true,
                element : <Lessons />
            },
            {
                path : '/lessons',
                element : <Lessons />
            },
            {
                path : '/lesson/:id',
                element : <Lesson_details />
            },
            {
                path : '/tutorials',
                element : <Tutorials />
            },
            {
                path : '/user_profile',
                element : <User_profile />
            }
        ]
    },
    {
        path : '/dashboard',
        element : <Dashboard />,
        children : [
            {
                index : true,
                element : <Manage_users />
            },
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
            },
            {
                path : "/dashboard/vocabulary_management",
                element : <Vocabulary_management />
            },
            {
                path : "/dashboard/add_vocabulary",
                element : <Add_vocabulary />
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