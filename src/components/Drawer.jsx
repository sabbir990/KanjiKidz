import React from 'react'
import Logo from './Logo'
import useAuth from '../Hooks/useAuth'
import useRole from '../Hooks/useRole'
import { Link, useNavigate } from 'react-router-dom';

export default function Drawer() {
    const { role } = useRole();
    const { user, logOut, setUser } = useAuth();
    const navigate = useNavigate();
    return (
        <div>
            <header className="flex font-poppins flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
                <nav className="relative max-w-[85rem] w-full mx-auto flex items-center justify-between gap-3 py-2 px-4 sm:px-6 lg:px-8">

                    <Logo />

                    <div className="md:order-3 flex justify-end items-center gap-x-1">
                        <button type="button" className="md:hidden relative p-2 flex items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" id="hs-header-base-collapse" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-header-base" aria-label="Toggle navigation" data-hs-overlay="#hs-header-base"  >
                            Menu
                            <svg className="shrink-0 size-4 ms-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>
                        </button>

                        <div className="hidden md:inline-block md:me-2">
                            <div className="w-px h-4 bg-gray-300 dark:bg-neutral-700"></div>
                        </div>

                        <button type="button" className="relative size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-transparent dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-header-base-offcanvas" aria-label="Toggle navigation" data-hs-overlay="#hs-header-base-offcanvas">
                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M15 3v18" /><path d="m8 9 3 3-3 3" /></svg>
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>

                    <div id="hs-header-base" className="hs-overlay [--auto-close:md] hs-overlay-open:translate-x-0 -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-white border-e basis-full grow md:order-2 md:static md:block md:h-auto md:max-w-none md:w-auto md:border-e-transparent md:transition-none md:translate-x-0 md:z-40 md:basis-auto dark:bg-neutral-800 dark:border-e-gray-700 md:dark:border-e-transparent hidden " role="dialog" tabIndex="-1" aria-label="Sidebar" data-hs-overlay-close-on-resize  >
                        <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                            <div className="py-2 md:py-0 px-2 md:px-0 flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
                                <div className="md:hidden p-2 flex justify-between items-center">
                                    <h3 id="hs-header-base-label" className="font-bold text-gray-800 dark:text-white">
                                        Menu title
                                    </h3>
                                    <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" aria-label="Close" data-hs-overlay="#hs-header-base">
                                        <span className="sr-only">Close</span>
                                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                    </button>
                                </div>
                                <div className="grow">
                                    <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">

                                        <Link to={'/dashboard/manage_users'} className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                                            <svg className="shrink-0 size-4 me-3 md:me-2 block md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="9" cy="7" r="4"></circle>
                                                <path d="M17 11h4v4h-4z"></path>
                                                <path d="M9 14c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z"></path>
                                                <path d="M23 21v-2"></path>
                                                <path d="M21 19h4"></path>
                                            </svg>
                                            Manage Users
                                        </Link>
                                        <Link to={'/dashboard/lesson_management'} className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                                            <svg className="shrink-0 size-4 me-3 md:me-2 block md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
                                                <path d="M16 10H8" />
                                                <path d="M16 14H8" />
                                                <path d="M11 6H8" />
                                            </svg>
                                            Lesson Management
                                        </Link>
                                        <Link to={"/dashboard/vocabulary_management"} className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                                            <svg className="shrink-0 size-4 me-3 md:me-2 block md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
                                                <path d="M12 7v6l4 2" />
                                                <path d="M9 16h6" />
                                            </svg>
                                            Vocabulary Management
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <div
                id="hs-header-base-offcanvas"
                className="hs-overlay font-poppins hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-e dark:bg-neutral-800 dark:border-neutral-700"
                role="dialog"
                tabIndex="-1"
                aria-labelledby="hs-header-base-offcanvas-label"
            >
                <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                    <h3
                        id="hs-header-base-offcanvas-label"
                        className="font-bold text-gray-800 dark:text-white"
                    >
                        Profile Details
                    </h3>
                    <button
                        type="button"
                        className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                        aria-label="Close"
                        data-hs-overlay="#hs-header-base-offcanvas"
                    >
                        <span className="sr-only">Close</span>
                        <svg
                            className="shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>
                </div>
                <div className="p-4">
                    <div className="flex flex-col items-center">
                        <img
                            src={user?.photoURL}
                            alt={user?.displayName}
                            className="w-24 h-24 rounded-full border border-gray-200 dark:border-neutral-700 mb-4"
                        />
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                            {user?.displayName}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-neutral-400">{user?.email}</p>
                        <p className="text-sm text-gray-600 dark:text-neutral-400">
                            Role: {role}
                        </p>
                    </div>
                    <div className="mt-4">
                        <h5 className="text-gray-800 dark:text-white font-bold mb-2">
                            Account Details
                        </h5>
                        <ul className="space-y-2 text-gray-600 dark:text-neutral-400">
                            <li>
                                <strong>UID:</strong> {user?.uid}
                            </li>
                            <li>
                                <strong>Email Verified:</strong>{" "}
                                {user?.emailVerified ? "Yes" : "No"}
                            </li>
                            <li>
                                <strong>Account Created:</strong>{" "}
                                {new Date(user?.metadata.creationTime).toLocaleString()}
                            </li>
                            <li>
                                <strong>Last Login:</strong>{" "}
                                {new Date(user?.metadata.lastSignInTime).toLocaleString()}
                            </li>
                            <li><button onClick={async () => {
                                await logOut();
                                setUser(null);
                                navigate('/login');
                            }} className='btn btn-error text-white'>Log Out</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
