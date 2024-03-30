import React from 'react';

import img2 from '../images/sigmalogo.png';
import img3 from '../images/hyundailogo.png';
import img4 from '../images/ultralogo.png';


const CompanyClientimpress = () => {
  return (
    <div>
      <div className="overflow-hidden h-[250px] w-full">
        <div className='text-center mt-10'>
          <h1 className='text-xl md:text-2xl lg:text-xl font-semibold px-4 pb-2 text-orange-400 font-Orbitron'> - Our Client</h1>
          <h1 className='text-2xl md:text-3xl lg:text-5xl px-4 font-bold font-Montserrat'>Clients We Have Impressed</h1>
        </div>
        <div className=" p-4 h-32">
          <marquee behavior="scroll" scrollamount="10" direction="left">
            <div className='flex space-x-5 text-2xl h-44  company-logo'>
              <img src={img2} alt="" />
              <img src={img3} alt="" className='mix-blend-multiply' />
              <img src={img4} alt="" />
            </div>
          </marquee>
        </div>
      </div>
    </div>
  );
}

export default CompanyClientimpress;
