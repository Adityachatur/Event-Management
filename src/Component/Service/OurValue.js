import React from 'react'
import img from '../images/ourvalue.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const OurValue = () => {
    return (
        <div>
            <div className='lg:w-11/12 mx-auto w-full flex flex-wrap lg:my-10 my-1 '>
                <div className='w-full md:w-6/12' data-aos="zoom-in" data-aos-duration="2000">
                    <img src={img} alt="" className='lg:h-[400px] md:h-auto lg:w-[650px] w-full  mx-auto' />
                </div>
                <div className='w-full md:w-6/12 ' data-aos="zoom-in" data-aos-duration="3000">
                    <h1 className='text-xl md:text-2xl lg:text-xl font-semibold p-4 text-orange-400 font-Montserrat '> - Our importance</h1>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl p-3 font-bold font-Montserrat text-custom-navy-blue'>Our goal is to establish genuine connections among people through the experiences of our events</h1>
                    <p className='text-normal font-medium p-4 font-poppins'>
                        At our company, we always focus on being honest and clear. This helps us build trust and make sure our clients are happy every time we work with them</p>

                    <div className='flex lg:space-x-16 space-x-3 lg:text-2xl text-base p-4 font-bold font-poppins'>
                        <div className='flex items-center space-x-2'><FontAwesomeIcon icon={faCheck} className='text-base lg:p-2 p-1 bg-custom-Metallic-gold text-custom-navy-blue rounded-full' /><h1>Honesty</h1></div>
                        <div className='flex items-center space-x-2'><FontAwesomeIcon icon={faCheck} className='text-base lg:p-2 p-1 bg-custom-Metallic-gold text-custom-navy-blue rounded-full' /><h1>Proficiency</h1></div>
                        <div className='flex items-center space-x-2'><FontAwesomeIcon icon={faCheck} className='text-base lg:p-2 p-1 bg-custom-Metallic-gold text-custom-navy-blue rounded-full' /><h1>Expertise</h1></div>
                    </div>

                    <Link to={'/projects'}> <button className='text-center border-2 px-2 py-4 lg:text-2xl flex  text-lg font-bold  m-4  bg-custom-Metallic-gold text-custom-navy-blue rounded-md  hover:bg-custom-navy-blue hover:text-custom-Metallic-gold font-poppins transition transform duration-5000' data-aos="zoom-in-down" data-aos-duration="2200">View Projects</button></Link>
                </div>
            </div>
        </div>
    )
}

export default OurValue
