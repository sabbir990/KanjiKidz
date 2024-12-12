import React, { useState } from 'react';
import Head_section from '../../components/Head_section';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { TbFidgetSpinner } from 'react-icons/tb';
import Edit_vocabulary_modal from '../../Modals/Edit_vocabulary_modal';

export default function Vocabulary_management() {
    const [lessonFilter, setLessonFilter] = useState('');
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedVocabularyID, setSelectedVocabularyID] = useState(null);
    const { data: all_vocabularies, isLoading, refetch } = useQuery({
        queryKey: ['all_vocabularies'],
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:8000/all_vocabularies');
            return data;
        },
    });

    const handleFilterChange = (event) => {
        setLessonFilter(event.target.value);
    };

    const filteredVocabularies = lessonFilter
        ? all_vocabularies.filter((vocab) => vocab.lessonNo === lessonFilter)
        : all_vocabularies;

    const openEditModal = (id) => {
        setSelectedVocabularyID(id)
        setIsEditModalOpen(true)
    }

    const closeEditModal = () => {
        setIsEditModalOpen(false)
    }

    return (
        <div className="font-poppins">
            <Head_section
                heading="Vocabulary Management"
                subheading="Efficiently Organize and Enhance Your Vocabulary Library for Optimal Learning Outcomes"
            />
            <Link to="/dashboard/add_vocabulary" className="btn btn-block btn-info text-white">
                + Add Vocabulary
            </Link>

            {isLoading ? <div className="mt-4 flex justify-center">
                <TbFidgetSpinner size={34} className="animate-spin" />
            </div> : <>
                {/* Filter dropdown */}
                <div className="mt-4">
                    <select
                        className="px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                        value={lessonFilter}
                        onChange={handleFilterChange}
                    >
                        <option value="">All Lessons</option>
                        {[...new Set(all_vocabularies?.map((vocab) => vocab?.lessonNo))].map((lessonNo) => (
                            <option key={lessonNo} value={lessonNo}>
                                Lesson {lessonNo}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Vocabulary table */}
                <div className="overflow-x-auto mt-4">
                    <table className="table-auto w-full border-collapse border border-gray-200 text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border px-4 py-2">Word</th>
                                <th className="border px-4 py-2">Pronunciation</th>
                                <th className="border px-4 py-2">When to Say</th>
                                <th className="border px-4 py-2">Lesson No</th>
                                <th className="border px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredVocabularies?.map((vocab) => (
                                <tr key={vocab?._id}>
                                    <td className="border px-4 py-2">{vocab?.word}</td>
                                    <td className="border px-4 py-2">{vocab?.pronunciation}</td>
                                    <td className="border px-4 py-2">{vocab?.whenToSay}</td>
                                    <td className="border px-4 py-2 text-center">{vocab?.lessonNo}</td>
                                    <td className="border px-4 py-2 text-center">
                                        <button
                                            onClick={() => openEditModal(vocab?._id)}
                                            className="px-2 py-1 mr-2 text-blue-500 hover:text-blue-700"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleDelete(vocab?._id)}
                                            className="px-2 py-1 text-red-500 hover:text-red-700"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}

                            {isEditModalOpen && <Edit_vocabulary_modal isOpen={isEditModalOpen} close={closeEditModal} refetch={refetch} _id={selectedVocabularyID} />}
                        </tbody>
                    </table>
                </div>
            </>}
        </div>
    );
}
