// ImageModal.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ImageModal = ({ imageUrl, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-1 rounded-lg relative">
                <button className="absolute top-0 right-0 m-4 text-white" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} className='h-7 w-6 hover:bg-yellow-400 hover:p-3 rounded-full transform duration-300' />
                </button>
                <img src={imageUrl} alt="modal" className="lg:w-[800px] lg:h-[800px] sm:max-w-[400px] sm:max-h-[300px] md:max-w-[600px] md:max-h-[450px] w-full h-96" />
            </div>
        </div>
    );
};

export default ImageModal;
