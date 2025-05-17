import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
const CounterUp = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });
    return (
        <div className="w-10/12 mx-auto py-12 px-4 my-10">
            <div ref={ref} className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                    <h2 className="text-5xl font-bold text-blue-600">{inView ? <CountUp start={0} end={3500} duration={3.5}></CountUp>:0}+</h2>
                    <h3 className="text-2xl font-semibold text-gray-900 mt-2">Completed Cases</h3>
                    <p className="text-gray-500 mt-2">
                        We always provide people a complete solution upon focused of any business
                    </p>
                </div>
                <div>
                    <h2 className="text-5xl font-bold text-blue-600">{inView ? <CountUp start={0} end={19} duration={3.5}></CountUp>:0}+</h2>
                    <h3 className="text-2xl font-semibold text-gray-900 mt-2">Our Office</h3>
                    <p className="text-gray-500 mt-2">
                        We always provide people a complete solution upon focused of any business
                    </p>
                </div>
                <div>
                    <h2 className="text-5xl font-bold text-blue-600">{inView ? <CountUp start={0} end={86} duration={3.5}></CountUp>:0}+</h2>
                    <h3 className="text-2xl font-semibold text-gray-900 mt-2">Skilled People</h3>
                    <p className="text-gray-500 mt-2">
                        We always provide people a complete solution upon focused of any business
                    </p>
                </div>
                <div>
                    <h2 className="text-5xl font-bold text-blue-600">{inView ? <CountUp start={0} end={90} duration={3.5}></CountUp>:0}+</h2>
                    <h3 className="text-2xl font-semibold text-gray-900 mt-2">Happy Clients</h3>
                    <p className="text-gray-500 mt-2">
                        We always provide people a complete solution upon focused of any business
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CounterUp;