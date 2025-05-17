import React, { use } from 'react';
import { FaEdit, FaMapMarkerAlt, FaBriefcase, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Tab } from '@headlessui/react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../Context/AuthContext';
import { Link, Outlet } from 'react-router';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
const Profile = () => {

    const {user} = use(AuthContext);

    return (
        <>
            <Helmet>
                <title>JobHunt | Profile</title>
            </Helmet>
            <div>
                <div className="max-w-6xl mx-auto px-4 py-10">
                    {/* Profile Header */}
                    <div className="bg-base-100 shadow-md p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6 banner-subscription">
                        <img src={user ? user.photoURL:"https://i.pravatar.cc/150?img=3"} alt="avatar" className="rounded-full w-32 h-32 border-4 border-[#3C65F5] object-cover" />
                        <div className="flex-1 text-white space-y-1">
                            <h2 className="text-2xl font-bold">{user ? user.displayName :"Hosen Rabby"}</h2>
                            <p className=" opacity-80 flex items-center gap-2 text-white"><FaBriefcase /> Software Engineer</p>
                            <p className=" opacity-80 flex items-center gap-2 text-white"><FaMapMarkerAlt /> Mirpur, Dhaka Bangladexh</p>
                        </div>
                        <Link to={'/profile/update'}><button className="btn btn-outline bg-[#3C65F5] text-white border-0"><FaEdit className="mr-2" /> Edit Profile</button></Link>
                    </div>

                    {/* Tabs */}
                    <Tab.Group>
                        <Tab.List className="mt-8 flex space-x-1 rounded-xl bg-base-200 p-1">
                            {['Overview', 'Saved Jobs', 'Applications'].map((tab) => (
                                <Tab key={tab} className={({ selected }) => classNames('w-full py-2.5 text-sm leading-5 font-medium rounded-lg', selected ? 'bg-[#3C65F5] text-white' : 'text-base-content hover:bg-base-300')}>{tab}</Tab>
                            ))}
                        </Tab.List>

                        <Tab.Panels className="mt-4">
                            {/* Overview */}
                            <Tab.Panel>
                                <div className="bg-base-100 shadow-md p-6 rounded-2xl space-y-4">
                                    <h3 className="text-lg font-semibold">About Me</h3>
                                    <p>Passionate full-stack developer with 5+ years of experience.</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                        <div className="flex items-center gap-2">
                                            <FaEnvelope /> <span>{user? user.email : "john@example.com"}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaPhone /> <span>{user.phoneNumber===!null? user.phoneNumber : "01864528899"}</span>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Panel>

                            {/* Saved Jobs */}
                            <Tab.Panel>
                                <div className="bg-base-100 shadow-md p-6 rounded-2xl">
                                    <h3 className="text-lg font-semibold mb-4">Saved Jobs</h3>
                                    <p className="text-base-content">You haven’t saved any jobs yet.</p>
                                </div>
                            </Tab.Panel>

                            {/* Applications */}
                            <Tab.Panel>
                                <div className="bg-base-100 shadow-md p-6 rounded-2xl">
                                    <h3 className="text-lg font-semibold mb-4">Job Applications</h3>
                                    <p className="text-base-content">No job applications submitted.</p>
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
            <Outlet></Outlet>
        </>
    );
};

export default Profile;