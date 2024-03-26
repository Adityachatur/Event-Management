import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import trainer1 from '../images/clientreview1.jpeg'
import trainer2 from '../images/download (2).jpg';
import trainer4 from '../images/download (3).jpg';

const Client_Review = () => {
    const cardData = [
        { imageUrl: trainer1, name: 'Priti kad', description: 'Hello Saurabh, thank you so much for the decoration. It was greatly appreciated. Pappa really enjoyed our day, it became even more special because of your efforts and your teams. Once again, thank you!', stars: 5 },
        { imageUrl: trainer2, name: 'Supriya Jawale', description: 'Hii Saurabh, I wanted to thank you for the excellent decoration and arrangements. Everything was flawless, and there were no complaints. The grooms side guests also appreciated the event organization. Your teams professionalism and attention to detail were exceptional. Thank you for making our event memorable.', stars: 4 },
        { imageUrl: trainer4, name: 'Client Name 3', description: 'Nutrition Specialist', stars: 3 },
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
                <h1 className='text-center lg:text-6xl text-3xl font-bold m-10  font-Orbitron'>Client Review</h1>
            </div>

            <div className='w-9/12  mx-auto'>
                <Slider {...settings}>
                    {cardData.map((item, index) => (
                        <div key={index} className="text-center rounded-lg p-4">
                            <img src={item.imageUrl} alt={`Team Member ${index + 1}`} className="w-2/3 mx-auto mb-4 rounded-lg" style={{ maxHeight: '140px' }} />
                            <p className="text-lg font-semibold text-black lg:p-7">{item.description}</p>
                            <h3 className="text-2xl font-semibold text-black text-right mr-4 font-Roboto Slab">{item.name}</h3>
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
