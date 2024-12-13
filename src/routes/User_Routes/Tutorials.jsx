import React from 'react'
import Head_section from '../../components/Head_section'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Tutorial_card from '../../Cards/Tutorial_card'
import { TbFidgetSpinner } from 'react-icons/tb'

export default function Tutorials() {
    const {data : all_tutorials, isLoading} = useQuery({
        queryKey : ['all_tutorials'],
        queryFn : async() => {
            const {data} = await axios.get(`https://kanjikids-server.vercel.app/all_tutorials`);
            return data
        }
    })

    return (
        <div className='font-poppins'>
            <Head_section heading={'Master Japanese with Our Comprehensive Tutorials'} subheading={'Explore a variety of lessons, from basic vocabulary to advanced grammar, and take your Japanese skills to the next level.'} />
            <hr />
            {
                isLoading && <div className="flex justify-center items-center mt-4">
                    <TbFidgetSpinner size={34} className='animate-spin' />
                </div>
            }
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
                {
                    all_tutorials?.map((tutorial, index) => {
                        return <Tutorial_card tutorial={tutorial} key={index} />
                    })
                }
            </div>
        </div>
    )
}
