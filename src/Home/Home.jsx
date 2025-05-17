import React from 'react';
import HeroSec from './HeroSec';
import HowWorks from './HowWorks';
import CompanySection from './CompanySection';
import LatestJobs from './LatestJobs';
import CounterUp from './CounterUp';
import Subscription from './Subscription';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>JobHunt | Home</title>
            </Helmet>
            <section>
                <HeroSec></HeroSec>
            </section>
            <section>
                <HowWorks></HowWorks>
            </section>
            <section>
                <CompanySection></CompanySection>
            </section>
            <section>
                <LatestJobs></LatestJobs>
            </section>
            <section>
                <CounterUp></CounterUp>
            </section>
            <section>
                <Subscription></Subscription>
            </section>
        </>
    );
};

export default Home;