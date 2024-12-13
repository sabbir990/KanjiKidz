import { Dialog, DialogTitle, DialogPanel } from '@headlessui/react';
import { TbFidgetSpinner } from 'react-icons/tb';
import { toast } from 'react-hot-toast'; 
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import axios from 'axios'; 
import useAuth from '../Hooks/useAuth';

export default function EditLessonModal({ isOpen, close, _id, refetch }) {
    const { isLoading, setIsLoading } = useAuth();
    const [lessonData, setLessonData] = useState({
        lessonName: '',
        lessonNumber: '',
        vocabularyCount: '',
    });

    const { data: selectedLesson } = useQuery({
        queryKey: ['selectedLesson', _id],
        queryFn: async () => {
            const { data } = await axios.get(`https://kanjikids-server.vercel.app/single_lesson/${_id}`);
            return data;
        },
    });

    useEffect(() => {
        if (selectedLesson) {
            setLessonData({
                lessonName: selectedLesson.lessonName,
                lessonNumber: selectedLesson.lessonNumber,
                vocabularyCount: selectedLesson.vocabularyCount,
            });
        }
    }, [selectedLesson]);

    const { mutateAsync: updateLesson } = useMutation({
        mutationFn: async (lesson) => {
            const { data } = await axios.patch(`https://kanjikids-server.vercel.app/update_lesson/${_id}`, lesson);
            return data;
        },
        onSuccess: () => {
            setIsLoading(false);
            refetch();
            toast.success('Updating a lesson successful!');
            close();
        },
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            await updateLesson(lessonData);
        } catch (error) {
            setIsLoading(false);
            console.error(error);
            toast.error(error.message);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLessonData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <Dialog open={isOpen} as="div" className="relative z-50 font-poppins" onClose={close}>
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="w-full max-w-xl bg-white rounded-lg shadow-2xl">
                    <DialogTitle as="h3" className="text-xl font-semibold text-gray-800 border-b px-6 pt-4">
                        Edit Lesson Details
                    </DialogTitle>
                    <form onSubmit={handleFormSubmit} className="px-6 py-6 space-y-6">
                        <div>
                            <label htmlFor="lessonName" className="block text-sm font-medium text-gray-600">
                                Lesson Name
                            </label>
                            <input
                                id="lessonName"
                                name="lessonName"
                                value={lessonData.lessonName}
                                onChange={handleInputChange}
                                type="text"
                                className="mt-2 w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm"
                                placeholder="Enter lesson name"
                            />
                        </div>
                        <div>
                            <label htmlFor="lessonNumber" className="block text-sm font-medium text-gray-600">
                                Lesson Number
                            </label>
                            <input
                                id="lessonNumber"
                                name="lessonNumber"
                                value={lessonData.lessonNumber}
                                onChange={handleInputChange}
                                type="number"
                                className="mt-2 w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm"
                                placeholder="Enter lesson number"
                            />
                        </div>
                        <div>
                            <label htmlFor="vocabularyCount" className="block text-sm font-medium text-gray-600">
                                Vocabulary Count
                            </label>
                            <input
                                id="vocabularyCount"
                                name="vocabularyCount"
                                value={lessonData.vocabularyCount}
                                disabled
                                className="mt-2 w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm"
                                placeholder="Enter vocabulary count"
                            />
                        </div>
                        <div className="flex justify-end gap-4">
                            <button
                                type="button"
                                onClick={close}
                                className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                disabled={isLoading}
                                type="submit"
                                className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {isLoading ? <TbFidgetSpinner size={24} className="animate-spin" /> : 'Save changes'}
                            </button>
                        </div>
                    </form>
                </DialogPanel>
            </div>
        </Dialog>
    );
}
