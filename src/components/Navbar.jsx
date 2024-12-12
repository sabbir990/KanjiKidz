import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'
import { MdOutlinePlayLesson } from "react-icons/md";
import { MdPersonalVideo } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import Logo from './Logo';
import useRole from '../Hooks/useRole';

export default function Navbar() {
    const { user, logOut, setUser, setIsLoading } = useAuth();
    const { role } = useRole();
    console.log(user)

    const handleLogOut = async () => {
        await logOut();
        setUser(null);
        setIsLoading(false)
    }
    return (
        <nav className="navbar rounded-box justify-between gap-4 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown relative inline-flex [--auto-close:inside] [--offset:9]">
                    <button
                        id="dropdown-name"
                        type="button"
                        className="dropdown-toggle btn btn-text btn-circle dropdown-open:bg-base-content/10 dropdown-open:text-base-content"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        aria-label="Dropdown"
                    >
                        <span className="icon-[tabler--menu-2] size-5"></span>
                    </button>
                    <ul
                        className="dropdown-menu dropdown-open:opacity-100 hidden"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="dropdown-name"
                    >
                        <li>
                            <Link to='/lessons' className="dropdown-item" href="#">
                                <MdOutlinePlayLesson size={24} /> Lessons
                            </Link>
                        </li>
                        <li>
                            <Link to={'/tutorials'} className="dropdown-item" href="#">
                                <MdPersonalVideo size={24} /> Tutorials
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center flex items-center">
                <Logo />
            </div>
            <div className="navbar-end items-center gap-4">
                {user?.email ? (
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt={user?.displayName}
                                src={user?.photoURL} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <Link to={'/user_profile'} className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><button onClick={handleLogOut}>Logout</button></li>
                    </ul>
                </div>
                ) : <Link className="btn btn-ghost shadow-none" to='/login'><BiLogIn size={22} />Login</Link>}
            </div>
        </nav>
    )
}
