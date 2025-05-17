import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const RootLayout = () => {
    return (
        <>
            <Navbar></Navbar>

            <main className='min-h-[calc(100vh-311px)]'>
                <Outlet>
                    
                </Outlet>
            </main>

            <footer className='w-full md:w-10/12 mx-auto'>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default RootLayout;