import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const Navbar = () => {
    const { user, logOut, } = useContext(AuthContext)


    const link = <>
        <li className='hover:underline'><NavLink to={'/'} >Home</NavLink></li>
        <li className='hover:underline'><NavLink to={'/allVisas'}>All visas</NavLink></li>
        <li className='hover:underline'><NavLink to={'/addVisa'}>Add Visa</NavLink></li>
        <li className='hover:underline'><NavLink to={'/myAddedVisas'}>My added visas</NavLink></li>
        <li className='hover:underline'><NavLink to={'/myVisaApplications'}>My Visa applications</NavLink></li>
    </>

    // const link2 = <>
    //     <Link className="btn  bg-white text-blue-600  rounded-lg mr-5 hover:bg-gray-200" to='/auth/login'>LogIn</Link>
    //     <Link className="btn  bg-white text-blue-600  rounded-lg hover:bg-gray-200" to='/auth/register'>Register</Link>
    // </>
    return (
        <div className="navbar bg-blue-600 text-white">

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
                <Link to={'/'} className="btn btn-ghost text:lg md:text-xl" >Visa Navigator</Link>
            </div>
            <div className="navbar-center hidden lg:flex" >
                <ul className="menu menu-horizontal px-1">

                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="flex items-center gap-4 ml-6">
                        <div className="relative group">
                            <img
                                src={user.photoURL}
                                alt={user.displayName}
                                className="w-10 h-10 rounded-full cursor-pointer"
                            />
                            <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full mt-2 px-4 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                {user.displayName}
                            </span>
                        </div>
                        <button
                            onClick={logOut}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                            Logout
                        </button>
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