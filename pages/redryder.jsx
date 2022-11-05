import Image from 'next/image';
import React from 'react';
import redryderImg from '../public/assets/projects/redryder.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

function redryder() {
  return (
    <div>
      <div className='w-full h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={redryderImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 px-14'>
          <h3 className='py-2'>RedRyder</h3>
          <h4>Next JS / Tailwind / Python</h4>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 px-14'>
        <div className='col-span-4'>
          <p>Project</p>
          <h3>Overview</h3>
          <p>
            This app was built using Next JS and Tailwind. This is a personal
            Website for the content creator RedRyder. We do not own anything
            from this page and are only allowed to display this here for
            support.
          </p>
          <a
            href='https://www.redryder.at'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Website</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next JS
              </p>
              <p className='text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Sandgrid
              </p>
              <p className='text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Python Flask API
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
}

export default redryder;
