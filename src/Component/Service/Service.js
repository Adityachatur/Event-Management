import React from 'react'
import SubTemplate from '../SubTemplate'
import ServiceTypes from './ServiceTypes'
import QuestionAsk from './QuestionAsk'
const Service = () => {
    return (
        <div>
            <SubTemplate title="Service" />
            <ServiceTypes />
            <QuestionAsk />
        </div>
    )
}

export default Service
