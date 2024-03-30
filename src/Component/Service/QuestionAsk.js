import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const QuestionAsk = () => {
    const initialData = [
        { question: 'Can you explain what event production entails, and what services do you offer in this area?', answer: 'Event production involves planning, coordinating, and executing events like parties, concerts, or conferences. We offer services such as planning, vendor coordination, on-site management, and post-event evaluation to make your event successful and stress-free.' },
        { question: 'How will the success of the event be measured?', answer: 'The success of the event can be measured through various metrics such as attendance numbers, guest satisfaction surveys, social media engagement, feedback from stakeholders, achieving set goals and objectives, and return on investment.' },
        { question: 'What level of involvement would you like from our team?', answer: 'The level of involvement from our team can range from full-service planning to day-of coordination, depending on your preferences and needs.' }
    ];

    const [faqData, setFaqData] = useState(initialData.map(item => ({ ...item, isOpen: false })));

    const toggleContent = index => {
        setFaqData(prevState =>
            prevState.map((item, i) => ({
                ...item,
                isOpen: i === index ? !item.isOpen : false // Close other answers
            }))
        );
    };

    return (
        <div>
            <div className='lg:w-11/12 w-full mx-auto flex flex-wrap lg:my-10 my-5 py-10 lg:h-[400px] h-auto items-center'>
                <div className='lg:text-left text-center lg:w-6/12 w-full'>
                    <h1 className='text-xl font-bold text-orange-400 font-Orbitron'>- ServiceFaqs</h1>
                    <h1 className='lg:text-5xl text-2xl font-bold font-Montserrat '>Your Questions, Our Responses</h1>
                </div>
                <div className="w-full lg:w-6/12 mx-auto  my-5 md:mb-0">
                    {faqData.map((item, index) => (
                        <div key={index} className="faq-item">
                            <div className="h-16 text-xl lg:font-bold font-semibold  bg-custom-voilet my-1 text-white flex justify-between items-center px-4 mx-4">
                                <h1 className='font-Onest'>{item.question}</h1>
                                <FontAwesomeIcon className="cursor-pointer" icon={item.isOpen ? faMinus : faPlus} onClick={() => toggleContent(index)} />
                            </div>
                            <div className={`faq-answer ${item.isOpen ? 'open' : ''}`}>
                                <p className="p-6 text-lg font-Montserrat">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuestionAsk;
