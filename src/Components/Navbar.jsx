import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { useState } from 'react';
import avatar from '../assets/icons8-avatar-96.png'


const Navbar = () => {
    const { user, logOut, } = useContext(AuthContext)
    const [isHovering, setIsHovering] = useState(false);
    const navigate = useNavigate();


    const link = <>
        <li className='hover:underline'><NavLink to={'/'} >Home</NavLink></li>
        <li className='hover:underline'><NavLink to={'/allArtifacts'}>All Artifacts</NavLink></li>
        <li className='hover:underline'><NavLink to={'/addArtifacts'}>Add Artifacts</NavLink></li>
    </>
    const handleLogout = () => {
        logOut();
        navigate('/');
    };
    // const link2 = <>
    //     <Link className="btn  bg-white text-blue-600  rounded-lg mr-5 hover:bg-gray-200" to='/auth/login'>LogIn</Link>
    //     <Link className="btn  bg-white text-blue-600  rounded-lg hover:bg-gray-200" to='/auth/register'>Register</Link>
    // </>
    return (
        <div className="navbar w-11/12 mx-auto  text-white">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text:lg md:text-xl" >Artifacts Tracker</Link>
            </div>
            <div className="navbar-center hidden lg:flex" >
                <ul className="menu menu-horizontal px-1">

                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="flex items-center">
                        <div
                            className="dropdown dropdown-end mr-4"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL || avatar} alt="Profile" />
                                </div>
                            </label>
                            {isHovering && (
                                <div className="absolute  px-4  bg-gray-800 text-white rounded-lg shadow-lg">
                                    {user.displayName || 'Avatar'}
                                </div>
                            )}
                        </div>

                        {/* Dropdown menu */}
                        <div className="dropdown dropdown-end z-10">
                            <label tabIndex={0} className="btn btn-ghost">
                                My Profile
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content mt-2 p-2 shadow bg-base-100 rounded-box w-52 text-black"
                            >
                                <li>
                                    <NavLink to="/myArtifacts">My Artifacts</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/likedArtifacts">Liked Artifacts</NavLink>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex gap-4">
                        <Link className="btn  bg-white text-blue-600  rounded-lg  hover:bg-gray-200" to='/auth/login'>LogIn</Link>
                        <Link className="btn  bg-white text-blue-600  rounded-lg hover:bg-gray-200" to='/auth/register'>Register</Link>
                    </div>
                )}



            </div>
        </div>
    );
};

export default Navbar;