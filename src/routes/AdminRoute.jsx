import React, { useEffect } from 'react';
import useAuth from '../Hooks/useAuth';
import useRole from '../Hooks/useRole';
import { TbFidgetSpinner } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

export default function AdminRoute({ children }) {
    const { user, logOut } = useAuth();
    const { role, isPending } = useRole();
    const navigate = useNavigate();

    if (isPending) {
        return (
            <div className='flex items-center justify-center mt-4 h-screen'>
                <TbFidgetSpinner size={34} className='animate-spin' />
            </div>
        );
    }

    if (role !== 'admin') {
        logOut();
        navigate('/login')
    }

    else{
        return children;
    }
}
