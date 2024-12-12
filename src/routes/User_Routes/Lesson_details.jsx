import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Vocabulary_card from '../../Cards/Vocabulary_card';
import { TbFidgetSpinner } from 'react-icons/tb';
import { GrNext, GrPrevious } from "react-icons/gr";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import toast from 'react-hot-toast';

export default function Lesson_details() {
    const { id } = useParams();
    const [vocabularyIndex, setVocabularyIndex] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);
    const navigate = useNavigate();
    const { width, height } = useWindowSize()

    const { data: lesson_details, isPending } = useQuery({
        queryKey: ['lesson_details', id],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8000/lesson_details/${id}`);
            return data;
        },
    });

    const decreaseIndex = () => {
        if (vocabularyIndex > 0) {
            setVocabularyIndex(vocabularyIndex - 1)
        }
    }

    const increaseIndex = () => {
        if (vocabularyIndex + 1 < lesson_details?.vocabularies?.length) {
            setVocabularyIndex(vocabularyIndex + 1);
        }

        if (vocabularyIndex + 1 >= lesson_details?.vocabularies?.length) {
            setIsCompleted(true);
            setTimeout(() => {
                navigate('/lessons')
                toast.success("Congratulations! Go ahead for the next!👊")
            }, 5000)
        }
    }

    if (isPending) {
        return <div className="flex justify-center items-center h-screen"><TbFidgetSpinner size={34} className='animate-spin' /></div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
            {/* Top Section */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900">{lesson_details?.lesson?.lessonName}</h1>
                <p className="text-gray-600 mt-2">Lesson Number: <span className="font-semibold">{lesson_details?.lesson?.lessonNumber}</span></p>
                <p className="text-gray-600">Vocabulary Count: <span className="font-semibold">{lesson_details?.lesson?.vocabularyCount}</span></p>
            </div>

            <hr className="my-6 border-gray-300" />

            {isCompleted && <Confetti
                width={width}
                height={height}
            />}

            {/* Additional Content Section */}
            <div>
                <h2 className="text-2xl font-bold text-gray-800 text-center">Lesson Overview</h2>
                <hr className='mt-2' />
                <div className='flex items-center justify-center space-x-4 mt-4'>
                    <button className='btn btn-ghost' onClick={decreaseIndex}><GrPrevious /></button>
                    <div className=''>
                        {
                            lesson_details?.vocabularies?.filter((vocabulary, index) => vocabularyIndex === index)?.map((vocabulary, index) => {
                                return <Vocabulary_card key={index} vocabulary={vocabulary} />
                            })
                        }
                    </div>
                    <button className={`btn btn-ghost ${vocabularyIndex + 1 === lesson_details?.vocabularies?.length && "btn btn-success text-white"}`} onClick={increaseIndex}>{vocabularyIndex + 1 === lesson_details?.vocabularies?.length ? "Finish Lesson" : <GrNext />}</button>
                </div>
            </div>
        </div>
    );
}
