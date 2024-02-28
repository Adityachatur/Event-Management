
import React from 'react';
import MainFrontPage from './MainFrontPage';
import WhyChoose from '../About/WhyChoose';
import NoOfExp from '../About/NoOfExp';
import Project from '../Projects/Project';
import Client_Review from '../Client/Client_Review';
const Hero = () => {
    return (
        <div>
            <MainFrontPage />
            <NoOfExp />
            <WhyChoose />
            <Project />
            <Client_Review />
        </div>
    );
};

export default Hero;
