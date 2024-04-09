import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faBullseye, faRankingStar, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const MissionVision = () => {
    return (
        <div>
            <div className='lg:w-11/12 w-full flex flex-wrap mx-auto py-10   '>

                <div className='w-full md:w-6/12 mb-5 md:mb-0' data-aos="zoom-in" data-aos-duration="2000">
                    <h1 className='text-xl md:text-2xl lg:text-xl font-semibold p-4 text-orange-400 font-Montserrat'> - Think big, party even bigger.</h1>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl px-4 font-Montserrat font-bold'>
                        Our goal is to craft extraordinary experiences through our event planning expertise.</h1>
                    <p className='text-lg md:text-xl lg:text-lg font-poppins font-medium px-4 pt-4'>
                        At Our Mission to Create Exceptional Events, we're dedicated to crafting unforgettable experiences. With attention to detail and creativity, we turn ordinary occasions into extraordinary celebrations. From corporate conferences to weddings, we exceed expectations and set new standards in event planning.</p>
                </div>

                <div className='w-full md:w-6/12 grid lg:grid-cols-2 md:grid-cols-2 gap-10 grid-cols-2 p-2'>
                    <div className='w-full md:w-[200px] lg:w-[280px] xl:w-[320px] h-[220px] bg-custom-voilet text-center space-y-2 rounded-lg mission' data-aos="fade-down" data-aos-duration="1000">
                        <FontAwesomeIcon icon={faBullseye} className='lg:text-7xl text-4xl text-white pt-3 icon' />
                        <h1 className='lg:text-2xl text-xl text-white font-bold font-Montserrat'>Mission</h1>
                        <p className='text-white lg:text-base text-sm p-1 font-poppins lg:w-10/12 mx-auto'>Create an unforgettable experience that lingers in the hearts of our guests long after they depart.</p>
                    </div>
                    <div className='w-full md:w-[200px] lg:w-[280px] xl:w-[320px] h-[220px] bg-custom-voilet text-center space-y-2 rounded-lg mission' data-aos="fade-down" data-aos-duration="1500">
                        <FontAwesomeIcon icon={faEye} className='lg:text-7xl text-4xl text-white pt-3 icon' />
                        <h1 className='lg:text-2xl text-xl text-white font-bold font-Montserrat'>Vision</h1>
                        <p className='text-white lg:text-base text-sm p-1 font-poppins lg:w-10/12 mx-auto'>Create an unforgettable experience that lingers in the hearts of our guests long after they depart.</p>
                    </div>
                    <div className='w-full md:w-[200px] lg:w-[280px] xl:w-[320px] h-[220px] bg-custom-voilet text-center space-y-2 rounded-lg mission' data-aos="fade-down" data-aos-duration="2000">
                        <FontAwesomeIcon icon={faUsers} className='lg:text-7xl text-4xl text-white pt-3 icon' />
                        <h1 className='lg:text-2xl text-xl text-white font-bold font-Montserrat'>Users</h1>
                        <p className='text-white lg:text-base text-sm p-1 font-poppins lg:w-10/12 mx-auto'>Create an unforgettable experience that lingers in the hearts of our guests long after they depart.</p>
                    </div>
                    <div className='w-full md:w-[200px] lg:w-[280px] xl:w-[320px] h-[220px] bg-custom-voilet text-center space-y-2 rounded-lg mission' data-aos="fade-down" data-aos-duration="2500">
                        <FontAwesomeIcon icon={faRankingStar} className='lg:text-7xl text-4xl text-white pt-3 icon' />
                        <h1 className='lg:text-2xl text-xl text-white font-bold font-Montserrat'>Goals</h1>
                        <p className='text-white lg:text-base text-sm p-1 font-poppins lg:w-10/12 mx-auto'>Create an unforgettable experience that lingers in the hearts of our guests long after they depart.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionVision
