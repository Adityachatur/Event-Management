import React from 'react'
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from '../images/download (1).jpg'
import img2 from '../images/download (2).jpg'
import img3 from '../images/download (3).jpg'
const MainFrontPage = () => {
    return (
        <div>
            <section>
                <div className='z-20 relative'>
                    <div className='flex lg:flex-row flex-col items-center justify-center'>
                        <div className='lg:w-5/12 w-full max-w-screen-lg flex flex-col items-center lg:h-[90vh] justify-center lg:py-2 p-10'>
                            <div className='text-left'>
                                <p className='text-3xl font-bold'>Innovative events that exceed expectations, every time  <hr /></p>
                                <p className='text-xl font-semibold'>In a world where first impressions matter, the success of your event hinges on the expertise of your event planning partner. With our seasoned professionals, creative brilliance, and commitment to flawless execution, we stand ready to transform your event into a cherished memory. Don't just host an event—elevate it with us. Get in touch today, and let's embark on a journey to create something extraordinary together.</p>
                            </div>
                            <div className='flex lg:justify-evenly justify-between items-center w-full'>
                                <button className='h-16 w-36 my-5 rounded-lg bg-black text-white'>Contact Us</button>

                                <div className='flex items-center ml-12 lg:space-x-2'>
                                    <FontAwesomeIcon icon={faDownload} className=' bg-red-500 p-5 rounded-full' />
                                    <h1 className='lg:text-3xl text-xl  font-bold'> Request Brochure</h1>
                                </div>

                            </div>
                        </div>
                        <div className='lg:w-6/12 w-full  max-w-screen-lg flex items-center lg:h-[90vh] justify-center'>
                            <div className='grid lg:grid-cols-2 sm:grid-cols-2 flex-col  gap-1'>
                                <div className='h-48 xl:w-[350px] lg:w-[300px] md:w-[320px] w-full mx-auto bg-black' style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover' }}>
                                </div>
                                <div className='h-48 xl:w-[350px] lg:w-[300px] md:w-[320px] w-[290px]  bg-black' style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover' }}>
                                </div>
                                <div className='lg:col-span-2 sm:col-span-2  h-72 w-full bg-black' style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainFrontPage
