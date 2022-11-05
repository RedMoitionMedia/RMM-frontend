import Image from 'next/image';
import React from 'react';
import Typed from 'react-typed';

const ServiceItem = ({
  backgroundImg,
  typeText,
  side,
  section1,
  section2,
  section3,
}) => {
  return (
    <section
      className={
        side == 'rigth'
          ? 'secHidden2 max-w-[1240px] md:grid grid-cols-3 gap-8 px-10'
          : 'secHidden max-w-[1240px] md:grid grid-cols-3 gap-8 pr-14'
      }
    >
      <div
        className={
          side == 'left'
            ? 'w-[300px] h-auto m-auto shadow-xl  rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'
            : 'hidden'
        }
      >
        <Image
          className='rounded-xl'
          src={backgroundImg}
          alt='/'
          objectFit='fill'
        ></Image>
      </div>
      <div className='col-span-2'>
        <h3 className='py-4'>
          <Typed
            strings={[typeText]}
            typeSpeed={40}
            startDelay={500}
          />
        </h3>
        <div className='py-2 '>{section1}</div>
        <div className='py-2 '>{section2}</div>
        <div className='py-2 '>{section3}</div>
      </div>
      <div
        className={
          side == 'rigth'
            ? 'w-[300px] h-auto m-auto shadow-xl  rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'
            : 'hidden'
        }
      >
        <Image
          className='rounded-xl'
          src={backgroundImg}
          alt='/'
          objectFit='fill'
        ></Image>
      </div>
    </section>
  );
};

export default ServiceItem;
