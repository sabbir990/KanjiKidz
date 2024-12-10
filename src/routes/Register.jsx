import { useState } from 'react';
import Head_section from '../components/Head_section';
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full my-8 mx-4">
                <div className="text-center mb-2">
                    <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 drop-shadow-lg tracking-wide">
                        Kanji<span className="text-indigo-500">Kidz</span>
                    </h2>
                </div>
                <Head_section heading={"Register Now!!"} subheading={"Master the Art of Japanese—One Kanji at a Time!"} />
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name='name'
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name='email'
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="photo">
                            Upload Photo
                        </label>
                        <input
                            name='photo'
                            type="file"
                            id="photo"
                            className="w-full px-4 py-2 border rounded-lg file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className='flex space-x-2'>
                            <input
                                type={showPassword ? "text" : "password"}
                                name='password'
                                id="password"
                                placeholder="Create a secure password"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            <span onClick={handleShowPassword} className='btn btn-ghost'>{showPassword ? <FaEyeSlash /> : <FaRegEye />}</span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-success btn-block font-poppins"
                    >
                        Submit
                    </button>
                </form>

                <p className="text-sm text-gray-500 text-center mt-6">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600 hover:underline font-semibold">
                        Login here
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;
