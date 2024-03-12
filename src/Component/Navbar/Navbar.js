import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import logo from '../images/company-logo.jpg';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
    let location = useLocation();
    useEffect(() => {
    }, [location]);


    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div>
            {/* Navbar */}
            <nav className='w-full h-24 px-5 bg-gray-900 flex justify-between items-center'>
                <div className='hidden lg:block text-white text-2xl'>
                    <h1>Event Management</h1>
                </div>

                {/* Menu Icon for Mobile */}
                <div className='lg:hidden'>
                    <button onClick={toggleSidebar}>
                        <FontAwesomeIcon icon={faBars} className='text-3xl text-white' />
                    </button>
                </div>

                {/* Company Logo (if any) */}
                <div>
                    <img src={logo} alt="Company Logo" className='lg:h-24 h-24 lg:w-[140px] w-[120px] mix-blend-screen lg:ml-40' />
                </div>

                {/* Navbar Links */}
                <div className='hidden list-none cursor-pointer lg:flex space-x-3 items-center'>
                    <ul className='flex space-x-5 text-white text-2xl'>
                        <li><Link to={'/'} className={`${location.pathname === "/" ? "text-custom-Metallic-gold" : ""}`}>Home</Link></li>
                        <li><Link to={'/about'} className={`${location.pathname === "/about" ? "text-custom-Metallic-gold" : ""}`}>About</Link></li>
                        <li><Link to={'/service'} className={`${location.pathname === "/service" ? "text-custom-Metallic-gold" : ""}`}>Service</Link></li>
                        <li><Link to={'/projects'} className={`${location.pathname === "/projects" ? "text-custom-Metallic-gold" : ""}`}>Projects</Link></li>
                        <li><Link to={'/contact'} className={`${location.pathname === "/contact" ? "text-custom-Metallic-gold" : ""}`}> Contact</Link></li>
                    </ul>
                </div>
            </nav>

            {/* Sidebar (Mobile View) */}
            <div className={`lg:hidden fixed inset-0 bg-opacity-50 z-50 transition-transform duration-500 ease-in-out transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='fixed inset-y-0 left-0 w-52 bg-white z-50'>
                    <div className='flex justify-between p-5'>
                        {/* Close Icon */}
                        <button onClick={toggleSidebar} className='flex w-full text-xl justify-end'>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                    <ul className='flex flex-col w-full space-y-2 p-5 text-xl font-bold'>
                        <li><Link to={'/'} className={`${location.pathname === "/" ? "text-custom-Metallic-gold" : ""}`}>Home</Link></li>
                        <li><Link to={'/about'} className={`${location.pathname === "/about" ? "text-custom-Metallic-gold" : ""}`}>About</Link></li>
                        <li><Link to={'/service'} className={`${location.pathname === "/service" ? "text-custom-Metallic-gold" : ""}`}>Service</Link></li>
                        <li><Link to={'/projects'} className={`${location.pathname === "/projects" ? "text-custom-Metallic-gold" : ""}`}>Projects</Link></li>
                        <li><Link to={'/contact'} className={`${location.pathname === "/contact" ? "text-custom-Metallic-gold" : ""}`}> Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
