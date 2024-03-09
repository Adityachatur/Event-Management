import React from 'react';

const CompanyClientimpress = () => {
  return (
    <div>
      <div className="overflow-hidden h-[250px] w-full">
        <div className='text-center'>
          <h1 className='text-xl md:text-2xl lg:text-xl font-semibold p-4 text-orange-400'> - Our Client</h1>
          <h1 className='text-2xl md:text-3xl lg:text-5xl p-4 font-bold'>Clients We Have Impressed</h1>
        </div>
        <div className=" p-4 h-32">
          <marquee behavior="" direction="left">
            <div className='flex space-x-5 text-3xl'>
              <div>ADitya</div>
              <div>chatur</div>
              <div>Anil</div>
            </div>
          </marquee>
        </div>
      </div>
    </div>
  );
}

export default CompanyClientimpress;
