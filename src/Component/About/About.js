import React from 'react'
import SubTemplate from '../SubTemplate'
import AboutTrust from './AboutTrust'
import MissionVision from './MissionVision'
import WhyChoose from '../About/WhyChoose'
import CompanyClientimpress from '../Client/CompanyClientimpress'
import OurTeam from './OurTeam'
const About = () => {
    return (
        <div>
            <SubTemplate title="About Page" />
            <AboutTrust />
            <MissionVision />
            <WhyChoose />
            <OurTeam />
            <CompanyClientimpress />
        </div>
    )
}

export default About
