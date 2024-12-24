import React, { useContext, useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const { SignupUser, googleSignupUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState({});

    const validatePassword = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const isValidLength = password.length >= 6;

        if (!hasUpperCase)
            return "Password must include at least one uppercase letter.";
        if (!hasLowerCase)
            return "Password must include at least one lowercase letter.";
        if (!hasSpecialCharacter)
            return "Password must include at least one special character.";
        if (!isValidLength) return "Password must be at least 6 characters long.";
        return null;
    };

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const photo = e.target.photoURL.value;
        const password = e.target.password.value;

        const validationError = validatePassword(password);
        if (validationError) {
            setError({ password: validationError });
            return;
        }


        SignupUser(email, password)
            .then(result => {
                const user = result.user
                navigate("/");
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registration Successful! ",
                    showConfirmButton: false,
                    timer: 1500
                });
                const createdAt = result?.user?.metadata?.creationTime;
                const newUser = { name, email, photo, createdAt }
                // fetch('https://visa-navigator-server-nu.vercel.app/users', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'

                //     },
                //     body: JSON.stringify(newUser)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         toast("Registration Successful! ");
                //         navigate("/");


                // Swal.fire({
                //     position: "top-end",
                //     icon: "success",
                //     title: "Registration Successful! ",
                //     showConfirmButton: false,
                //     timer: 1500
                // });
                //     console.log(data)
                // })
            })
            .catch(error => {
                const err = error.message;
                toast.error(err)
                console.log('ERROR', err)
            })
    }
    const handleGoogleSignUp = () => {
        googleSignupUser()
            .then(result => {
                const user = result.user;
                navigate("/");
            })
            .catch(error => {
                console.log("ERROR", error.message)
            })
    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 my-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-lg ">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Create Your Account
                </h2>
                <form onSubmit={handleRegister} className="space-y-6">

                    <div className="flex items-center border-b-2 border-gray-300 mb-4">
                        <FaUserCircle className="text-2xl text-gray-500 mr-2" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="outline-none w-full p-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 rounded-md"
                        />
                    </div>

                    <div className="flex items-center border-b-2 border-gray-300 mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="outline-none w-full p-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 rounded-md"
                        />
                    </div>

                    <div className="flex items-center border-b-2 border-gray-300 mb-4">
                        <input
                            type="text"
                            name="photoURL"
                            placeholder="Enter your photo URL"
                            className="outline-none w-full p-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 rounded-md"
                        />
                    </div>

                    <div className="flex items-center border-b-2 border-gray-300 ">
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="outline-none w-full p-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 rounded-md"
                        />
                    </div>
                    {error.password && (
                        <p className="text-red-500 text-sm ">{error.password}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition mt-4 duration-300"
                    >
                        Register
                    </button>
                </form>

                <p className="mt-4 text-center text-gray-600">
                    Already have an account?{" "}
                    <Link to={'/auth/login'} className="text-blue-600 hover:text-blue-700">
                        Login
                    </Link>
                </p>

                <div className="flex items-center my-6">
                    <div className="flex-1 border-t border-gray-300"></div>
                    <span className="mx-2 text-gray-500">or</span>
                    <div className="flex-1 border-t border-gray-300"></div>
                </div>

                <button onClick={handleGoogleSignUp}
                    className="w-full flex items-center justify-center bg-white border-2 border-gray-300 p-3 rounded-md hover:bg-gray-100 transition duration-300"
                >
                    <AiOutlineGoogle className="text-2xl text-blue-500 mr-2" />
                    Signin with Google
                </button>
            </div>
        </div>
    );
};

export default Register;