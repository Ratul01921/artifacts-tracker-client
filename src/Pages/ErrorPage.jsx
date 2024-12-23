import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (

        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-lg w-full">
                <h1 className="text-6xl font-bold text-red-500">404</h1>
                <h2 className="text-3xl text-gray-800 mt-4">Page Not Found</h2>
                <p className="text-gray-600 mt-4">Sorry, the page you are looking for does not exist or has been moved.</p>
                <Link to="/" className="mt-6 inline-block text-blue-500 hover:text-blue-700 font-semibold">
                    Go Back to Home
                </Link>
            </div>
        </div>


    );
};

export default ErrorPage;