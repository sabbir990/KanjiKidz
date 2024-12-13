import React, { useState } from 'react';
import Head_section from '../../components/Head_section';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';
import { TbFidgetSpinner } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

export default function Add_vocabulary() {
    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const { mutateAsync: addVocabulary } = useMutation({
        mutationFn: async (vocabulary) => {
            const { data } = await axios.post('https://kanjikids-server.vercel.app/add_vocabulary', vocabulary);
            return data;
        },
        onSuccess: () => {
            setIsLoading(false);
            toast.success('Vocabulary added successfully!');
            navigate('/dashboard/vocabulary_management')
        },

        onError: (error) => {
            setIsLoading(false);
            console.error(error);
            toast.error('Failed to add vocabulary. Please try again.');
        }
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const form = event.target;
        const word = form.word.value.trim();
        const pronunciation = form.pronunciation.value.trim();
        const whenToSay = form.whenToSay.value.trim();
        const lessonNo = form.lessonNo.value.trim();
        const adminEmail = form.adminEmail.value.trim();

        const newVocabulary = { word, pronunciation, whenToSay, lessonNo, adminEmail };

        try {
            await addVocabulary(newVocabulary);
            form.reset();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="font-poppins">
            <Head_section heading={'Add New Vocabulary'} subheading={'Expand Your Vocabulary Repository with Precision and Ease'} />
            <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md mt-8">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="word" className="block text-sm font-semibold text-gray-700">
                            Word (Japanese)
                        </label>
                        <input
                            id="word"
                            name="word"
                            type="text"
                            required
                            className="mt-2 w-full px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm"
                            placeholder="Enter Japanese word (e.g., こんにちは)"
                        />
                    </div>
                    <div>
                        <label htmlFor="pronunciation" className="block text-sm font-semibold text-gray-700">
                            Pronunciation
                        </label>
                        <input
                            id="pronunciation"
                            name="pronunciation"
                            type="text"
                            required
                            className="mt-2 w-full px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm"
                            placeholder="Enter pronunciation (e.g., Konnichiwa)"
                        />
                    </div>
                    <div>
                        <label htmlFor="whenToSay" className="block text-sm font-semibold text-gray-700">
                            When to Say
                        </label>
                        <textarea
                            id="whenToSay"
                            name="whenToSay"
                            rows="3"
                            required
                            className="mt-2 w-full px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm"
                            placeholder="Enter usage description (e.g., Used for greeting)"
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="lessonNo" className="block text-sm font-semibold text-gray-700">
                            Lesson No
                        </label>
                        <input
                            id="lessonNo"
                            name="lessonNo"
                            type="number"
                            required
                            className="mt-2 w-full px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm"
                            placeholder="Enter lesson number (e.g., 1)"
                        />
                    </div>
                    <div>
                        <label htmlFor="adminEmail" className="block text-sm font-semibold text-gray-700">
                            Admin Email
                        </label>
                        <input
                            defaultValue={user?.email}
                            id="adminEmail"
                            name="adminEmail"
                            type="email"
                            required
                            disabled
                            className="mt-2 w-full px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-sm"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`btn btn-info btn-block text-white`}
                        >
                            {isLoading ? <TbFidgetSpinner size={24} className="animate-spin" /> : 'Add Vocabulary'}
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}
