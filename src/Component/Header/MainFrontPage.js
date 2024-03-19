import React from 'react'
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from '../images/Vighnaharta Event  New Logo 1.png';
import video from '../images/ContactVideo.mp4'
import { Link } from 'react-router-dom';
const MainFrontPage = () => {
    return (
        <div>
            <section>
                <div className='z-20 front'>
                    
                    <div className='flex lg:flex-row flex-col items-center justify-center'>
                        <div className='lg:w-5/12 w-full max-w-screen-lg flex flex-col items-center lg:h-[90vh] justify-center lg:py-2 p-10'>
                            <div className='text-left'>
                                <p className='text-3xl font-bold'>Innovative events that exceed expectations, every time  <hr /></p>
                                <p className='text-xl font-semibold'>In a world where first impressions matter, the success of your event hinges on the expertise of your event planning partner. With our seasoned professionals, creative brilliance, and commitment to flawless execution, we stand ready to transform your event into a cherished memory. Don't just host an event—elevate it with us. Get in touch today, and let's embark on a journey to create something extraordinary together.</p>
                            </div>
                            <div className='flex lg:justify-evenly justify-between items-center w-full'>
                                <Link to={'/contact'}> <button className='h-16 w-36 my-5 text-xl font-bold rounded-lg bg-black text-white transition duration-500  hover:bg-custom-Metallic-gold font-madimi-one-regular'>Contact Us</button>
                                </Link>
                                <div className='flex items-center ml-12 lg:space-x-2'>
                                    <FontAwesomeIcon icon={faDownload} className=' bg-red-500 p-5 rounded-full' />
                                    <h1 className='lg:text-3xl text-xl font-madimi-one-regular font-semibold'> Request Brochure</h1>
                                </div>

                            </div>
                        </div>
                        <div className='lg:w-6/12 w-full  max-w-screen-lg flex items-center lg:h-[90vh] justify-center'>
                            <div className='flex justify-center'>
                                <img src={img1} alt="" className='w-[350px] lg:h-[400px] h-auto mx-auto' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainFrontPage
