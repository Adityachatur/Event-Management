import React from 'react'
import Card from './Card'
import img from '../images/download.jpg'
import { Link } from 'react-router-dom'
const Project = () => {
    return (
        <div>

            <div className='text-center py-10 lg:text-6xl text-3xl font-bold '>
                <h1>Our Events</h1>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4 w-full mx-auto lg:w-11/12'>

                <Link to={'/wedding'}><Card img={img} title="Wedding Events" /></Link>
                <Card title="Engagement Ceremony" />
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

export default Project
