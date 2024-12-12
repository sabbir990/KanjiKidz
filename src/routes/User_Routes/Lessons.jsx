import React from 'react'
import Head_section from '../../components/Head_section'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import LessonCard from '../../Cards/Lesson_card'

export default function Lessons() {
    const {data : all_lessons, isLoading} = useQuery({
        queryKey : ['all_lessons'],
        queryFn : async() => {
            const {data} = await axios.get('http://localhost:8000/all_lessons');
            return data
        }
    })

    console.log(all_lessons)
    return (
        <div className='font-poppins'>
            <Head_section heading={'Explore Your Learning Journey'} subheading={"Browse through all the lessons and continue building your knowledge, one step at a time."} />
            <hr />
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4'>
                {
                    all_lessons?.map((lesson, index) => {
                        return <LessonCard key={index} lesson={lesson} />
                    })
                }
            </div>
        </div>
    )
}