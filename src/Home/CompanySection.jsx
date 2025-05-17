import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import Button from '../Shared/Button';
import { Link } from 'react-router';

const CompanySection = () => {
    const [companys, setCompanies] = useState([])
    const [toggle, setToggle] = useState(false)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        fetch("/companysData.json").then(res => res.json()).then(data => {
            if (toggle) {
                setLoader(false)
                setCompanies(data)
            } else { 
                setLoader(false)
                setCompanies(data.slice(0, 8))}
        })

    }, [toggle])
    // console.log(companys)
    return (
        <>
            <div className='max-w-10/12 mx-auto mb-12'>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">Top Recruiter Companies</h1>
                <p className="mb-8 text-xl text-gray-500 text-center">Discover your next career move, freelance gig, or internship</p>

                {loader? <div className='text-center'><span className="loading loading-bars loading-xl"></span></div>
                :<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-5'>
                {
                    companys.map(companyData =>
                        <Link to={`companydetails/${companyData.id}`} key={companyData.id}>
                            <div className='border p-4 border-gray-500 rounded-2xl space-y-4 hover:mt-[-1px] hover:shadow-2xl transition'>
                                <div className=' flex gap-4 justify-start items-center'>
                                    <img className='w-1/5 rounded-xl' src={companyData.logo} alt="" />
                                    <div className='space-y-2 '>
                                        <h2 className='font-semibold'>{companyData.name}</h2>
                                        <div className="flex gap">
                                            <span className='text-amber-400'><FaStar></FaStar></span>
                                            <span className='text-amber-400'><FaStar></FaStar></span>
                                            <span className='text-amber-400'><FaStar></FaStar></span>
                                            <span className='text-amber-400'><FaStar></FaStar></span>
                                            <span className='text-amber-400'><FaStar></FaStar></span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center text-gray-400'>
                                    <span className='flex items-center'><MdLocationOn className="text-gray-400" /> {companyData.location}A</span>
                                    <span>Open For Jobs</span>
                                </div>
                            </div>
                        </Link>)
                }
            </div>
                }
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div></div>
                    <div><Button className={'w-full mt-4'} onClick={() => setToggle(!toggle)} label={toggle ? 'Show Less' : 'Show All'}></Button></div>
                    <div></div>
                </div>
            </div>
        </>
    );
};

export default CompanySection;