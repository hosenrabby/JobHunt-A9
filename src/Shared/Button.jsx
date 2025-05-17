import React from 'react';

const Button = ({ label, onClick, type, className }) => {
    return (
        <>
            <button onClick={onClick} type={type} className={`${className} rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#3C65F5] text-[#3C65F5]`} >
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#3C65F5] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-[#3C65F5] transition duration-300 group-hover:text-white ease">{label}</span>
            </button>
        </>
    );
};

export default Button;