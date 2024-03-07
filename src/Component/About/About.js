import React from 'react'
import SubTemplate from '../SubTemplate'
import AboutTrust from './AboutTrust'
import MissionVision from './MissionVision'

const About = () => {
    return (
        <div>
            <SubTemplate title="About Page" />
            <AboutTrust />
            <MissionVision/>
        </div>
    )
}

export default About
