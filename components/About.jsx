import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Typed from 'react-typed';

import AboutImg from '../public/assets/pics/about.jpg';

function About() {
  return (
    <div
      id='about'
      className='w-full md:h-screen p-2 flex items-center overflow-x-hidden '
    >
      <section className='secHidden2 max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 px-14'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#e92c2c]'>
            About
          </p>
          <h3 className='py-4'>
            <Typed
              strings={[
                'Who are we?',
                "We're Red<span style='color:#e92c2c'>Motion</span>Media",
              ]}
              typeSpeed={40}
              startDelay={500}
              backSpeed={50}
              backDelay={10000}
              loop
            />
          </h3>
          <p className='py-2 '>&#8427; We are working to inspire people.</p>
          <p className='py-2 '>
            Hi, we&apos;re Red<span className='text-[#e92c2c]'>Motion</span>
            Media. My real Name is Marcel. A young team to realise every dream.
          </p>
          <p className='py-2 '>
            If you need somebody to build your online shop or support you with
            your marketing. Or if you just need a fancy future proof website we
            are the one to go with.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer hover:text-gray-400'>
              Check out some of our latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl  rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image
            className='rounded-xl'
            src={AboutImg}
            alt='/'
            width='640px'
            height='800px'
          ></Image>
        </div>
      </section>
    </div>
  );
}

export default About;
