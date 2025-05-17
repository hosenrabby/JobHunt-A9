import React from 'react';
import { FaCheckCircle, FaEnvelope, FaTh } from 'react-icons/fa';
import Button from '../Shared/Button';
const Subscription = () => {
    return (
        <>
            <div className='w-full md:h-[450px] p-10 py-20 md:py-40 bg banner-subscription'>
                    <div>
                        <h1 className="text-4xl md:text-4xl font-bold mb-6 text-white text-center">New Things Will Always</h1>
                        <p className="mb-8 text-xl text-gray-200 text-center">Update Regularly</p>
                    </div>
                    <div className="mt-8 w-7/12 mx-auto bg-white rounded-xl shadow-lg p-4 flex flex-col md:flex-row items-stretch gap-">
                        <div className="flex items-center gap-4 px-4 py-2 w-full md:flex-1">
                            <FaEnvelope className="text-2xl text-gray-400 mr-2" />
                            <input type="email" placeholder="Stay in Touch With us" className="w-full outline-none text-xl text-gray-700" />
                        </div>
                        <Button className={'w-32'} label={'Search'}></Button>
                    </div>
            </div>
        </>
    );
};
export default Subscription;