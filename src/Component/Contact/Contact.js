import React from 'react'
import SUbTemplate from '../SubTemplate'
import Contactus from './Contactus'
import video from '../images/ContactVideo.mp4'
const Contact = () => {
    return (
        <div>
            <SUbTemplate title="Contact Us" video={video} />
            <Contactus />
        </div>
    )
}

export default Contact
