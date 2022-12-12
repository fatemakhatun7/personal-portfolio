import React from 'react';
import HomeProjectSection from '../HomeProjectSection/HomeProjectSection';
import HomeSection1 from '../HomeSection1/HomeSection1';
import AboutMe from './AboutMe/AboutMe';

const Home = () => {
    return (
        <div className='m-10'>
            <AboutMe></AboutMe>
            <HomeSection1></HomeSection1>
            <HomeProjectSection></HomeProjectSection>
        </div>
    );
};

export default Home;