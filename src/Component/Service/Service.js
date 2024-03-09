import React from 'react'
import SubTemplate from '../SubTemplate'
import ServiceTypes from './ServiceTypes'
import QuestionAsk from './QuestionAsk'
import OurValue from './OurValue'
const Service = () => {
    return (
        <div>
            <SubTemplate title="Service" />
            <ServiceTypes />
            <QuestionAsk />
            <OurValue />
        </div>
    )
}

export default Service
