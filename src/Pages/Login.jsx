import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const Login = () => {
    const { SigninUser, googleSignupUser, } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log({ email, password });

        SigninUser(email, password)
            .then(result => {
                // console.log('user login in', result.user)
                const user = result.user;
                navigate(location?.state ? location.state : '/')
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Signin Successful ",
                    showConfirmButton: false,
                    timer: 1500
                });
                // setUser(result.user)
                // console.log('this is user', setUser)
                // const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                // const loginInfo = { email, lastSignInTime };

                // fetch(`https://visa-navigator-server-nu.vercel.app/users`, {
                //     method: 'PATCH',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(loginInfo)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log('sign in info updated in db', data)
                //         navigate(location?.state ? location.state : '/')
                //     })

            })

            .catch(error => {
                console.log('ERROR', error.code)
                toast.error(error.message)
            })

    }

    const handleSignIn = () => {
        googleSignupUser()
            .then(result => {
                // console.log('User', result.user)
                const user = result.user;
                navigate(location?.state ? location.state : '/')
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Signin Successful ",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log("ERROR", error.message)
                toast.error(error.message)
            })
    }

    return (
        <div className="flex items-center justify-center min-h-screen my-6 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
            <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome Back!</h2>
                <p className="text-center text-gray-500 mb-6">Please login to your account</p>
                <form onSubmit={handleLogin}>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="example@example.com"
                            className="w-full px-4 py-3 rounded-lg shadow-sm border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 rounded-lg shadow-sm border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    <div className="mb-5 ">
                        <a
                            href="#"
                            className="text-blue-500 hover:underline text-sm font-medium"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    <div className="mb-6">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 shadow-md transition"
                        >
                            Login
                        </button>
                    </div>
                </form>

                <div className="relative text-center mb-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative bg-white px-4 text-gray-500 text-sm font-medium">
                        Or Login With
                    </div>
                </div>

                <div className="flex items-center justify-center mb-6">
                    <button onClick={handleSignIn}
                        className="flex items-center justify-center gap-3 w-full bg-white border border-gray-300 text-gray-800 font-semibold py-3 rounded-lg hover:bg-gray-100 shadow-md transition"
                    >
                        <FaGoogle className="w-5 h-5 text-blue-600" />
                        <span className="text-center">Sign in with Google</span>
                    </button>
                </div>

                <p className="text-center font-semibold">
                    Don't Have An Account? Please {' '}
                    <Link className="text-red-500" to="/auth/register">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;