import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

function NoOfExp() {
    const [event, setEvent] = useState(1);
    const [rating, setRating] = useState(1);
    const [exp, setExp] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            if (event < 1000) {
                setEvent(event + 1);
            }
        }, 1); // Change the interval as needed

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
        <div className='w-full lg:h-44 h-auto py-10 space-y-5  flex justify-evenly items-center flex-wrap mx-auto font-Orbitron '>
            <div className='w-56 text-center'>
                <h1 className='text-5xl font-bold'>{event}+ </h1>
                <p className='font-bold font-poppins text-3xl'>Events</p>
            </div>
            <div className='w-56 text-center'>
                <h1 className='text-5xl font-bold'>{rating} <FontAwesomeIcon icon={faStar} className='text-3xl text-yellow-300 py-1 pr-2' />  </h1>
                <p className='font-bold font-poppins text-3xl'>Rating</p>
            </div>
            <div className='w-56 text-center'>
                <h1 className='text-5xl font-bold'>{exp} Years+</h1>
                <p className='font-bold font-poppins text-3xl'>Experience</p>
            </div>
        </div>
    );
}

export default NoOfExp;
