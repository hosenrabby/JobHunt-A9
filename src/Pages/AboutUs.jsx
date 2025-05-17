import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import { motion } from "framer-motion";

const AboutUs = () => {
    return (
        <>
            <Helmet>
                <title>JobHunt | About Our Portal</title>
            </Helmet>
            <div className='min-h-[300px] bg-blue-950/10 bg-[url(/assets/about.png)]  bg-no-repeat bg-center bg-cover bg-fixed'>
                <div className='w-10/12 mx-auto py-10 md:py-20'>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                    <p className='text-2xl'>Get the latest news, updates and tips</p>
                </div>
            </div>
            <div className="w-10/12 mx-auto px-4 md:px-16 py-12 text-base-content">
                <div className="text-center mb-12">
                    <h4 className="text-gray-500 font-semibold uppercase tracking-wide">Our Company</h4>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">About Our Company</h1>
                    <p className="max-w-4xl mx-auto text-gray-500">JobHunt is a modern job portal dedicated to connecting job seekers with top employers worldwide. Designed with simplicity and speed in mind, the platform offers advanced search filters, streamlined application tools, and personalized recommendations to help candidates find the right job faster. Employers benefit from access to a vast pool of qualified applicants, intuitive job posting features, and efficient recruitment tools. With thousands of successful matches, JobHunt empowers careers across industries including engineering, data science, design, and marketing. Backed by a commitment to innovation and user satisfaction, JobHunt is your trusted partner in career advancement and talent acquisition.</p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-1/2">
                        <img src="/assets/Screenshot (1).png" alt="Team working" className="rounded-2xl shadow-md" />
                    </div>

                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-bold text-gray-500 mb-4">What we can do?</h2>
                        <div className="space-y-4 text-gray-600">
                            <p>
                                Aenean sollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum sagittis sem nibh id elit.
                                Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                            </p>
                            <p>
                                Aenean sollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum sagittis sem nibh id elit.
                                Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                            </p>
                            <p>
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis non nisi
                                purus. Integer sit nostra, per inceptos himenaeos.
                            </p>
                            <p>
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis non nisi
                                purus. Integer sit nostra, per inceptos himenaeos.
                            </p>
                        </div>
                        <Link to="/about-more" className="btn btn-primary mt-6">Read More</Link>
                    </div>
                </div>
            </div>

            <section className="py-16 bg-base-100 text-center">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.h2 className="text-4xl font-bold mb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} > About Our Company </motion.h2>

                    <motion.p className="text-gray-500 max-w-2xl mx-auto mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
                        We are dedicated to connecting talented professionals with top companies. Our platform helps job seekers find meaningful careers and recruiters discover the perfect candidates.
                    </motion.p>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <motion.img src="/assets/img1.png" alt="Team" className="rounded-lg shadow-lg" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} />

                        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-500">
                                What We Can Do?
                            </h3>
                            <p className="text-gray-600 mb-4">
                                From personalized job we streamline the hiring process and empower users to r recommendations we streamline the hiring process and empower users to r to recruiter networking tools, we streamline the  we streamline the hiring process and empower users to rhiring process and empower users to reach their goals with confidence.
                            </p>
                            <button className="btn btn-primary">Learn More</button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;