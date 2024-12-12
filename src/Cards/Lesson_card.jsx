import React from 'react';
import { Link } from 'react-router-dom';

export default function LessonCard({ lesson }) {
    return (
        <Link to={`/lesson/${lesson?._id}`}
            className="w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
        >
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-2">{lesson?.lessonName}</h2>
                <p className="text-sm text-gray-600 mb-1">Lesson Number: <span className="font-semibold">{lesson?.lessonNumber}</span></p>
                <p className="text-sm text-gray-600">Vocabulary Count: <span className="font-semibold">{lesson?.vocabularyCount}</span></p>
            </div>
        </Link>
    );
}
