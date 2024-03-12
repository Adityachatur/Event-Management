import React from 'react';
import Card from './Card';
import img from '../images/download.jpg';
import bgimg from '../images/image-from-rawpixel-id-12786572-png.png'
import { Link } from 'react-router-dom';

const ProjectItem = () => {
    return (
        <div>
            <div className='text-center py-10 lg:text-6xl text-3xl font-bold text-custom-Metallic-gold'>
                <h1>Our Events</h1>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4 w-full mx-auto lg:w-11/12'
                style={{ backgroundImage: `url(${bgimg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <Link to={'/wedding'}><Card img={img} title="Wedding Events" /></Link>
                <Link to={'/engagement'}> <Card title="Engagement Ceremony" /></Link>
                <Card title="Birthday Event" />
                <Card title="Naming Ceremony" />
                <Card title="Baby Shower" />
                <Card title="Home opening" />
                <Card title="Corporate Event" />
                <Card title="Sport Event" />
            </div>
        </div>
    )
}

export default ProjectItem;
