import React, { useEffect, useState } from 'react';
import { FaBolt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';
import Button from '../Shared/Button';

const LatestJobs = () => {
    const [category, setCategory] = useState([])
    const [letJobs, setLetJobs] = useState([])
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        fetch("/jobCategorys.json").then(res => res.json()).then(data => { setCategory(data.slice(0, 8)) })
        fetch("/companyJobData.json").then(res => res.json()).then(data => { 
            if (toggle) {
                const filtData = data.filter(job => job.isLatest === true)
                setLetJobs(filtData)
            } else {
                const filtData = data.filter(job => job.isLatest === true)
                setLetJobs(filtData.slice(0, 10))
            }
         })
    }, [toggle]);

    const handleCategory =(catName)=>{
        fetch("/companyJobData.json").then(res => res.json()).then(data =>{
            const catData = data.filter(jobData => jobData.category === catName)
            setLetJobs(catData)
        })
        
    }
    // console.log(letJobs)
    return (
        <div className='max-w-10/12 mx-auto mt-6'>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">Latest Jobs by Category</h1>
            <p className="mb-8 text-xl text-gray-500 text-center">Search and connect with the right candidates faster.</p>

            <div className='w-10/12 mx-auto flex items-center gap-3 flex-wrap mb-8'>
                {
                    category.map(category =>
                        <div onClick={()=>handleCategory(category.name)} key={category.id} className='border hover:border-blue-600 border-base-300 hover:text-blue-600 text-gray-600 transition flex gap-2 items-center p-3 rounded-lg cursor-pointer'>
                            <img className='w-6' src={category.categoryLogo} alt="" />
                            <p>{category.name}</p>
                        </div>
                    )
                }
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6'>
                {
                    letJobs.map(latJob =>
                        <div key={latJob.id} className="border border-base-300 rounded-xl p-5 bg-[#F2F6FD] hover:bg-[#FFFFFF] hover:shadow-lg hover:mt-[-1px] transition duration-300 relative">
                            <FaBolt className="text-green-400 absolute top-4 right-4" />

                            {/* Header */}
                            <div className="flex items-center gap-4 mb-4">
                                <img src={latJob.bannerImage} alt="Company Logo" className="w-12 h-12 rounded-md object-cover" />
                                <div>
                                    <h2 className="text-lg font-semibold">{latJob.category}</h2>
                                    <div className="flex items-center text-sm text-gray-500"><FaMapMarkerAlt className="mr-1" />{latJob.location}</div>
                                </div>
                            </div>

                            <h3 className="text-lg font-bold mb-2">{latJob.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                <div className="flex items-center gap-1"><FaClock />Fulltime</div>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">{latJob.description.slice(0,180)}</p>

                            <div className="flex gap-2 flex-wrap mb-4">
                                {["Adobe XD", "Figma", "Photoshop"].map((tag) => (
                                    <span key={tag} className="badge badge-sm badge-outline badge-accent">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between my-6">
                                <div className="text-blue-600 font-bold text-sm">{latJob.salary}
                                    <span className="text-gray-500 text-sm font-normal"> / M</span>
                                </div>
                                <Link to="/">
                                    <button className="btn bg-[#3C65F5] text-white btn-sm">Apply Now</button>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div></div>
                    <div><Button className={'w-full mt-4'} onClick={() => setToggle(!toggle)} label={toggle ? 'Show Less' : 'Show All'}></Button></div>
                    <div></div>
                </div>
        </div>
    );
};

export default LatestJobs;