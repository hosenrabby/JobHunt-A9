import React, { use } from 'react';
import { IoCallOutline } from 'react-icons/io5';
import { LuCalendarClock } from 'react-icons/lu';
import { MdLocationOn } from 'react-icons/md';
import { PiSuitcaseSimple, PiUserCircleGearLight } from 'react-icons/pi';
import { Link, useParams } from 'react-router';
import Button from '../Shared/Button';
import { LiaIndustrySolid } from 'react-icons/lia';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { SlBadge } from 'react-icons/sl';
import { Helmet } from 'react-helmet-async';

const CompanyDetails = ({ companyData, companyJobData }) => {

    const companies = use(companyData)
    const companyJobs = use(companyJobData)
    const { compID } = useParams()

    const companyDetail = companies.find(data => data.id === compID)
    const jobs = companyJobs.filter(data => data.companyId === compID)
    // console.log(jobs)
    return (
        <>
        <Helmet>
            <title>JobHunt | Company Details</title>
        </Helmet>
            {/* Company Prfile */}
            <div className='w-full md:w-10/12 mx-auto border-b border-base-300'>
                <div className='min-h-[468px] mt-[-68px]'>
                    <img className='w-full h-[350px]' src="/assets/Cloudy.svg" alt="" />

                    <div className='w-10/12 mx-auto mt-[-40px] mb-5'>
                        <img className='rounded-2xl w-24 mb-6' src={companyDetail.logo} alt="" />
                        <div className='flex justify-between items-baseline'>
                            <div className='space-y-3'>
                                <div className='flex justify-between items-center gap-4'>
                                    <h1 className='text-2xl font-bold'>{companyDetail.name}</h1>
                                    <span className='flex items-center gap-2 text-gray-400 text-lg '><MdLocationOn /> {companyDetail.location}</span>
                                </div>
                                <span className=" text-gray-500">Our Mission to make working life simple</span>
                            </div>
                            <div>
                                <button className='btn bg-[#3C65F5] p-6 text-xl text-white '><IoCallOutline /> Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-10/12 mx-auto flex flex-col-reverse md:flex-row  justify-between gap-4 my-4 py-6'>
                {/* left side box */}
                <div className='w-full md:w-8/12 mb-4'>
                    <div className='border-b border-base-300 mb-4'>
                        <h1 className='text-3xl text-[#4F5E64] font-semibold pb-6'>Recruitments</h1>
                        <p className='text-gray-500 md:leading-[2]'>{companyDetail.discription}</p>
                    </div>

                    <div>
                        <h1 className='text-3xl text-[#4F5E64] font-semibold pb-6'>Latest Jobs</h1>
                        <div className='flex flex-col gap-5'>
                            {
                                jobs.map(jobPost =>
                                    <div key={jobPost.id} className="card border border-base-300 bg-[#F2F6FD] hover:bg-[#FFFFFF] hover:shadow-lg transition rounded-xl">
                                        <div className="card-body">
                                            <div className='flex justify-between'>
                                                <div className=' flex gap-4 justify-start'>
                                                    <img className='rounded-2xl w-24 mb-3' src={companyDetail.logo} alt="" />
                                                    <div className='space-y-2 '>
                                                        <h1 className='text-2xl font-bold'>{companyDetail.name}</h1>
                                                        <div className="flex gap">
                                                            <span className='flex items-center gap-2 text-gray-400 text-lg'><MdLocationOn /> {jobPost.location}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='space-x-2'>
                                                    <div className="badge badge-outline badge-accent">Full Time</div>
                                                    <div className="badge badge-outline badge-accent">Remote Friendly</div>
                                                </div>
                                            </div>
                                            <h1 className='text-2xl text-[#4F5E64] font-semibold'>{jobPost.title}</h1>
                                            <div className='flex gap-5 '>
                                                <span className='flex items-center gap-2 text-gray-400'><PiSuitcaseSimple /> {jobPost.category}</span>
                                                <span className='flex items-center gap-2 text-gray-400'><MdLocationOn /> {jobPost.location}</span>
                                            </div>
                                            <span className='flex items-center gap-2 text-gray-400'> {`${jobPost.salary} / Yearly`}</span>
                                            <div className="flex justify-between items-center mt-4">
                                                <p>{`${jobPost.description.slice(0, 120)} ......`}</p>
                                                <Button label={'Show Details'} onClick={() => document.getElementById('JobPost').showModal()}></Button>
                                                {/* Job details in Modal */}
                                                <dialog id="JobPost" className="modal">
                                                    <div className="modal-box w-8/12 max-w-5xl max-h-[700px]">
                                                        <div className='h-64 w-full overflow-hidden'>
                                                        <img className='rounded-xl h-full w-full object-cover' src={jobPost.bannerImage} alt="" />
                                                        </div>
                                                        <div className='w-10/12 mx-auto mt-[-45px] mb-3'>
                                                            <img className='rounded-2xl w-20 mb-2' src={companyDetail.logo} alt="" />
                                                            <div className='flex justify-between items-baseline'>
                                                                <div className='space-y-3'>
                                                                    <div className='flex justify-between items-center gap-4'>
                                                                        <h1 className='text-xl font-bold'>{companyDetail.name}</h1>
                                                                        <span className='flex items-center gap-2 text-gray-400'><MdLocationOn /> {companyDetail.location}</span>
                                                                    </div>
                                                                    <span className=" text-gray-500">Our Mission to make working life simple</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='border border-base-300 w-full rounded-xl p-4 mb-3'>
                                                            <div className='p-2'>
                                                                <h1 className='text-2xl text-[#4F5E64] font-semibold border-b border-base-300 pb-3'>Employment Information</h1>

                                                                <div className='grid grid-cols-1 md:grid-cols-2'>
                                                                    <div className='flex flex-col md:flex-row p-4 gap-8'>
                                                                        <span className='flex items-center gap-2 text-lg text-gray-600'><LiaIndustrySolid />
                                                                            Industry</span>
                                                                        <span className='text-lg text-gray-800'> {jobPost.category}</span>
                                                                    </div>
                                                                    <div className='flex flex-col md:flex-row p-4 gap-8'>
                                                                        <span className='flex items-center gap-2 text-lg text-gray-600'><PiUserCircleGearLight />
                                                                            Job Lavel</span>
                                                                        <span className='text-lg text-gray-800'> {jobPost.title}</span>
                                                                    </div>
                                                                    <div className='flex flex-col md:flex-row p-4 gap-8'>
                                                                        <span className='flex items-center gap-2 text-lg text-gray-600'><HiOutlineCurrencyDollar />
                                                                            Salary</span>
                                                                        <span className='text-lg text-gray-800'> {jobPost.salary}</span>
                                                                    </div>
                                                                    <div className='flex flex-col md:flex-row p-4 gap-8'>
                                                                        <span className='flex items-center gap-2 text-lg text-gray-600'><SlBadge />
                                                                        Experience</span>
                                                                        <span className='text-lg text-gray-800'> 2 - 3 years</span>
                                                                    </div>
                                                                    <div className='flex flex-col md:flex-row p-4 gap-8'>
                                                                        <span className='flex items-center gap-2 text-lg text-gray-600'><MdLocationOn />
                                                                            Location</span>
                                                                        <span className='text-lg text-gray-800'> {jobPost.location}</span>
                                                                    </div>
                                                                    <div className='flex flex-col md:flex-row p-4 gap-8'>
                                                                        <span className='flex items-center gap-2 text-lg text-gray-600'><LuCalendarClock />
                                                                            Deadline</span>
                                                                        <span className='text-lg text-gray-800'> </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='border-b border-base-300 mb-4'>
                                                            <h1 className='text-2xl text-[#4F5E64] font-semibold pb-4'>Job Description</h1>
                                                            <p className='text-gray-500 md:leading-[2]'>{jobPost.description}</p>
                                                        </div>
                                                        <div className='border-b border-base-300 mb-4'>
                                                            <h1 className='text-2xl text-[#4F5E64] font-semibold pb-4'>Job Requirments</h1>
                                                            {jobPost.requirements.map((require,index) => <p key={index} className='text-gray-500 md:leading-[2]'>{`# -> ${require}`}</p>)}
                                                        </div>
                                                        <div className="modal-action">
                                                            <Link to={companyDetail.website} target='blank'><Button className={'px-3'} label={'Apply'}></Button></Link>
                                                            <form method="dialog">
                                                                <button className="btn btn-error mt-[5px]">Close</button>
                                                            </form>
                                                        </div>
                                                    </div>

                                                </dialog>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div >

                {/* Righ side company details */}
                < div className='w-full md:w-4/12 border border-base-300 rounded-2xl p-8 space-y-4 sticky top-18 h-fit'>
                    <div className='border-b border-base-300'>
                        <h1 className='text-xl font-bold'>{companyDetail.name}</h1>
                        <span className='flex items-center gap-2 text-gray-400'><MdLocationOn /> {companyDetail.location}</span>
                    </div>

                    <div className='pb-5 border-b border-base-300'>
                        <img src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/05/google-maps-icon-on-map.jpg" alt="" />
                    </div>

                    <div className='border-b border-base-300 space-y-6 pb-5'>
                        <div className='space-y-3'>
                            <span className='flex items-center gap-2 text-gray-400'><PiSuitcaseSimple /> Company Field</span>
                            <h1 className='ps-7 font-bold'>{companyDetail.industry}</h1>
                        </div>
                        <div className='space-y-3'>
                            <span className='flex items-center gap-2 text-gray-400'><MdLocationOn /> Location</span>
                            <h1 className='ps-7 font-bold'>{companyDetail.location}s</h1>
                        </div>
                        <div className='space-y-3'>
                            <span className='flex items-center gap-2 text-gray-400'><MdLocationOn /> Salary</span>
                            <h1 className='ps-7 font-bold'>$50k - $120k</h1>
                        </div>
                        <div className='space-y-3'>
                            <span className='flex items-center gap-2 text-gray-400'><LuCalendarClock /> Mamber Since</span>
                            <h1 className='ps-7 font-bold'>July 2012</h1>
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
};

export default CompanyDetails;