import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'

export default function Navbar() {
    const {user} = useAuth();
    console.log(user)
    return (
        <nav className="navbar rounded-box justify-between gap-4 shadow">
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
                            <a className="dropdown-item" href="#">
                                Link 1
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Link 2
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Link 3
                            </a>
                        </li>
                        <hr className="border-base-content/25 -mx-2 my-3" />
                        <li>
                            <a className="dropdown-item" href="#">
                                Link 4
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center flex items-center">
                <a
                    className="link text-base-content/90 link-neutral text-xl font-semibold no-underline"
                    href="#"
                >
                    FlyonUI
                </a>
            </div>
            <div className="navbar-end items-center gap-4">
                <Link className="btn btn-ghost shadow-none" to='/login'>Login</Link>
                <div className="dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end]">
                    <button
                        id="dropdown-scrollable"
                        type="button"
                        className="dropdown-toggle flex items-center"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        aria-label="Dropdown"
                    >
                        <div className="avatar">
                            <div className="size-9.5 rounded-full">
                                <img
                                    src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png"
                                    alt="avatar 1"
                                />
                            </div>
                        </div>
                    </button>
                    <ul
                        className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="dropdown-avatar"
                    >
                        <li className="dropdown-header gap-2">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png"
                                        alt="avatar"
                                    />
                                </div>
                            </div>
                            <div>
                                <h6 className="text-base-content/90 text-base font-semibold">
                                    John Doe
                                </h6>
                                <small className="text-base-content/50">Admin</small>
                            </div>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                <span className="icon-[tabler--user]"></span>
                                My Profile
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                <span className="icon-[tabler--settings]"></span>
                                Settings
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                <span className="icon-[tabler--receipt-rupee]"></span>
                                Billing
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                <span className="icon-[tabler--help-triangle]"></span>
                                FAQs
                            </a>
                        </li>
                        <li className="dropdown-footer gap-2">
                            <a className="btn btn-error btn-soft btn-block" href="#">
                                <span className="icon-[tabler--logout]"></span>
                                Sign out
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
