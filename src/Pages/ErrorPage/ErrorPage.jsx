  
import React from 'react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 flex items-center justify-center px-6">
            <div className="text-center max-w-lg">

                {/* Error Code */}
                <h1 className="text-9xl font-extrabold text-indigo-600 tracking-tight">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-gray-500 mt-4 leading-relaxed">
                    Sorry, the page you are looking for doesn't exist or
                    may have been moved to another location.
                </p>

                {/* Button */}
                <button
                    onClick={() => window.history.back()}
                    className="mt-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 hover:shadow-xl transition duration-300"
                >
                    ← Go Back
                </button>

                {/* Small text */}
                <p className="text-sm text-gray-400 mt-6">
                    Error Code: 404
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;
 

 
