import React from 'react'
import { Link } from 'react-router-dom'
import useRole from '../Hooks/useRole'

export default function Logo() {
    const {role} = useRole();
    return (
        <div className="text-center mb-2">
            <Link to={role === 'admin' ? '/dashboard' : '/'} className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 drop-shadow-lg tracking-wide">
                Kanji<span className="text-indigo-500">Kidz</span>
            </Link>
        </div>
    )
}
