import React from 'react';
import Image from "../../public/Banner.png";

const Banner = () => {
  return (
    <div>
      <>
      <div className='flex max-w-screen-2xl mx-auto md:px-20 px-4 flex-col md:flex-row'>
      <div className='w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1'>
      <div className='space-y-6'>
      <h1 className='text-4xl font-bold mt-8 tracking-wide'>
        Are you fashion enthusiast?
      </h1>
      <p className='text-xl'>
      Fashion is not only limited to clothing or makeup but in a much broader sense includes accessories like shoes, perfume, hairstyle, mannerism, etiquette and attitude towards life. 
      </p>
      </div>
      </div>
      <div className='w-full md:w-1/2 mt-12 md:mt-20 order-1'>
      <img src={Image} alt="" />
      </div>
      </div>
      </>
    </div>
  )
}

export default Banner
