import React from 'react';
import logo from '../images/company-logo.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='text-white bg-black  grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 w-full mx-auto lg:w-full'>
                <div className='  flex flex-col justify-center items-center'>
                    <img src={logo} alt="" className='w-40' />
                    <h1 className='text-lg'>Terms and Condition</h1>
                    <h1 className='text-lg'>Policy</h1>
                </div>

                <div className='text-center  p-9'>
                    <h1 className='font-bold text-2xl mb-3'>Quick Links</h1>
                    <ul className='text-lg space-y-2'>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li>Projects</li>
                        <li>Contact</li>
                        <li>Service</li>
                    </ul>
                </div>

                <div className=' text-center p-9'>
                    <h1 className='font-bold text-2xl mb-3'>Visit Us</h1>
                    <ul className='text-lg space-y-2'>
                        <li>Balajinagar Medankarwadi,</li>
                        <li>chakan,</li>
                        <li>Pune Pin-410501</li>
                    </ul>
                </div>
                <div className=' text-center  p-9'>
                    <h1 className='font-bold text-2xl mb-3'>Contact Us</h1>
                    <ul className='text-lg space-y-2 cursor-pointer'>
                        <li>+91 9552314201</li>
                        <li>Adityachatur7996@gmail.com</li>
                    </ul>
                </div>
                <div className='  p-4'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d323.59309141213816!2d73.86280519707643!3d18.743641720309697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1709184675301!5m2!1sen!2sin"
                        style={{ width: "100%", height: "100%", border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Footer;
