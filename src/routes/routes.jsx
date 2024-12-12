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
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivateRoute>
            <Root />
        </PrivateRoute>,
        children: [
            {
                index: true,
                element: <PrivateRoute>
                    <Lessons />
                </PrivateRoute>
            },
            {
                path: '/lessons',
                element: <PrivateRoute>
                    <Lessons />
                </PrivateRoute>
            },
            {
                path: '/lesson/:id',
                element: <PrivateRoute>
                    <Lesson_details />
                </PrivateRoute>
            },
            {
                path: '/tutorials',
                element: <PrivateRoute>
                    <Tutorials />
                </PrivateRoute>
            },
            {
                path: '/user_profile',
                element: <PrivateRoute>
                    <User_profile />
                </PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <AdminRoute>
                <Dashboard />
            </AdminRoute>
        </PrivateRoute>,
        children: [
            {
                index: true,
                element: <PrivateRoute>
                    <AdminRoute>
                        <Manage_users />
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: '/dashboard/manage_users',
                element: <PrivateRoute>
                    <AdminRoute>
                        <Manage_users />
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: '/dashboard/lesson_management',
                element: <PrivateRoute>
                    <AdminRoute>
                        <Lesson_management />
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: '/dashboard/add_lesson',
                element: <PrivateRoute>
                    <AdminRoute>
                        <Add_lesson />
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: "/dashboard/vocabulary_management",
                element: <PrivateRoute>
                    <AdminRoute>
                        <Vocabulary_management />
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: "/dashboard/add_vocabulary",
                element: <PrivateRoute>
                    <AdminRoute>
                        <Add_vocabulary />
                    </AdminRoute>
                </PrivateRoute>
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
])

export default router;