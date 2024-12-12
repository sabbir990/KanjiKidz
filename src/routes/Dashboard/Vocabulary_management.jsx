import React from 'react'
import Head_section from '../../components/Head_section'
import { Link } from 'react-router-dom'

export default function Vocabulary_management() {
  return (
    <div className='font-poppins'>
        <Head_section heading={'Vocabulary Management'} subheading={'Efficiently Organize and Enhance Your Vocabulary Library for Optimal Learning Outcomes'} />
        <Link to="/dashboard/add_vocabulary" className='btn btn-block btn-info text-white'> + Add Vocabulary</Link>

    </div>
  )
}
