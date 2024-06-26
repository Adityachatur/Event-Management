import React from 'react'
import img from '../images/trustimg.jpg'

const AboutTrust = () => {
    return (
        <div>
            <div className='lg:w-11/12 mx-auto w-full flex flex-wrap lg:my-10 my-1 '>
                <div className='w-full md:w-6/12' data-aos="zoom-in" data-aos-duration="2000">
                    <img src={img} alt="" className='lg:h-[400px] md:h-auto lg:w-[650px] w-full  mx-auto' />
                </div>
                <div className='w-full md:w-6/12 ' data-aos="zoom-in" data-aos-duration="3000">
                    <h1 className='text-xl md:text-2xl lg:text-xl font-semibold p-4 text-orange-400 font-Montserrat'> - Artists showed their great creativity through their art.</h1>
                    <h1 className='text-xl md:text-3xl lg:text-4xl px-4 font-bold font-Montserrat text-justify'>You can trust us because we always do  what we promise</h1>
                    <p className='text-lg md:text-xl lg:text-lg font-medium px-4 pt-4 font-poppins'>
                        Looking to throw a great event in Pune? Look no further than Vighnaharta Event Company! Our team is really good at making events awesome. Whether it's a wedding or a business gathering, we'll handle everything smoothly. We'll take care of the little details so you can just relax and have fun at your event! <br />
                        At Vighnaharta Event Company!, we're pros at making events in Pune extra special. We're all about giving top-notch service and creating amazing memories. We'll help you pick the best spot, set up everything nicely, and organize fun activities. Get in touch with us now to start planning your perfect event that everyone will remember!</p>
                </div>
            </div>
        </div>
    )
}

export default AboutTrust
