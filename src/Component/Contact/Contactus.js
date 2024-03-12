import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import contact from '../images/company-logo.jpg';

const Contactus = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        event: '',
        comment: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
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
                setcontacterror("Mobile number must be 10 digite.");
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

        } catch (error) {

        }
    }

    return (
        <div>
            <div className='w-full py-10 bg-gray-800 flex flex-wrap'>

                <div className='w-full md:w-1/2 bg-gray-800 flex flex-col justify-center md:justify-start md:pl-10'>
                    <h1 className='text-left p-5 text-3xl text-white font-bold lg:pl-28'>GET IN TOUCH</h1>
                    <div className='flex flex-col justify-end mx-5 lg:pl-28'>

                        <div className='text-white'>
                            <label htmlFor="" className='lg:text-2xl text-xl font-bold'>Enter Name</label> <br />
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
                            <label htmlFor="" className='lg:text-2xl text-xl font-bold'>Enter Email</label> <br />
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
                            <label htmlFor="" className='lg:text-2xl text-xl font-bold'>Enter Phone</label> <br />
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
                            <label htmlFor="" className='lg:text-2xl text-xl font-bold'>Select Event</label> <br />
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
                        </div>
                        {eventerror && (
                            <p className='text-red-500 text-lg'>{eventerror}</p>
                        )}

                        <br /><br />
                        <div className='text-white'>
                            <label htmlFor="" className='lg:text-2xl text-xl font-bold'>Enter Comment</label> <br />
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
                            className="h-14 border-2 rounded-lg text-white lg:text-2xl text-xl font-bold w-40 hover:text-black hover:bg-custom-Metallic-gold transition-transform duration-300 transform-gpu hover:scale-105"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
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
    );
};

export default Contactus;
