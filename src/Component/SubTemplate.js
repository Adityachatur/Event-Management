import React, { useState, useEffect } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const SubTemplate = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 2000));
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const videoStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: '-1',
        top: 0,
        left: 0,
        visibility: loading ? 'hidden' : 'visible',
    };

    return (
        <div className="relative" style={{ width: '100%', height: '350px' }}>
            {loading ? (
                <div className="absolute flex items-center justify-center w-full h-full">
                    <InfinitySpin height={40} color='black' />
                </div>
            ) : (

                <video src={props.video} autoPlay loop muted style={videoStyle}></video>
            )}
            <div className="flex items-center justify-center bg-cover bg-center h-full relative z-10">
                <div className="absolute inset-0 bg-black opacity-40 "></div>
                <div className="text-center text-white z-30">
                    <h1 className="lg:text-5xl md:text-2xl text-xl uppercase font-bold mb-4 font-poppins">
                        {props.title}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default SubTemplate;
