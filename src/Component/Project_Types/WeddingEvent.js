import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const WeddingEvent = () => {
    const weddingItems = [
        {
            "id": 1,
            "name": "Wedding img",
            "Mainimg": "jsonimg/company-logo.jpg",
            "subimg1": ["jsonimg/company-logo.jpg", "jsonimg/download.jpg", "jsonimg/company-logo.jpg", "jsonimg/download.jpg"]
        },
        {
            "id": 2,
            "name": "Wedding img",
            "Mainimg": "jsonimg/download.jpg",
            "subimg1": ["aabb", "ccdd", "eeff", "pqrst"]
        },
        {
            "id": 3,
            "name": "Wedding img",
            "Mainimg": "",
            "subimg1": ["aabb", "ccdd", "eeff", "pqrst"]
        },
        {
            "id": 4,
            "name": "Wedding img",
            "Mainimg": "",
            "subimg1": ["aabb", "ccdd", "eeff", "pqrst"]
        },
        {
            "id": 5,
            "name": "Wedding img",
            "Mainimg": "",
            "subimg1": ["aabb", "ccdd", "eeff", "pqrst"]
        },
        {
            "id": 6,
            "name": "Wedding img",
            "Mainimg": "",
            "subimg1": ["aabb", "ccdd", "eeff", "pqrst"]
        }
    ];

    return (
        <div>
            <h1 className='text-center text-5xl font-bold my-5'>Wedding Event</h1>
            <div className='grid lg:w-11/12 mx-auto w-full lg:grid-cols-4 gap-2 py-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2'>
                {weddingItems.map((item) => (
                    <div key={item.id} className='lg:w-[320px] lg:mx-0 mx-1 border-2 lg:h-[270px] h-[200px] rounded-3xl overflow-hidden'>
                        <Link to={`/wedding/${item.id}`}> {/* Navigate to /wedding/:id */}
                            <img
                                src={item.Mainimg}
                                alt={`Wedding Image ${item.id}`}
                                className='w-full h-full object-cover'
                                style={{ objectPosition: 'center' }}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WeddingEvent;
