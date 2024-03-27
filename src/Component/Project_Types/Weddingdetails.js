// Weddingdetails.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { weddingItems } from './data'; // Assuming your data file is named 'data.js'

const Weddingdetails = () => {
    const { id } = useParams();
    const selectedItem = weddingItems.find(item => item.id === parseInt(id));

    const [mainImage, setMainImage] = useState(selectedItem.Mainimg);
    const handleSubImageClick = (subImg) => {
        setMainImage(subImg);
    };

    return (
        <div>
            {selectedItem && (
                <div>
                    <h2 className='text-center text-3xl font-bold my-5'>Wedding Details</h2>
                    {mainImage && (
                        <div className='w-full mx-auto max-w-screen-xl rounded-lg'>
                            <img
                                src={mainImage}
                                alt={`Wedding Image ${selectedItem && selectedItem.id}`}
                                className='w-full h-auto max-h-[400px] border-2 rounded-lg lg:mx-auto p-1'
                            />
                        </div>
                    )}

                    {selectedItem.subimg1 && (
                        <div className="grid lg:w-11/12 mx-auto w-full lg:grid-cols-4 gap-2 py-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2">
                            {selectedItem.subimg1.map((sub, index) => (
                                <div key={index} className="lg:w-[300px]  lg:mx-0 mx-1 border-2 lg:h-[270px] h-[200px] rounded-lg  overflow-hiddenn">
                                    <img
                                        src={sub}
                                        alt={`Sub Image ${index}`}
                                        className='w-full h-full object-cover rounded-lg cursor-pointer'
                                        style={{ objectPosition: 'center' }}
                                        onClick={() => handleSubImageClick(sub)}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Weddingdetails;
