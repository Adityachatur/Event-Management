import React from 'react';
import json from '../JsonFile/Weddingpics.json';

const WeddingEvent = () => {
    const weddingItems = json.Wedding;

    return (
        <div>
            <h1 className='text-center text-5xl font-bold my-5'>Wedding Event</h1>
            <div className='grid lg:w-11/12 mx-auto w-full lg:grid-cols-4 gap-2 py-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2'>
                {weddingItems.map((item, index) => (
                    <div key={index} className='lg:w-[320px] lg:mx-0 mx-1 border-2 lg:h-[270px] h-[200px] rounded-3xl overflow-hidden'>
                        <img src={item.Mainimg} alt={`Wedding Image ${index}`} className='w-full h-full object-cover'
                            style={{ objectPosition: 'center' }} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WeddingEvent;
