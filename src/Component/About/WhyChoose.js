import React, { useEffect, useState } from 'react';
import img1 from '../images/Gallery3.jpg';
import img2 from '../images/Home4.jpg';
import img3 from '../images/whychoose.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const WhyChoose = () => {
    const images = [img1, img2, img3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentImageIndex + 1) % images.length;
            setCurrentImageIndex(nextIndex);
        }, 4000);
        return () => clearInterval(interval);
    }, [currentImageIndex, images.length]);

    return (
        <div>
            <div className='lg:mt-10 mt-0 lg:my-20 lg:w-11/12 w-full mx-auto' data-aos="zoom-in" data-aos-duration="2500">
                <div className='flex flex-col md:flex-row mx-auto'>

                    <div className='w-full md:w-5/12 flex justify-center md:justify-end relative'>
                        <img src={images[currentImageIndex]} className='w-full lg:h-auto h-[400px] fonrob lg:mx-0 border-2 border-orange-300 max-w-mobile-img sm:max-w-lg' alt='' />
                    </div>

                    <div className='lg:w-6/12 sm:full sm:p-10 bg-orange-300'>
                        <div className='w-full pt-5 sm:pt-10 h-auto text-center'>
                            <p className='text-3xl sm:text-4xl uppercase  font-bold text-custom-navy-blue font-poppins' data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500"
                                data-aos-delay="500">Why To Choose EventDoors?</p>
                        </div>

                        <div className='grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-2 gap-4 mx-auto my-5 sm:mt-10'>

                            <div className=' flex space-x-4 lg:p-4 sm:p-6 p-4' data-aos="zoom-in" data-aos-duration="1000"
                                data-aos-delay="100">
                                <FontAwesomeIcon icon={faCheck} className='p-3 text-xl lg:text-3xl text- font-bold text-custom-navy-blue border-2 border-custom-navy-blue bg-custom-Metallic-gold rounded-full' />
                                <div className='space-y-2'>
                                    <h1 className='text-lg sm:text-xl font-bold uppercase font-Montserrat text-custom-navy-blue'>Strategic Planning</h1>
                                    <p className='text-base font-poppins'>Crafting comprehensive event strategies that align with clients' goals and objectives.</p>
                                </div>
                            </div>

                            <div className=' flex space-x-4 lg:p-4 sm:p-6 p-4' data-aos="zoom-in" data-aos-duration="1000"
                                data-aos-delay="100">
                                <FontAwesomeIcon icon={faCheck} className='p-3 text-xl lg:text-3xl font-bold text-custom-navy-blue border-2 border-custom-navy-blue bg-custom-Metallic-gold rounded-full' />
                                <div className='space-y-2'>
                                    <h1 className='text-lg sm:text-xl font-bold uppercase font-Montserrat text-custom-navy-blue'>Budget Management</h1>
                                    <p className='text-base font-poppins'>Skillfully managing budgets to ensure all elements of the event are delivered within financial parameters.</p>
                                </div>
                            </div>


                            <div className=' flex space-x-4 lg:p-4 sm:p-6 p-4' data-aos="zoom-in" data-aos-duration="1000"
                                data-aos-delay="100">
                                <FontAwesomeIcon icon={faCheck} className='p-3 text-xl lg:text-3xl font-bold text-custom-navy-blue border-2 border-custom-navy-blue bg-custom-Metallic-gold rounded-full' />
                                <div className='space-y-2'>
                                    <h1 className='text-lg sm:text-xl font-bold uppercase font-Montserrat text-custom-navy-blue'>Guest Experience Enhancement</h1>
                                    <p className='text-base font-poppins'>Designing experiences that delight attendees, considering everything from registration to post-event follow-up.</p>
                                </div>
                            </div>

                            <div className='flex space-x-4 lg:p-4 sm:p-6 p-4' data-aos="zoom-in" data-aos-duration="1000"
                                data-aos-delay="100">
                                <FontAwesomeIcon icon={faCheck} className='p-3 text-xl lg:text-3xl font-bold text-custom-navy-blue border-2 border-custom-navy-blue bg-custom-Metallic-gold rounded-full' />
                                <div className='space-y-2'>
                                    <h1 className='text-lg sm:text-xl font-bold uppercase font-Montserrat text-custom-navy-blue'>Flexibility and Adaptability</h1>
                                    <p className='text-base font-poppins'>Adapting to changes in real-time, ensuring a seamless event experience even in dynamic environments.</p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;
