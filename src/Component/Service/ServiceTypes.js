import React from 'react'
import logo from '../images/Vighnaharta Event  New Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchengin } from '@fortawesome/free-brands-svg-icons'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import Groups2Icon from '@mui/icons-material/Groups2';
import PlaceIcon from '@mui/icons-material/Place';
import DuoIcon from '@mui/icons-material/Duo';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
const ServiceTypes = () => {
    return (
        <div>
            <div className='lg:w-10/12 w-full mx-auto flex flex-wrap lg:my-10 my-5'>
                <div className=' lg:w-4/12 w-full text-white grid grid-cols-2 lg:px-0 px-2'>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <h1 className='lg:text-xl text-base font-bold  lg:px-3 font-Montserrat' >Research Planning</h1>
                        <FontAwesomeIcon icon={faSearchengin} className=' bg-custom-voilet text-white p-2 rounded-full' style={{ width: '30px', height: '30px' }} />
                    </div>
                    <div></div>
                    <div></div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <h1 className='lg:text-xl text-base font-bold  lg:px-3 font-Montserrat'>Talent Booking</h1>
                        <EventAvailableIcon className='bg-custom-voilet text-white p-2 rounded-full' style={{ width: '40px', height: '40px' }} />
                    </div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <h1 className='lg:text-xl text-base font-bold  lg:px-3 font-Montserrat'>Event Management</h1>
                        <Groups2Icon className='bg-custom-voilet text-white p-2 rounded-full' style={{ width: '40px', height: '40px' }} />
                    </div>
                    <div></div>
                    <div></div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <h1 className='lg:text-xl text-base font-bold  lg:px-3 font-Montserrat'>Entertainment</h1>
                        < MusicNoteIcon className='text-2xl bg-custom-voilet text-white p-2 rounded-full' style={{ width: '40px', height: '40px' }} />
                    </div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <h1 className='lg:text-xl text-base font-bold  lg:px-3 font-Montserrat'>Printing</h1>
                        <LocalPrintshopIcon className='text-2xl bg-custom-voilet text-white p-2 rounded-full' style={{ width: '40px', height: '40px' }} />
                    </div>
                    <div></div>
                    <div></div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <h1 className='lg:text-xl text-base font-bold  lg:px-3 font-Montserrat'>Venue Finding</h1>
                        <PlaceIcon className='text-2xl bg-custom-voilet text-white p-2 rounded-full' style={{ width: '40px', height: '40px' }} />
                    </div>
                </div>


                <div className='text-white lg:w-4/12 w-full  flex items-center justify-center lg:h-[500px] h-auto'>
                    <img src={logo} alt="" className=' lg:w-[380px] w-60 rounded-xl  p-4' />
                </div>


                <div className=' lg:w-4/12 w-full text-white grid grid-cols-2 lg:px-0 px-2'>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <h1 className='lg:text-xl text-base font-bold  lg:px-3 font-Montserrat'>Event Production</h1>
                        <DuoIcon className='text-2xl bg-custom-voilet text-white p-2 rounded-full' style={{ width: '40px', height: '40px' }} />
                    </div>
                    <div></div>
                    <div></div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <h1 className='lg:text-xl text-base font-bold  lg:px-3'>Digital Media</h1>
                        <CameraAltIcon className='text-2xl bg-custom-voilet text-white p-2 rounded-full' style={{ width: '40px', height: '40px' }} />
                    </div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <h1 className='lg:text-xl text-base font-bold  lg:px-3 font-Montserrat'>3D Visuals</h1>
                        <ViewInArIcon className='text-2xl bg-custom-voilet text-white p-2 rounded-full' style={{ width: '40px', height: '40px' }} />
                    </div>
                    <div></div>
                    <div></div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <h1 className='lg:text-xl text-base font-bold  lg:px-3 font-Montserrat'>
                            Logistics</h1>
                        <LocalShippingIcon className='text-2xl bg-custom-voilet text-white p-2 rounded-full' style={{ width: '40px', height: '40px' }} />
                    </div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <h1 className='lg:text-xl text-base font-bold  lg:px-3 font-Montserrat'>Decoration</h1>
                        <FormatPaintIcon className='text-2xl bg-custom-voilet text-white p-2 rounded-full' style={{ width: '40px', height: '40px' }} />
                    </div>
                    <div></div>
                    <div></div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <h1 className='lg:text-xl text-base font-bold  lg:px-3 font-Montserrat'>Catering</h1>
                        <LunchDiningIcon className='text-2xl bg-custom-voilet text-white p-2 rounded-full' style={{ width: '40px', height: '40px' }} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ServiceTypes
