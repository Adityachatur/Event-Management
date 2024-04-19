import React from 'react';

const Card = (props) => {
    return (
        <div>
            <div className=' relative lg:w-[320] lg:mx-0 mx-1 border-2 h-[270px] rounded-xl overflow-hidden  transition-transform duration-300 transform hover:-translate-y-3' data-aos="zoom-in" data-aos-duration="3000">
                <img
                    src={props.img}
                    alt=""
                    className='w-full h-full object-cover'
                    style={{ objectPosition: 'center' }}
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black  opacity-0 transition-opacity duration-300 hover:opacity-70">
                    <p className="text-white text-center lg:text-2xl text-lg  font-bold">{props.title}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
