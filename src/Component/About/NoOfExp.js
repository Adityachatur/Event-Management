import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

function NoOfExp() {
    const [event, setEvent] = useState(1);
    const [rating, setRating] = useState(1);
    const [exp, setExp] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            if (event < 100) {
                setEvent(event + 1);
            }
        }, 50); // Change the interval as needed

        return () => clearInterval(interval);
    }, [event]);


    useEffect(() => {
        const interval = setInterval(() => {
            if (rating < 5) {
                setRating(rating + 1);
            }
        }, 500);

        return () => {
            clearInterval(interval);
        }
    }, [rating]);


    useEffect(() => {
        const interval = setInterval(() => {
            if (exp < 8) {
                setExp(exp + 1);
            }
        }, 500);
        return () => {
            clearInterval(interval);
        }
    }, [exp])



    return (
        <div className='w-full h-40  flex justify-evenly items-center'>
            <div className='w-52 text-center'>
                <h1 className='text-5xl font-bold'>{event}+ </h1>
                <p className='font-bold text-2xl'>Events</p>
            </div>
            <div className='w-52 text-center'>
                <h1 className='text-5xl font-bold'>{rating} <FontAwesomeIcon icon={faStar} className='text-3xl text-orange-400 py-1 pr-2' />  </h1>
                <p className='font-bold text-2xl'>Rating</p>
            </div>
            <div className='w-52 text-center'>
                <h1 className='text-5xl font-bold'>{exp}+</h1>
                <p className='font-bold text-2xl'>Experience</p>
            </div>
        </div>
    );
}

export default NoOfExp;
