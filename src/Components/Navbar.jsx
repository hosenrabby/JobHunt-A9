import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import Button from '../Shared/Button';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {
    const { user,signout } = use(AuthContext)
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = <>
        <li className='text-lg p-2 hover:text-[#3C65F5]'><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-lg p-2 text-[#3C65F5] border-b-2' : ''}>Home</NavLink></li>
        <li className='text-lg p-2 hover:text-[#3C65F5]'><NavLink to={'/about'} className={({ isActive }) => isActive ? 'text-lg p-2 text-[#3C65F5] border-b-2' : ''}>AboutUs</NavLink></li>
        <li className='text-lg p-2 hover:text-[#3C65F5]'><NavLink to={'/contactus'} className={({ isActive }) => isActive ? 'text-lg p-2 text-[#3C65F5] border-b-2' : ''}>Contact Us</NavLink></li>
    </>
    
    
    const handleSignOut = ()=>{
        signout()
    }
    return (
        <>
            <div className={`sticky top-0 z-1000 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-[#f2f6fd00]'}`}>
                <div className="navbar w-full md:w-10/12 mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <Link to={'/'}>
                            <img className='w-1/2' src="/assets/logosm.png" alt="" />
                        </Link>
                    </div>

                    <div className="navbar-end space-x-4">
                        <div className="navbar-start hidden lg:flex">
                            <ul className="menu-horizontal space-x-4">
                                {links}
                            </ul>
                        </div>
                        {
                            user ? <Button onClick={handleSignOut} label={'Log Out'}></Button>
                                : <div>
                                    <Link to={'/auth/register'}><button className='text-md underline text-[#3C65F5] cursor-pointer me-2'>Register</button></Link>
                                    <Link to={'/auth/signin'}><Button label={'Sign In'}></Button></Link>
                                </div>
                        }

                        {/* <p>{user&& user.name}</p> */}
                        {
                            user 
                            ?<Link to={'/profile'}>
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ms-2">
                                    <div className="w-10 rounded-full">
                                        <img alt="User Image" src={user? user.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" } />
                                    </div>
                                </div>
                            </Link>
                            : ""
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;