import React, { useEffect } from 'react';
import logo from '../images/Vighnaharta Event  New Logo 1.png';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    let location = useLocation();
    useEffect(() => {
    }, [location]);

    return (
        <div>
            <div className='text-white bg-black  grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 w-full mx-auto lg:w-full'>
                <div className='  flex flex-col justify-center items-center'>
                    <img src={logo} alt="" className='w-40' />
                    <h1 className='text-lg'>Terms and Condition</h1>
                    <h1 className='text-lg'>Policy</h1>
                </div>

                <div className='text-center  p-9'>
                    <h1 className='font-bold text-2xl mb-3 font-Orbitron'>Quick Links</h1>
                    <ul className='text-lg space-y-2 font-Onest'>
                        <li><Link to={'/'} className={`${location.pathname === "/" ? "text-custom-Metallic-gold" : ""}`}>Home</Link></li>
                        <li><Link to={'/about'} className={`${location.pathname === "/about" ? "text-custom-Metallic-gold" : ""}`}>About</Link></li>
                        <li><Link to={'/service'} className={`${location.pathname === "/service" ? "text-custom-Metallic-gold" : ""}`}>Service</Link></li>
                        <li><Link to={'/projects'} className={`${location.pathname === "/projects" ? "text-custom-Metallic-gold" : ""}`}>Projects</Link></li>
                        <li><Link to={'/contact'} className={`${location.pathname === "/contact" ? "text-custom-Metallic-gold" : ""}`}> Contact</Link></li>
                    </ul>
                </div>

                <div className=' text-center p-9'>
                    <h1 className='font-bold text-2xl mb-3 font-Orbitron'>Visit Us</h1>
                    <ul className='text-lg space-y-2 font-Onest'>
                        <li>Banglawasti Medankarwadi,</li>
                        <li>chakan,</li>
                        <li>Pune Pin-410501</li>
                    </ul>
                </div>
                <div className=' text-center  p-9'>
                    <h1 className='font-bold text-2xl mb-3 font-Orbitron'>Contact Us</h1>
                    <ul className='text-lg space-y-2 cursor-pointer font-Onest'>
                        <a href="tel:+917028388484">+91 7028388484</a> <br />
                        <a href="mailto:saurabhzende99@gmail.com">saurabhzende99@gmail.com</a>
                        <h1 className='flex space-x-4 justify-center lg:text-3xl text-xl'>
                            <Link to={"https://www.instagram.com/vighnaharta_events_?igsh=cm0wZndxdG5sNnF2"}><FontAwesomeIcon icon={faInstagram} className='color hover:text-yellow-400  transform duration-300' /></Link>
                            <FontAwesomeIcon icon={faFacebook} className='color' />
                            <FontAwesomeIcon icon={faTwitter} className='color' />
                            <FontAwesomeIcon icon={faYoutube} className='color' />
                        </h1>
                    </ul>
                </div>
                <div className='  p-4'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d323.59309141213816!2d73.86280519707643!3d18.743641720309697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1709184675301!5m2!1sen!2sin"
                        style={{ width: "100%", height: "100%", border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title='Office Location'
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Footer;
