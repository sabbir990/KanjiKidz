import React from "react";
import { Link } from "react-router-dom";
import Head_section from "../components/Head_section";

function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <div className="text-center mb-2">
                    <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 drop-shadow-lg tracking-wide">
                        Kanji<span className="text-indigo-500">Kidz</span>
                    </h2>
                </div>
                <Head_section heading={"Login"} subheading={"Welcome back! Please login to your account."} />
                <form className="space-y-4">
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
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Enter your password"
                        />
                    </div>
                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Login
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
