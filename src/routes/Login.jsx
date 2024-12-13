import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Head_section from "../components/Head_section";
import { FaEyeSlash, FaGoogle, FaRegEye } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

function Login() {
    const [show, setShow] = useState(false)
    const { signInUser, setIsLoading, isLoading, googleLogin, user } = useAuth();
    const navigate = useNavigate();

    const { mutateAsync: save_user } = useMutation({
        mutationFn: async (user) => {
            const { data } = await axios.post(`https://kanjikids-server.vercel.app/post_user`, { ...user, role: "user" });
            return data;
        },

        onSuccess: () => {
            setIsLoading(false);
            navigate('/');
            toast.success("User Login Successful!")
        }
    })

    const verifyUser = async (email) => {
        try {
            if (!email) {
                throw new Error("Email is required.");
            }

            console.log("Starting API call...");
            const response = await axios.get(`https://kanjikids-server.vercel.app/my_data/${email}`);
            console.log("API call complete. Response received:", response);

            const { data } = response;

            if (data?.role === "admin") {
                toast.success("Welcome to Admin Dashboard!");
                navigate("/dashboard");
            } else {
                toast.success("User login successful!");
                navigate("/");
            }
        } catch (error) {
            console.error("Error during user verification:", error);
            toast.error(error.response?.data?.message || error.message || "Error verifying user role.");
        }
    };


    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form?.email?.value;
        const password = form?.password?.value;

        try {
            setIsLoading(true);

            await signInUser(email, password);

            await verifyUser(email);
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log(error);
            toast.error(error.message)
        }
    }

    const handleToggleShow = () => {
        setShow(!show)
    }

    const handleGoogleLogin = async () => {
        try {
            setIsLoading(true);
            const { user } = await googleLogin();
            await save_user(user);
            await verifyUser(user?.email);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false)
            console.log(error);
            toast.error(error.message)
        }
    }
    return (
        <div className="min-h-screen font-poppins flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg mx-4 p-8 w-full max-w-md">
                <div className="text-center mb-2">
                    <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 drop-shadow-lg tracking-wide">
                        Kanji<span className="text-indigo-500">Kidz</span>
                    </h2>
                </div>
                <Head_section heading={"Login"} subheading={"Welcome back! Please login to your account."} />
                <form className="space-y-4" onSubmit={handleLoginSubmit}>
                    {/* Email Field */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Enter your email"
                        />
                    </div>
                    {/* Password Field */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <div className="flex items-center space-x-2">
                            <input
                                type={show ? "text" : "password"}
                                name="password"
                                id="password"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Enter your password"
                            />
                            <span className="btn btn-ghost" onClick={handleToggleShow}>{show ? <FaEyeSlash /> : <FaRegEye />}</span>
                        </div>
                    </div>
                    {/* Submit Button */}
                    <div>
                        <button
                            disabled={isLoading}
                            type="submit"
                            className="btn btn-info btn-block font-semibold"
                        >
                            {isLoading ? <TbFidgetSpinner size={20} className="animate-spin mx-auto" /> : "Login"}
                        </button>
                    </div>
                </form>
                <button className="btn btn-ghost btn-block mt-4" onClick={handleGoogleLogin}>Sign in with Google <FaGoogle /></button>
                {/* Register Link */}
                <p className="text-sm text-center text-gray-600 mt-4">
                    Don’t have an account?{" "}
                    <Link
                        to="/register"
                        className="text-blue-500 hover:text-blue-600 font-medium"
                    >
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
