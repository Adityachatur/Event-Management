import React from 'react'
import SubTemplate from '../SubTemplate'
import AboutTrust from './AboutTrust'
import MissionVision from './MissionVision'
import WhyChoose from '../About/WhyChoose'
const About = () => {
    return (
        <div>
            <SubTemplate title="About Page" />
            <AboutTrust />
            <MissionVision />
            <WhyChoose />
        </div>
    )
}

export default About
