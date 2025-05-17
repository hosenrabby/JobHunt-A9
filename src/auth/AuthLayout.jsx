import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default AuthLayout;