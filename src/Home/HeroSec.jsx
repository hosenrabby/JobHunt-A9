import React from 'react';
import { FaIndustry, FaTh } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router';
import Button from '../Shared/Button';

const HeroSec = () => {
    return (
        <div className='min-h-[768px] bg-[#F2F6FD] mt-[-68px] banner-bg pb-10'>
            <div className='w-full md:w-10/12 mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-4 pt-24'>
                <div className=" md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
                        Get The <span className="text-blue-600 px-2">Right Job</span><br />You Deserve
                    </h1>

                    <p className="mt-4 text-gray-500 max-w-xl">
                        Each month, more than 3 million job seekers turn to website in their search for work,
                        making over 140,000 applications every single day
                    </p>

                    <div className="mt-8 bg-white rounded-xl shadow-lg p-4 flex flex-col md:flex-row items-stretch gap-4">
                        <div className="flex items-center  px-4 py-2 w-full md:w-1/4">
                            <FaIndustry className="text-gray-400" />
                            <select defaultValue="Pick a font" className="select select-ghost">
                                <option disabled={true}>Industry</option>
                                <option>Software</option>
                                <option>Finance</option>
                                <option>Engenieer</option>
                                <option>Management</option>
                                <option>Development</option>
                            </select>
                        </div>
                        <div className="flex items-center px-4 py-2 w-full md:w-1/4">
                            <MdLocationOn className="text-gray-400" />
                            <select defaultValue="Pick a font" className="select select-ghost">
                                <option disabled={true}>Location</option>
                                <option>USA</option>
                                <option>Canada</option>
                                <option>UK</option>
                                <option>London</option>
                                <option>Bangladesh</option>
                            </select>
                        </div>

                        <div className="flex items-center px-4 py-2 w-full md:flex-1">
                            <FaTh className="text-gray-400 mr-2" />
                            <input type="text" placeholder="Your keyword..." className="w-full outline-none text-sm text-gray-700" />
                        </div>
                        <Button label={'Search'}></Button>
                    </div>

                    <div className="mt-6 text-sm text-gray-600">
                        <span className="font-medium">Popular Searches:</span>{' '}
                        <Link to="/" className="underline text-gray-800">Designer</Link>,{' '}
                        <Link to="/" className="underline text-gray-800">Web</Link>,{' '}
                        <Link to="/" className="underline text-gray-800">IOS</Link>,{' '}
                        <Link to="/" className="underline text-gray-800">Developer</Link>,{' '}
                        <Link to="/" className="underline text-gray-800">PHP</Link>,{' '}
                        <Link to="/r" className="underline text-gray-800">Senior</Link>,{' '}
                        <Link to="/" className="underline text-gray-800">Engineer</Link>
                    </div>
                </div>
                <div>
                    <img src="/assets/banner.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroSec;