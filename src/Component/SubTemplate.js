import React from 'react'

const SubTemplate = (props) => {
    // const backgroundStyle = {
    //     backgroundImage: `url(${props.img})`,
    // };
    return (
        <div>
            <div className="relative flex items-center justify-center bg-cover bg-red-100 bg-center h-96">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="text-center text-white relative z-10 ">
                    <h1 className="lg:text-5xl md:text-2xl text-xl uppercase font-bold mb-4 font-Oswald">
                        {props.title}
                    </h1>
                </div>
            </div>
        </div>
    )
}
export default SubTemplate
