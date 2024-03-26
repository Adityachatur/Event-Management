import React from 'react';

const SubTemplate = (props) => {
    const videoStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: '-1',
        top: 0,
        left: 0,
    };

    return (
        <div className="relative" style={{ width: '100%', height: '350px' }}>
            <video src={props.video} autoPlay loop muted style={videoStyle}></video>
            <div className="flex items-center justify-center bg-cover bg-center h-full relative z-10">
                <div className="absolute inset-0 bg-black opacity-40 "></div>
                <div className="text-center text-white z-30">
                    <h1 className="lg:text-5xl md:text-2xl text-xl uppercase font-bold mb-4 font-Montserrat">
                        {props.title}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default SubTemplate;
