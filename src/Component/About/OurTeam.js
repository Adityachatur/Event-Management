import React from 'react';
import logo from '../images/company-logo.jpg'
import owenerimg from '../images/Owner.jpg'
const OurTeam = () => {
    return (
        <div>
            <div className=" w-full lg:h-[800px] h-auto team-lead">
                <div className='text-center'>
                    <div className='text-center flex justify-center w-full '>
                        <img src={owenerimg} alt="" className='lg:w-[350px] w-full rounded-xl h-[450px] m-3 p-2 ' />
                    </div>
                    <h1 className='lg:text-3xl text-xl p-2 font-bold font-Montserrat '>Saurabh Zende</h1>
                    <h1 className='text-xl font-semibold font-Roboto Slab'>Owner of Company </h1>
                    <h1 className='lg:text-xl text-base font-semibold lg:p-4 p-2 lg:w-9/12 md:w-7/12 w-full mx-auto'>Welcome to <h1 className='lg:text-3xl font-bold  pb-3 text-orange-500 text-xl'>Vighnaharta Event Management Company</h1> We specialize in creating unforgettable experiences for weddings, corporate events, birthdays and more. With our dedicated team of professionals, we handle every aspect of event planning with precision and creativity. From stunning decor to seamless logistics and great entertainment, we ensure your event is a memorable success. Let us bring your vision to life and create lasting memories for you and your guests</h1>
                </div>
            </div>

            {/* <div className='grid gap-3 lg:mx-auto lg:w-11/12 w-full lg:grid-cols-4 md:grid-cols-2 grid-cols-2 px-1'>
                <div className=' p-2 mx-auto bg-custom-skincolor rounded-lg text-center'>
                    <img src={logo} className='w-full rounded-lg mx-auto' alt="" />
                    <h1 className='p-2 text-lg font-bold'>Name: abcd efg <br /> Contact: +91 9552314201 <br /> Email: www@gmail.com <br /> Position: Event Planning</h1>
                </div>
                <div className=' p-2 mx-auto bg-custom-skincolor rounded-lg text-center'>
                    <img src={logo} className='w-full rounded-lg mx-auto' alt="" />
                    <h1 className='p-2 text-lg font-bold'>Name: abcd efg <br /> Contact: +91 9552314201 <br /> Email: www@gmail.com <br /> Position: Event Planning</h1>
                </div>
                <div className=' p-2 mx-auto bg-custom-skincolor rounded-lg text-center'>
                    <img src={logo} className='w-full rounded-lg mx-auto' alt="" />
                    <h1 className='p-2 text-lg font-bold'>Name: abcd efg <br /> Contact: +91 9552314201 <br /> Email: www@gmail.com <br /> Position: Event Planning</h1>
                </div>
                <div className='p-2 mx-auto  rounded-lg  text-center bg-custom-skincolor'>
                    <img src={logo} className='w-full rounded-lg mx-auto' alt="" />
                    <h1 className='p-2 lg:text-lg text-base  font-bold'>Name: abcd efg <br /> Contact: +91 9552314201 <br /> Email: www@gmail.com <br /> Position: Event Planning</h1>
                </div>
            </div> */}

        </div>
    );
};

export default OurTeam;
