import React from 'react'
import SubTemplate from '../SubTemplate'
import ServiceTypes from './ServiceTypes'
import QuestionAsk from './QuestionAsk'
import OurValue from './OurValue'
import video from '../images/ServiceVideo.mp4'
const Service = () => {
    return (
        <div>
            <SubTemplate title="Service" video={video} />
            <ServiceTypes />
            <QuestionAsk />
            <OurValue />
        </div>
    )
}

export default Service
