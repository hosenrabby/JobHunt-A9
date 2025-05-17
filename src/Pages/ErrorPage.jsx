import React from 'react';
import { Link, useNavigate } from 'react-router';
import { FaExclamationTriangle } from 'react-icons/fa';
import Button from '../Shared/Button';
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <Helmet>
                <title>JobHunt | Error Page</title>
            </Helmet>
            <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 px-4">
                <div className="text-center max-w-md">
                    <FaExclamationTriangle className="text-[#3C65F5] text-6xl mb-4 mx-auto" />
                    <h1 className="text-5xl font-bold mb-2">404</h1>
                    <p className="text-xl font-semibold mb-4 text-base-content">Oops! Page not found</p>
                    <p className="text-base-content mb-6">
                        The page you're looking for doesn't exist or has been moved.
                    </p>

                    <Button onClick={() => navigate(-1)} label={'Go Back'}></Button>

                </div>
            </div>
        </>
    );
};

export default ErrorPage;