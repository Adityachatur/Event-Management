import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const QuestionAsk = () => {
    const initialData = [
        { question: 'Choose Between rates or instant payment', answer: 'Motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci consectetur vel posuere posuere, rutrum eu ipsum. Cost is important.' },
        { question: 'Come to see a live preview', answer: 'Inspirational quotes have an amazing ability to motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success.' },
        { question: 'Choose the correct service', answer: 'The leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.' }
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
                    <h1 className='text-xl font-bold text-orange-400'>-ServiceFaqs</h1>
                    <h1 className='lg:text-5xl text-2xl font-bold '>Your Questions, Our Responses</h1>
                </div>
                <div className="w-full lg:w-6/12 mx-auto  my-5 md:mb-0">
                    {faqData.map((item, index) => (
                        <div key={index} className="faq-item">
                            <div className="h-16 text-xl lg:font-bold font-semibold  bg-custom-voilet my-1 text-white flex justify-between items-center px-4 mx-4">
                                <h1>{item.question}</h1>
                                <FontAwesomeIcon className="cursor-pointer" icon={item.isOpen ? faMinus : faPlus} onClick={() => toggleContent(index)} />
                            </div>
                            <div className={`faq-answer ${item.isOpen ? 'open' : ''}`}>
                                <p className="p-6 text-lg">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuestionAsk;
