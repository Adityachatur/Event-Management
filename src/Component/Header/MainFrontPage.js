import React from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from '../images/Ganpati.png';
import { Link } from 'react-router-dom';
import brochureUrl from '../images/VighnahartaEventBrochure.pdf';
const MainFrontPage = () => {
    return (
        <div>
            <section>
                <div className='z-20 front '>
                    <div className='flex lg:flex-row flex-col items-center justify-center'>
                        <div className='lg:w-5/12 w-full max-w-screen-lg flex flex-col items-center lg:h-[90vh] justify-center lg:py-2 p-10'>
                            <div className='lg:text-left text-center lg:p-2 p-0'>
                                <p className='lg:text-5xl text-2xl font-bold font-Orbitron text-white'>Innovative events that exceed expectations, every time <hr /></p>
                                <p className='hidden lg:block text-xl text-justify font-semibold font-Onest text-custom-Metallic-gold'>In a world where first impressions matter, the success of your event hinges on the expertise of your event planning partner. With our seasoned professionals, creative brilliance, and commitment to flawless execution, we stand ready to transform your event into a cherished memory. Don't just host an event—elevate it with us. Get in touch today, and let's embark on a journey to create something extraordinary together.</p>
                                <p className='lg:hidden text-xl text-justify font-semibold font-Onest text-custom-Metallic-gold'>Our experienced team knows how to make events awesome. We're creative and dedicated to making your event the best ever. Reach out to us now and let's create something extraordinary together!</p>
                            </div>
                            <div className='flex lg:justify-evenly justify-between items-center w-full px-3'>
                                <Link to={'/contact'}>
                                    <button className='h-16 w-36 lg:my-5 my-1 lg:text-xl text-lg font-bold rounded-lg bg-black text-white transition duration-500 hover:bg-custom-Metallic-gold font-madimi-one-regular font-Orbitron'>Contact Us</button>
                                </Link>
                                <div className='flex items-center ml-3 lg:space-x-1'>
                                    <a href={brochureUrl} download>
                                        <FontAwesomeIcon icon={faDownload} className='bg-red-500 hover:bg-custom-Metallic-gold transform transition-all duration-300 cursor-pointer lg:p-5 p-3 text-2xl rounded-full' />
                                    </a>
                                    <h1 className='lg:text-3xl text-lg font-Orbitron text-custom-Metallic-gold font-semibold'> Download <br /> Brochure</h1>
                                </div>

                            </div>
                        </div>
                        <div className='lg:w-6/12 w-full  max-w-screen-lg flex items-center  h-auto lg:my-0 my-5 justify-center'>
                            <div className="flex justify-center">
                                <img src={img1} alt="" className="w-[350px] lg:h-[450px] h-auto mx-auto rounded-full drop-shadow" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MainFrontPage;
