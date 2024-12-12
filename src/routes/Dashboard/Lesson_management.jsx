import React, { useState } from 'react';
import Head_section from '../../components/Head_section'; // Assuming Head_section component is created
import { TbFidgetSpinner } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Edit_lesson_modal from '../../Modals/Edit_lesson_modal';
import Delete_lesson_modal from '../../Modals/Delete_lesson_modal';

export default function Lesson_management() {
    const [isOpenEditModal, setIsOpenEditModal] = useState(false);
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)

    const { data: all_lessons, isPending, refetch } = useQuery({
        queryKey: ['all_lessons'],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8000/all_lessons`);
            return data;
        }
    })

    const openEditModal = () => {
        setIsOpenEditModal(true)
    }

    const closeEditModal = () => {
        setIsOpenEditModal(false)
    }

    const openDeleteModal = () => {
        setIsOpenDeleteModal(true)
    }
    
    const closeDeleteModal = () => {
        setIsOpenDeleteModal(false)
    }

    return (
        <div className="font-poppins">
            <Head_section heading={'Lesson Management Dashboard'} subheading={'Manage your Japanese lessons and vocabulary easily.'} />
            <div>
                <div className='flex items-center justify-end mb-4'>
                    <Link to={'/dashboard/add_lesson'} className='btn btn-block btn-success text-white'>+ Add Lesson</Link>
                </div>
                {
                    isPending ? <div className='flex justify-center'>
                        <TbFidgetSpinner className='animate-spin' size={34} />
                    </div> : <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border dark:bg-neutral-800 dark:border-neutral-700">
                            <thead className="bg-gray-200 dark:bg-neutral-700">
                                <tr>
                                    <th className="text-left px-4 py-2 text-sm font-semibold text-gray-700 dark:text-neutral-300">Lesson Name</th>
                                    <th className="text-left px-4 py-2 text-sm font-semibold text-gray-700 dark:text-neutral-300">Lesson Number</th>
                                    <th className="text-left px-4 py-2 text-sm font-semibold text-gray-700 dark:text-neutral-300">Vocabulary Count</th>
                                    <th className="text-left px-4 py-2 text-sm font-semibold text-gray-700 dark:text-neutral-300">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {all_lessons?.map((lesson) => (
                                    <tr key={lesson?._id} className="border-t dark:border-neutral-600">
                                        <td className="px-4 py-3 text-sm text-gray-800 dark:text-neutral-200">{lesson?.lessonName}</td>
                                        <td className="px-4 py-3 text-sm text-gray-800 dark:text-neutral-200">{lesson?.lessonNumber}</td>
                                        <td className="px-4 py-3 text-sm text-gray-800 dark:text-neutral-200">{lesson?.vocabularyCount}</td>
                                        <td className="px-4 py-3 text-sm flex gap-2">
                                            <button
                                                className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-all"
                                                onClick={openEditModal}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-all"
                                                onClick={openDeleteModal}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                        {isOpenEditModal && <Edit_lesson_modal isOpen={isOpenEditModal} close={closeEditModal} _id={lesson?._id} refetch={refetch} />}
                                        {isOpenDeleteModal && <Delete_lesson_modal isOpen={isOpenDeleteModal} close={closeDeleteModal} _id={lesson?._id} refetch={refetch} />}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }

            </div>
        </div>
    );
}
