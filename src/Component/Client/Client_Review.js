import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import trainer1 from '../images/clientreview1.jpeg'
import trainer2 from '../images/Gallery10.jpg';
import trainer4 from '../images/Home2.jpg';

const Client_Review = () => {
    const cardData = [
        { imageUrl: trainer1, name: 'Priti kad', description: 'Hello Saurabh, thank you so much for the decoration. It was greatly appreciated. Pappa really enjoyed our day, it became even more special because of your efforts and your teams. Once again, thank you!', stars: 5 },
        { imageUrl: trainer2, name: 'Supriya Jawale', description: 'Hii Saurabh, I wanted to thank you for the excellent decoration and arrangements. Everything was flawless, and there were no complaints. The grooms side guests also appreciated the event organization. Your teams professionalism and attention to detail were exceptional.', stars: 4 },
        { imageUrl: trainer4, name: 'Mr. Mahale', description: "Thanks, Saurbh. Your team did a great job with all the arrangements, and they followed our requests perfectly. Id like to add a few points for review. Overall, everything went smoothly, and Im happy with the service", stars: 4 }
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
            <div className="lg:pt-10 pt-5">
                <h1 className='text-center lg:text-6xl text-3xl font-bold m-10  font-Orbitron'>Client Review</h1>
            </div>

            <div className='w-9/12  mx-auto'>
                <Slider {...settings}>
                    {cardData.map((item, index) => (
                        <div key={index} className="text-center rounded-lg p-4">
                            <img src={item.imageUrl} alt={`Team Member ${index + 1}`} className="w-2/3 mx-auto mb-4 rounded-lg" style={{ maxHeight: '100px' }} />
                            <p className="text-justify font-semibold text-black lg:p-7 lg:h-[200px]  mx-auto">{item.description}</p>
                            <h3 className="text-2xl font-semibold text-black text-right mr-4 mt-5 font-Roboto Slab">{item.name}</h3>
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
