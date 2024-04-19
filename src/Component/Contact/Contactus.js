import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import contactvideo from '../images/Aboutvideo.mp4';

const Contactus = () => {
    const videoStyle = {
        width: '100%',
        height: '300px',
        objectFit: 'cover',
        zIndex: '-1',
        top: 0,
        left: 0,
    };
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        event: '',
        comment: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        formsubmit();
    };

    const [nameerror, setnameerror] = useState('');
    const validname = (name) => {
        return name.length > 5;
    }

    const [emailerror, setemailerror] = useState('');
    const validemail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const [contacterror, setcontacterror] = useState('');
    const validcontact = (contact) => {
        return /^\d{10}$/.test(contact);
    }

    const [eventerror, seteventerror] = useState('');
    const valievent = (event) => {
        return event !== "";
    }

    const [commenterror, setcommenterror] = useState('');
    const validcomment = (comment) => {
        return comment.split(' ').filter(word => word !== '').length >= 3;
    };





    const formsubmit = async () => {
        try {
            if (!validname(form.name)) {
                setnameerror("Name must be Greater than 5 Characters.");
                return;
            } else {
                setnameerror('');
            }
            if (!validemail(form.email)) {
                setemailerror("Please Enter the valid email address.");
                return;
            } else {
                setemailerror('');
            } if (!validcontact(form.phone)) {
                setcontacterror("Mobile number must be 10 digits.");
                return;
            } else {
                setcontacterror('');
            } if (!valievent(form.event)) {
                seteventerror("Please select any one event");
                return;
            } else {
                seteventerror('');
            } if (!validcomment(form.comment)) {
                setcommenterror("Please enter at least 3 words");
            } else {
                setcommenterror('');
            }

            const whatsappMessage = `Name: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AEvent: ${form.event}%0AComment: ${form.comment}`;
            const whatsappNumber = '9552314201';

            window.open(
                `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
                "_blank"
            );
        } catch (error) {
            console.log("Validation error", error);
        }
    }

    return (
        <div>
            <div className='w-full py-10 bg-gray-800 flex flex-wrap'>

                <div className='w-full md:w-1/2 bg-gray-800 flex flex-col justify-center md:justify-start md:pl-10'>
                    <h1 className='text-left p-5 text-3xl text-white font-bold lg:pl-28 font-Montserrat' data-aos="zoom-in-down" data-aos-duration="1000">GET IN TOUCH</h1>
                    <div className='flex flex-col justify-end mx-5 lg:pl-28'>

                        <form onSubmit={handleSubmit}>
                            <div className='text-white'>
                                <label htmlFor="" className='lg:text-2xl text-xl font-bold font-poppins' data-aos="fade-down" data-aos-duration="1500">Enter Name</label> <br />
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className='w-full md:w-10/12 h-10 bg-gray-800 border-b-2 text-white lg:text-base text-md placeholder-white focus:border-black input-effect'
                                    required
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                />
                                {nameerror && (
                                    <p className='text-red-500 text-lg'>{nameerror}</p>
                                )}
                            </div>
                            <br />
                            <br />

                            <div className='text-white'>
                                <label htmlFor="" className='lg:text-2xl text-xl font-bold font-poppins' data-aos="fade-down" data-aos-duration="1500">Enter Email</label> <br />
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className='w-full md:w-10/12 h-10 bg-gray-800 border-b-2 text-white lg:text-base text-md placeholder-white focus:border-black input-effect'
                                    minLength={5}
                                    required
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                                {emailerror && (
                                    <p className='text-red-500 text-lg'>{emailerror}</p>
                                )}
                            </div>
                            <br />
                            <br />
                            <div className='text-white'>
                                <label htmlFor="" className='lg:text-2xl text-xl font-bold font-poppins' data-aos="fade-down" data-aos-duration="1500">Enter Phone</label> <br />
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className='w-full md:w-10/12 h-10 bg-gray-800 border-b-2 text-white lg:text-base text-md placeholder-white focus:border-black input-effect'
                                    minLength={10}
                                    required
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                />
                                {contacterror && (
                                    <p className='text-red-500 text-lg'>{contacterror}</p>
                                )}
                            </div>
                            <br />
                            <br />
                            <div className='text-white'>
                                <label htmlFor="" className='lg:text-2xl text-xl font-bold font-poppins' data-aos="fade-down" data-aos-duration="1500">Select Event</label> <br />
                                <select
                                    className="w-full md:w-10/12 h-10 bg-gray-800 border-b-2 text-white lg:text-lg text-md placeholder-white focus:border-black input-effect"
                                    name="event"
                                    value={form.event}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled hidden>Select an event</option>
                                    <option value="Wedding Event">Wedding Event</option>
                                    <option value="Birthday Event">Birthday Event</option>
                                    <option value="Anniversary Event">Anniversary Event</option>
                                    <option value="Business Opening Event">Business Opening Event</option>
                                    <option value="Engagement Ceremony Event">Engagement Ceremony Event</option>
                                </select>
                                {eventerror && (
                                    <p className='text-red-500 text-lg'>{eventerror}</p>
                                )}
                            </div>
                            <br /><br />
                            <div className='text-white'>
                                <label htmlFor="" className='lg:text-2xl text-xl font-bold font-poppins' data-aos="fade-down" data-aos-duration="1500">Enter Comment</label> <br />
                                <textarea
                                    rows="4"
                                    cols="50"
                                    placeholder="Comment"
                                    className='w-full md:w-10/12 h-20 bg-gray-800 border-b-2 text-white lg:text-base text-md placeholder-white focus:border-black input-effect'
                                    minLength={5}
                                    required
                                    name="comment"
                                    value={form.comment}
                                    onChange={handleChange}
                                ></textarea>
                                {commenterror && (
                                    <p className='text-red-500 text-lg'>{commenterror}</p>
                                )}
                            </div>
                            <br />
                            <button
                                className="h-14 border-2 rounded-lg text-white lg:text-2xl text-xl font-bold w-40 hover:text-black hover:bg-custom-Metallic-gold font-Orbitron transition-transform duration-300 transform-gpu hover:scale-105"
                                type='submit' data-aos="zoom-in-down" data-aos-duration="2200"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>


                <div className='w-full md:w-1/2 gird grid-cols-1 '>

                    <div className='pt-10 pl-5 flex items-center  space-x-5' data-aos="zoom-in-down" data-aos-duration="2200">
                        <FontAwesomeIcon icon={faPhone} className='text-black lg:text-4xl text-2xl bg-custom-Metallic-gold p-3 rounded-full' />
                        <div>
                            <p className='text-custom-Metallic-gold  text-lg font-semibold font-Montserrat'>Mob. No</p>
                            <p className='lg:text-xl text-md font-bold cursor-pointer text-white font-poppins'>+91 7028388484</p>
                        </div>
                    </div>
                    <div className='pt-10 pl-5 flex items-center  space-x-5' data-aos="zoom-in-down" data-aos-duration="2200">
                        <FontAwesomeIcon icon={faEnvelope} className='text-black lg:text-4xl text-2xl bg-custom-Metallic-gold p-3 rounded-full' />
                        <div>
                            <p className='text-custom-Metallic-gold  text-lg font-semibold font-Montserrat'>For Enquiries</p>
                            <p className='lg:text-xl text-md font-bold cursor-pointer text-white font-poppins'>saurabhzende99@gmail.com</p>
                        </div>
                    </div>
                    {/* <div className='pt-10 pl-5 flex items-center  space-x-5' data-aos="zoom-in-down" data-aos-duration="2200">
                        <FontAwesomeIcon icon={faBriefcase} className='text-black lg:text-4xl text-2xl bg-custom-Metallic-gold p-3 rounded-full' />
                        <div>
                            <p className='text-custom-Metallic-gold  text-lg font-semibold font-Montserrat'>Careers </p>
                            <p className='lg:text-xl text-md font-bold cursor-pointer text-white font-poppins'>Vighnahartaevent99@gmail.com</p>
                        </div>
                    </div> */}
                    <div className='pt-10 pl-5 flex items-center  space-x-5' data-aos="zoom-in-down" data-aos-duration="2200">
                        <FontAwesomeIcon icon={faHome} className='text-black lg:text-4xl text-2xl bg-custom-Metallic-gold p-3 rounded-full' />
                        <div>
                            <p className='text-custom-Metallic-gold  text-lg font-semibold font-Montserrat'>Address </p>
                            <p className='lg:text-xl text-md font-bold cursor-pointer text-white font-Roboto Slab'>Banglawasti Medankarwadi Chakan<br /> dist.Pune  pin-410501</p>
                        </div>
                    </div>
                    <div>
                        <video src={contactvideo} autoPlay loop muted style={videoStyle} className='w-full h-80 lg:p-5 p-3' data-aos="zoom-in" data-aos-duration="2500"></video>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contactus;
