import React from 'react';
import Card from './Card';
import img from '../images/Gallery12.jpg';
import img1 from '../images/Babyshower.jpeg';
import img2 from '../images/Engagement.jpg'
import img3 from '../images/BirthdayEvent.jpg'
import img4 from '../images/CarporateEvent.jpeg'
import img5 from '../images/CarDecoration.jpg'
import img6 from '../images/ReceptionParty.jpg'
import img7 from '../images/HaldiDecore.jpg'
import bgimg from '../images/image-from-rawpixel-id-12786572-png.png'
import { Link } from 'react-router-dom';

const ProjectItem = () => {
    return (
        <div>
            <div className='text-center py-10 lg:text-6xl text-3xl font-bold text-custom-navy-blue  uppercase font-poppins' data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="1000">
                <h1>Our  Special Events</h1>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4 w-full mx-auto lg:w-11/12 font-Montserrat'
                style={{ backgroundImage: `url(${bgimg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <Link to={'/wedding'}><Card img={img} title="Wedding Events" /></Link>
                <Link to={'/engagement'}> <Card img={img2} title="Engagement Ceremony" /></Link>
                <Card img={img3} title="Birthday Event" />
                <Card img={img6} title="Reception Party" />
                <Card img={img7} title="Haldi Decore" />
                <Card img={img1} title="Baby Shower" />
                <Card img={img4} title="Corporate Event" />
                <Card img={img5} title="Car Decoration" />
            </div>
        </div>
    )
}

export default ProjectItem;
