import { useState } from 'react';
import Head_section from '../components/Head_section';
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import useAuth from '../Hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useHostImage from '../Hooks/useHostImage';
import { TbFidgetSpinner } from "react-icons/tb";
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const {createUser, updateUserProfile, isLoading, setIsLoading} = useAuth();
    const navigate = useNavigate();

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const {mutateAsync : save_user} = useMutation({
        mutationFn : async (user) => {
            const {data} = await axios.post(`http://localhost:8000/post_user`, {...user, role : "user"});
            return data;
        }, 
        onSuccess : () => {
            setIsLoading(false);
            toast.success("User registration successful!");
            navigate('/')
        }
    })

    const handleRegisterSubmit = async(event) => {
        event.preventDefault();

        const form = event.target;
        const name = form?.name?.value;
        const email = form?.email?.value;
        const photo = form?.photo?.files[0] || "No image now";
        const password = form?.password?.value;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;

        if(!name || !email || !photo || !password){
            return toast.error("Fill all the fields carefully!")
        }

        if(!passwordRegex.test(password)){
            return toast.error("Your password must contain at least one uppercase letter, one lowercase letter, one special character and one number!")
        }

        try{
            const {user} = await createUser(email, password);
            const image_url = await useHostImage(photo);
            await updateUserProfile(name, image_url)
        
            await save_user(user);
        }catch(error){
            setIsLoading(false)
            console.log(error);
            toast.error(error.message)
        }

    }
    return (
        <div className="flex font-poppins items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full my-8 mx-4">
                <div className="text-center mb-2">
                    <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 drop-shadow-lg tracking-wide">
                        Kanji<span className="text-indigo-500">Kidz</span>
                    </h2>
                </div>
                <Head_section heading={"Register Now!!"} subheading={"Master the Art of Japanese—One Kanji at a Time!"} />
                <form onSubmit={handleRegisterSubmit}>
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
                        {isLoading ? <TbFidgetSpinner size={20} className='animate-spin' /> : "Submit"}
                    </button>
                </form>

                <p className="text-sm text-gray-500 text-center mt-6">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline font-semibold">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
