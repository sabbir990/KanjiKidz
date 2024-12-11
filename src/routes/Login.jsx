import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Head_section from "../components/Head_section";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";

function Login() {
    const [show, setShow] = useState(false)
    const { signInUser, setIsLoading, isLoading } = useAuth();
    const navigate = useNavigate();

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form?.email?.value;
        const password = form?.password?.value;

        try {
            setIsLoading(true);

            await signInUser(email, password);

            navigate('/');
            toast.success("Signing in user successful!")
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
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {isLoading ? <TbFidgetSpinner size={20} className="animate-spin mx-auto" /> : "Login"}
                        </button>
                    </div>
                </form>
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
