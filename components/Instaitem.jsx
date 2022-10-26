import Image from "next/image";
import Link from "next/link";
import React from "react";

const InstaItem = ({ title, backgroundImg, instaUrl, tech }) => {
  return (
    <a href={instaUrl} target="_blank" rel="noreferrer">
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 group">
        <Image
          className="scale-100 group-hover:scale-110 ease-in duration-500"
          src={backgroundImg}
          alt="/"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h4 className="text-2xl text-white tracking-wider text-center">
            {title}
          </h4>
          <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        </div>
      </div>
    </a>
  );
};

export default InstaItem;
