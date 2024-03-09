import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import trainer1 from '../images/download (1).jpg';
import trainer2 from '../images/download (2).jpg';
import trainer4 from '../images/download (3).jpg';
import trainer5 from '../images/company-logo.jpg';
import trainer7 from '../images/download.jpg';

const Client_Review = () => {
    const cardData = [
        { imageUrl: trainer1, name: 'Client Name 1', description: 'Client reviews and client check-ins provide the feedback you need and offer essential information to keep your relationship working well. With a client review, you s working, the current status, and upcoming plans and strategies', stars: 4 },
        { imageUrl: trainer2, name: 'Client Name 2', description: 'Certified Fitness Instructor', stars: 4 },
        { imageUrl: trainer4, name: 'Client Name 3', description: 'Nutrition Specialist', stars: 3 },
        { imageUrl: trainer5, name: 'Client Name 4', description: 'Personal Fitness Coach', stars: 4 },
        { imageUrl: trainer7, name: 'Client Name 5', description: 'Professional Bodybuilder', stars: 5 },
        // Add more image URLs, names, descriptions, and stars as needed
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='my-16 lg:mx-12 client-review'>
            <div className="pt-10">
                <h1 className='text-center lg:text-6xl text-3xl font-bold m-10'>Client Review</h1>
            </div>

            <div className='w-10/12 mx-auto'>
                <Slider {...settings}>
                    {cardData.map((item, index) => (
                        <div key={index} className="text-center border-2 bg-red-100 rounded-lg p-4">
                            <img src={item.imageUrl} alt={`Team Member ${index + 1}`} className="w-2/3 mx-auto mb-4 rounded-lg" style={{ maxHeight: '140px' }} />
                            <p className="text-lg font-semibold text-black">{item.description}</p>
                            <h3 className="text-2xl font-semibold text-black text-right ">{item.name}</h3>
                            <div className="text-yellow-400 text-3xl text-right">
                                {"★".repeat(item.stars)}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Client_Review;
