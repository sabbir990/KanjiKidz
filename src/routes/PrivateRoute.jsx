import React from 'react'
import useAuth from '../Hooks/useAuth'
import { TbFidgetSpinner } from "react-icons/tb";
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({children}) {
    const {user, isLoading} = useAuth();

    if(isLoading){
        return <div className='flex items-center justify-center mt-4'>
            <TbFidgetSpinner size={34} className='animate-spin' />
        </div>
    }

    if(user && user?.email){
        return children;
    }

    if(!user || !user?.email){
        return <Navigate to={'/login'} />
    }
}
