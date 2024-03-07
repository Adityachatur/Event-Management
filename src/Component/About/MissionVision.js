import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faBullseye, faRankingStar, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const MissionVision = () => {
    return (
        <div>
            <div className='lg:w-11/12 w-full flex flex-wrap mx-auto py-10   '>

                <div className='w-full md:w-6/12 mb-5 md:mb-0'>
                    <h1 className='text-xl md:text-2xl lg:text-xl font-semibold p-2 text-orange-400'> - Think big, party even bigger.</h1>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl p-4 font-bold '>
                        Our goal is to craft extraordinary experiences through our event planning expertise.</h1>
                    <p className='text-lg md:text-xl lg:text-lg font-medium p-2'>
                        At Our Mission to Create Exceptional Events, we're dedicated to crafting unforgettable experiences. With attention to detail and creativity, we turn ordinary occasions into extraordinary celebrations. From corporate conferences to weddings, we exceed expectations and set new standards in event planning.</p>
                </div>

                <div className='w-full md:w-6/12 grid lg:grid-cols-2 md:grid-cols-2 gap-10 grid-cols-2 p-2'>
                    <div className='w-full md:w-[200px] lg:w-[280px] xl:w-[320px] h-[220px] bg-custom-voilet text-center space-y-2 rounded-lg mission'>
                        <FontAwesomeIcon icon={faBullseye} className='lg:text-7xl text-4xl text-white pt-3 icon' />
                        <h1 className='lg:text-2xl text-xl text-white font-bold'>Mission</h1>
                        <p className='text-white lg:text-base text-sm p-1'>Create an unforgettable experience that lingers in the hearts of our guests long after they depart.</p>
                    </div>
                    <div className='w-full md:w-[200px] lg:w-[280px] xl:w-[320px] h-[220px] bg-custom-voilet text-center space-y-2 rounded-lg mission'>
                        <FontAwesomeIcon icon={faEye} className='lg:text-7xl text-4xl text-white pt-3 icon' />
                        <h1 className='lg:text-2xl text-xl text-white font-bold'>Vision</h1>
                        <p className='text-white lg:text-base text-sm p-1'>Create an unforgettable experience that lingers in the hearts of our guests long after they depart.</p>
                    </div>
                    <div className='w-full md:w-[200px] lg:w-[280px] xl:w-[320px] h-[220px] bg-custom-voilet text-center space-y-2 rounded-lg mission'>
                        <FontAwesomeIcon icon={faUsers} className='lg:text-7xl text-4xl text-white pt-3 icon' />
                        <h1 className='lg:text-2xl text-xl text-white font-bold'>Users</h1>
                        <p className='text-white lg:text-base text-sm p-1'>Create an unforgettable experience that lingers in the hearts of our guests long after they depart.</p>
                    </div>
                    <div className='w-full md:w-[200px] lg:w-[280px] xl:w-[320px] h-[220px] bg-custom-voilet text-center space-y-2 rounded-lg mission'>
                        <FontAwesomeIcon icon={faRankingStar} className='lg:text-7xl text-4xl text-white pt-3 icon' />
                        <h1 className='lg:text-2xl text-xl text-white font-bold'>Goals</h1>
                        <p className='text-white lg:text-base text-sm p-1'>Create an unforgettable experience that lingers in the hearts of our guests long after they depart.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionVision
