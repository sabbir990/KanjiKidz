import React, { useState } from 'react';
import Head_section from '../../components/Head_section';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { TbFidgetSpinner } from 'react-icons/tb';

export default function Add_lesson() {
    const { setIsLoading, isLoading } = useAuth();
    const navigate = useNavigate();

    const { mutateAsync: add_lesson } = useMutation({
        mutationFn: async (lesson) => {
            const { data } = await axios.post(`http://localhost:8000/add_lesson`, lesson)
            return data
        },

        onSuccess: () => {
            setIsLoading(false);
            toast.success("Lesson Added Successfully!")
            navigate('/dashboard/lesson_management')
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true)

        const form = event.target;
        const lessonName = form?.lessonName?.value;
        const lessonNumber = form?.lessonNumber?.value;
        const vocabularyCount = 0;
        const vocabularies = [];

        try {
            const lesson = {
                lessonName, lessonNumber, vocabularyCount, vocabularies
            }

            await add_lesson(lesson)
        } catch (error) {
            setIsLoading(false)
            console.log(error);
            toast.error(error.message)
        }

    };

    return (
        <div className="min-h-screen flex items-center justify-center font-poppins">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <Head_section heading={'Add New Lesson'} subheading={'Fill in the details to create a new lesson and add vocabulary.'} />
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="lessonName" className="block text-sm font-medium text-gray-700">Lesson Name</label>
                        <input
                            type="text"
                            name='lessonName'
                            className="w-full p-3 mt-2 border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter lesson name"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="lessonNumber" className="block text-sm font-medium text-gray-700">Lesson Number</label>
                        <input
                            type="number"
                            name='lessonNumber'
                            className="w-full p-3 mt-2 border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter lesson number"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="vocabularyCount" className="block text-sm font-medium text-gray-700">Vocabulary Count</label>
                        <input
                            type="number"
                            name='vocabularyCount'
                            className="w-full p-3 mt-2 border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter vocabulary count"
                            defaultValue={0}
                            disabled={true}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            disabled={isLoading}
                            type="submit"
                            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg w-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {isLoading ? <TbFidgetSpinner size={24} className='animate-spin mx-auto' /> : "Add Lesson"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
