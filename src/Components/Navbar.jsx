import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import avatar from '../assets/icons8-avatar-96.png';
import logo from '../assets/logoo.png';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);  // State to control dropdown visibility
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut();
        navigate('/');
    };

    const link = (
        <>
            <li>
                <NavLink to="/" className="hover:underline" onClick={() => setMenuOpen(false)}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/allArtifacts" className="hover:underline" onClick={() => setMenuOpen(false)}>All Artifacts</NavLink>
            </li>
            <li>
                <NavLink to="/addArtifacts" className="hover:underline" onClick={() => setMenuOpen(false)}>Add Artifacts</NavLink>
            </li>
        </>
    );

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-gray-800 text-white shadow-md">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-2 w-full flex-wrap">
                    {/* Navbar Start */}
                    <div className="flex items-center gap-2">
                        <Link to="/" className="flex items-center gap-1 btn btn-ghost text-lg md:text-xl">
                            <img src={logo} alt="Logo" className="w-10 h-10" />
                            <span>Artifacts Tracker</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-white focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {menuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Navbar Center - Desktop */}
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal space-x-4">{link}</ul>
                    </div>

                    {/* Navbar End */}
                    <div className="hidden lg:flex items-center relative">
                        {user ? (
                            <div className="flex items-center gap-4 relative"> {/* Added relative positioning */}
                                {/* Profile Dropdown */}
                                <div className="relative">
                                    <button
                                        onClick={() => setMenuOpen(!menuOpen)}  // Toggle dropdown on click
                                        className="btn btn-ghost btn-circle avatar"
                                    >
                                        <div className="w-10 rounded-full">
                                            <img src={user.photoURL || avatar} alt="Profile" />
                                        </div>
                                    </button>

                                    {/* Dropdown Menu */}
                                    {menuOpen && (
                                        <ul className="absolute right-0 mt-3 p-2 shadow-lg bg-gray-800 rounded-lg w-52 z-10 max-h-64 overflow-auto">
                                            <li>
                                                <Link to="/myArtifacts" className="block text-white hover:bg-gray-700 p-2 rounded-md">
                                                    My Artifacts
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/likedArtifacts" className="block text-white hover:bg-gray-700 p-2 rounded-md">
                                                    Liked Artifacts
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </div>

                                {/* Logout Button next to Profile */}
                                <button
                                    onClick={handleLogout}
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex gap-2">
                                <Link
                                    className="btn bg-blue-100 text-blue-600 font-medium px-4 py-1 text-sm rounded-md shadow-sm hover:bg-blue-200 transition duration-200"
                                    to="/auth/login"
                                >
                                    Log In
                                </Link>
                                <Link
                                    className="btn bg-green-100 text-green-600 font-medium px-4 py-1 text-sm rounded-md shadow-sm hover:bg-green-200 transition duration-200"
                                    to="/auth/register"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {menuOpen && (
                    <div className="lg:hidden bg-gray-800 text-white w-full">
                        <ul className="flex flex-col items-start space-y-2 p-4 border-t border-gray-700">
                            {link}
                            {user ? (
                                <>
                                    <div className="flex items-center gap-4 mt-4">
                                        <img
                                            src={user.photoURL || avatar}
                                            alt="Profile"
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <span>{user.displayName || 'Avatar'}</span>
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="mt-2 bg-red-500 px-4 py-2 rounded text-sm hover:bg-red-600 transition"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <div className="flex flex-col gap-2 mt-4">
                                    <Link
                                        to="/auth/login"
                                        onClick={() => setMenuOpen(false)}
                                        className="btn bg-blue-100 text-blue-600 font-medium text-sm rounded-md hover:bg-blue-200"
                                    >
                                        Log In
                                    </Link>
                                    <Link
                                        to="/auth/register"
                                        onClick={() => setMenuOpen(false)}
                                        className="btn bg-green-100 text-green-600 font-medium text-sm rounded-md hover:bg-green-200"
                                    >
                                        Register
                                    </Link>
                                </div>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
