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
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl'>
                        <h1 className='lg:text-2xl text-base font-bold  lg:px-3'>Research Planning</h1>
                        <FontAwesomeIcon icon={faSearchengin} className='text-2xl bg-custom-voilet text-white p-1 rounded-full' />
                    </div>
                    <div></div>
                    <div></div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl'>
                        <h1 className='lg:text-2xl text-base font-bold  lg:px-3'>Talent Booking</h1>
                        <EventAvailableIcon className='bg-custom-voilet text-white p-1 rounded-lg' />
                    </div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl'>
                        <h1 className='lg:text-2xl text-base font-bold  lg:px-3'>Event Management</h1>
                        <Groups2Icon className='bg-custom-voilet text-white p-1 rounded-full' />
                    </div>
                    <div></div>
                    <div></div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl'>
                        <h1 className='lg:text-2xl text-base font-bold  lg:px-3'>Entertainment</h1>
                        < MusicNoteIcon className='text-2xl bg-custom-voilet text-white p-1 rounded-full' />
                    </div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl'>
                        <h1 className='lg:text-2xl text-base font-bold  lg:px-3'>Printing</h1>
                        <LocalPrintshopIcon className='text-2xl bg-custom-voilet text-white p-1 rounded-full' />
                    </div>
                    <div></div>
                    <div></div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl'>
                        <h1 className='lg:text-2xl text-base font-bold  lg:px-3'>Venue Finding</h1>
                        <PlaceIcon className='text-2xl bg-custom-voilet text-white p-1 rounded-full' />
                    </div>
                </div>


                <div className='text-white lg:w-4/12 w-full  flex items-center justify-center lg:h-[500px] h-auto'>
                    <img src={logo} alt="" className=' lg:w-[380px] w-60 rounded-xl  p-4' />
                </div>


                <div className=' lg:w-4/12 w-full text-white grid grid-cols-2 lg:px-0 px-2'>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl'>
                        <h1 className='lg:text-2xl text-base font-bold  lg:px-3'>Event Production</h1>
                        <DuoIcon className='text-2xl bg-custom-voilet text-white p-1 rounded-full' />
                    </div>
                    <div></div>
                    <div></div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl'>
                        <h1 className='lg:text-2xl text-base font-bold  lg:px-3'>Digital Media</h1>
                        <CameraAltIcon className='text-2xl bg-custom-voilet text-white p-1 rounded-full' />
                    </div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl'>
                        <h1 className='lg:text-2xl text-base font-bold  lg:px-3'>3D Visuals</h1>
                        <ViewInArIcon className='text-2xl bg-custom-voilet text-white p-1 rounded-full' />
                    </div>
                    <div></div>
                    <div></div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl'>
                        <h1 className='lg:text-2xl text-base font-bold  lg:px-3'>
                            Logistics</h1>
                        <LocalShippingIcon className='text-2xl bg-custom-voilet text-white p-1 rounded-full' />
                    </div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl'>
                        <h1 className='lg:text-2xl text-base font-bold  lg:px-3'>Decoration</h1>
                        <FormatPaintIcon className='text-2xl bg-custom-voilet text-white p-1 rounded-full' />
                    </div>
                    <div></div>
                    <div></div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl'>
                        <h1 className='lg:text-2xl text-base font-bold  lg:px-3'>Catering</h1>
                        <LunchDiningIcon className='text-2xl bg-custom-voilet text-white p-1 rounded-full' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ServiceTypes
