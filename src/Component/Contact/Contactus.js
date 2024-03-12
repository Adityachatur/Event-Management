import React from 'react'
import contact from '../images/company-logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faHome, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
const Contactus = () => {
    return (
        <div>
            <div className='w-full py-10 bg-gray-800 flex flex-wrap'>

                <div className='w-full md:w-1/2 bg-gray-800 flex flex-col justify-center md:justify-start md:pl-10'>
                    <h1 className='text-left p-5 text-3xl text-white font-bold lg:pl-28'>GET IN TOUCH</h1>
                    <div className='flex flex-col justify-end mx-5 lg:pl-28'>

                        <div className='text-white'>
                            <label htmlFor="" className='lg:text-2xl text-xl font-bold'>Enter Name</label> <br />
                            <input type="text" placeholder="Name" className='w-full md:w-10/12 h-10 bg-gray-800 border-b-2 text-white lg:text-base  text-md placeholder-white focus:border-black input-effect' />
                        </div>
                        <br />
                        <br />

                        <div className='text-white'>
                            <label htmlFor="" className='lg:text-2xl text-xl font-bold'>Enter Email</label> <br />
                            <input type="text" placeholder="Email" className='w-full md:w-10/12 h-10 bg-gray-800 border-b-2 text-white lg:text-base  text-md placeholder-white focus:border-black input-effect' />
                        </div>
                        <br />
                        <br />
                        <div className='text-white'>
                            <label htmlFor="" className='lg:text-2xl text-xl font-bold'>Enter Phone</label> <br />
                            <input type="text" placeholder="Phone" className='w-full md:w-10/12 h-10 bg-gray-800 border-b-2 text-white lg:text-base   text-md placeholder-white focus:border-black input-effect' />
                        </div>
                        <br />
                        <br />
                        <div className='text-white'>
                            <label htmlFor="" className='lg:text-2xl text-xl font-bold'>Select Event</label> <br />
                            <select className="w-full md:w-10/12 h-10 bg-gray-800 border-b-2 text-white lg:text-lg text-md placeholder-white focus:border-black input-effect">
                                <option value="" disabled selected hidden>Select an event</option>
                                <option value="item1">Wedding Event</option>
                                <option value="item2">Birthday Event</option>
                                <option value="item3">Annivarsary Event</option>
                                <option value="item4">Business Openning Event</option>
                                <option value="item5">Engagement ceremony Event</option>
                            </select>
                        </div>

                        <br /><br />
                        <div className='text-white'>
                            <label htmlFor="" className='lg:text-2xl text-xl font-bold'>Enter Comment</label> <br />
                            <textarea type="text" rows="40" cols="90" placeholder="Comment" className='w-full md:w-10/12 h-10 bg-gray-800 border-b-2 text-white lg:text-base  text-md placeholder-white focus:border-black input-effect'></textarea>
                        </div>
                        <br />

                        <button class="h-14 border-2 rounded-lg text-white lg:text-2xl text-xl font-bold w-40 hover:text-black hover:bg-custom-Metallic-gold transition-transform duration-300 transform-gpu hover:scale-105">Submit</button>
                    </div>
                </div>


                <div className='w-full md:w-1/2 gird grid-cols-1 '>

                    <div className='pt-10 pl-5 flex items-center  space-x-5'>
                        <FontAwesomeIcon icon={faPhone} className='text-black lg:text-4xl text-2xl bg-custom-Metallic-gold p-3 rounded-full' />
                        <div>
                            <p className='text-custom-Metallic-gold lg:text-xl text-lg font-semibold'>Mob. No</p>
                            <p className='lg:text-2xl text-md font-bold cursor-pointer text-white'>+91 9552314201</p>
                        </div>
                    </div>
                    <div className='pt-10 pl-5 flex items-center  space-x-5'>
                        <FontAwesomeIcon icon={faEnvelope} className='text-black lg:text-4xl text-2xl bg-custom-Metallic-gold p-3 rounded-full' />
                        <div>
                            <p className='text-custom-Metallic-gold lg:text-xl text-lg font-semibold'>For Enquiries</p>
                            <p className='lg:text-2xl text-md font-bold cursor-pointer text-white'>adityachatur4@gmail.com</p>
                        </div>
                    </div>
                    <div className='pt-10 pl-5 flex items-center  space-x-5'>
                        <FontAwesomeIcon icon={faBriefcase} className='text-black lg:text-4xl text-2xl bg-custom-Metallic-gold p-3 rounded-full' />
                        <div>
                            <p className='text-custom-Metallic-gold lg:text-xl text-lg font-semibold'>Careers </p>
                            <p className='lg:text-2xl text-md font-bold cursor-pointer text-white'>adityachatur4@gmail.com</p>
                        </div>
                    </div>
                    <div className='pt-10 pl-5 flex items-center  space-x-5'>
                        <FontAwesomeIcon icon={faHome} className='text-black lg:text-4xl text-2xl bg-custom-Metallic-gold p-3 rounded-full' />
                        <div>
                            <p className='text-custom-Metallic-gold lg:text-xl text-lg font-semibold'>Address </p>
                            <p className='lg:text-2xl text-md font-bold cursor-pointer text-white'>Medankarwadi chakan, Tal.Khed <br /> dist.Pune  pin-410501</p>
                        </div>
                    </div>
                    <div>
                        <img src={contact} className='w-full h-80 lg:p-5 p-3' alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contactus
