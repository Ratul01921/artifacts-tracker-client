import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import avatar from '../assets/icons8-avatar-96.png';
import logo from '../assets/logoo.png'; // Add your logo image here.

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isHovering, setIsHovering] = useState(false);
    const navigate = useNavigate();

    const link = (
        <>
            <li className="hover:underline"><NavLink to={'/'}>Home</NavLink></li>
            <li className="hover:underline"><NavLink to={'/allArtifacts'}>All Artifacts</NavLink></li>
            <li className="hover:underline"><NavLink to={'/addArtifacts'}>Add Artifacts</NavLink></li>
        </>
    );

    const handleLogout = () => {
        logOut();
        navigate('/');
    };

    return (
        <div className="navbar fixed top-0 left-0 w-full bg-gray-800 z-50 text-white shadow-md">
    <div className="w-11/12 mx-auto flex items-center justify-between">
        {/* Navbar Start */}
        <div className="navbar-start flex items-center">
            <Link to={'/'} className="flex items-center gap-2 btn btn-ghost text-lg md:text-xl">
                <img src={logo} alt="Logo" className="w-10 h-10" />
                <span>Artifacts Tracker</span>
            </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal space-x-4">{link}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center">
            {user ? (
                <div className="flex items-center gap-4">
                    {/* Profile Avatar */}
                    <div
                        className="dropdown dropdown-end relative"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL || avatar} alt="Profile" />
                            </div>
                        </label>
                        {isHovering && (
                            <div className="absolute px-4 py-1 mt-2 bg-gray-800 text-white rounded-lg shadow-lg text-sm">
                                {user.displayName || 'Avatar'}
                            </div>
                        )}
                    </div>

                    {/* Logout Button */}
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600 transition"
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
</div>


    );
};

export default Navbar;
