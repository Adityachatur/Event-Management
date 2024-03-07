
import React from 'react';
import MainFrontPage from './MainFrontPage';
import WhyChoose from '../About/WhyChoose';
import NoOfExp from '../About/NoOfExp';
import Client_Review from '../Client/Client_Review';
import Gallery from '../Gallery/Gallery';
import ProjectItem from '../Projects/ProjectItem';
const Hero = () => {
    return (
        <div>
            <MainFrontPage />
            <Gallery />
            <NoOfExp />
            <WhyChoose />
            <ProjectItem />
            <Client_Review />
        </div>
    );
};

export default Hero;
