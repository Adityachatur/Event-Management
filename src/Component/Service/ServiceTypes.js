import React from 'react'
import logo from '../images/company-logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchengin } from '@fortawesome/free-brands-svg-icons'
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
                        <FontAwesomeIcon icon={faSearchengin} className='text-2xl bg-custom-voilet text-white p-1 rounded-full' />
                    </div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl'>
                        <h1 className='lg:text-2xl text-base font-bold  lg:px-3'>Event Management</h1>
                        <FontAwesomeIcon icon={faSearchengin} className='text-2xl bg-custom-voilet text-white p-1 rounded-full' />
                    </div>
                    <div></div>
                    <div></div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl'>
                        <h1 className='lg:text-2xl text-base font-bold  lg:px-3'>Entertainment</h1>
                        <FontAwesomeIcon icon={faSearchengin} className='text-2xl bg-custom-voilet text-white p-1 rounded-full' />
                    </div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl'>
                        <h1 className='lg:text-2xl text-base font-bold  lg:px-3'>Printing</h1>
                        <FontAwesomeIcon icon={faSearchengin} className='text-2xl bg-custom-voilet text-white p-1 rounded-full' />
                    </div>
                    <div></div>
                    <div></div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl'>
                        <h1 className='lg:text-2xl text-base font-bold  lg:px-3'>Venue Finding</h1>
                        <FontAwesomeIcon icon={faSearchengin} className='text-2xl bg-custom-voilet text-white p-1 rounded-full' />
                    </div>
                </div>


                <div className='text-white lg:w-4/12 w-full  flex items-center justify-center lg:h-[500px] h-auto'>
                    <img src={logo} alt="" className=' lg:w-[380px] w-60 rounded-full p-4' />
                </div>


                <div className=' lg:w-4/12 w-full text-white grid grid-cols-2 lg:px-0 px-2'>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl'>
                        <h1 className='lg:text-2xl text-base font-bold  lg:px-3'>Event Production</h1>
                        <FontAwesomeIcon icon={faSearchengin} className='text-2xl bg-custom-voilet text-white p-1 rounded-full' />
                    </div>
                    <div></div>
                    <div></div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl'>
                        <h1 className='lg:text-2xl text-base font-bold  lg:px-3'>Digital Media</h1>
                        <FontAwesomeIcon icon={faSearchengin} className='text-2xl bg-custom-voilet text-white p-1 rounded-full' />
                    </div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl'>
                        <h1 className='lg:text-2xl text-base font-bold  lg:px-3'>3D Visuals</h1>
                        <FontAwesomeIcon icon={faSearchengin} className='text-2xl bg-custom-voilet text-white p-1 rounded-full' />
                    </div>
                    <div></div>
                    <div></div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl'>
                        <h1 className='lg:text-2xl text-base font-bold  lg:px-3'>
                            Logistics</h1>
                        <FontAwesomeIcon icon={faSearchengin} className='text-2xl bg-custom-voilet text-white p-1 rounded-full' />
                    </div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl'>
                        <h1 className='lg:text-2xl text-base font-bold  lg:px-3'>Decoration</h1>
                        <FontAwesomeIcon icon={faSearchengin} className='text-2xl bg-custom-voilet text-white p-1 rounded-full' />
                    </div>
                    <div></div>
                    <div></div>
                    <div className='text-black bg-gray-50 border-2  hover:animate-zoom-out flex items-center justify-between px-1 lg:h-auto h-20 rounded-lg hover:shadow-2xl'>
                        <h1 className='lg:text-2xl text-base font-bold  lg:px-3'>Catering</h1>
                        <FontAwesomeIcon icon={faSearchengin} className='text-2xl bg-custom-voilet text-white p-1 rounded-full' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ServiceTypes
