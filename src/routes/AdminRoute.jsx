import React from 'react'
import useAuth from '../Hooks/useAuth'
import useRole from '../Hooks/useRole';
import { TbFidgetSpinner } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

export default function AdminRoute({ children }) {
    const { user, logOut } = useAuth();
    const { role, isLoading } = useRole();
    const navigate = useNavigate();

    if (isLoading) {
        return <div className='flex items-center justify-center mt-4'>
            <TbFidgetSpinner size={34} className='animate-spin' />
        </div>
    }

    if(!user || !user?.email || role !== 'admin'){
        alert("You don't have permissions to enter admin's routes!")
        logOut();
        navigate('/login')
    }
    
    if(user && user?.email && role === 'admin') return children
}
