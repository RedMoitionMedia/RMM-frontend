import Image from "next/image";
import React from "react";
import carImg from "../public/assets/projects/fiveseats.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function fiveseats() {
  return (
    <div>
      <div className="w-full h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={carImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h3 className="py-2">FiveSeats</h3>
          <h4>Angualr JS / Bootstrap / Python</h4>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h3>Overview</h3>
          <p>
            This app was built using Angular JS and is hosted on Firebase. Users
            are able to set routes and search for possible rides based on there
            location. You will be able to save a route and attend a ride of
            another user. The driver is also servied with an navigation system
            after he started his navigation. We use OSM and Mapbox for visual
            illustration and ORS for calculating the duration and direction
            informations. User authentication and authorization are two
            important issues in this project. So you can signup and signin to
            your account with an email address or with your Google-Account to
            save or attend a ride. This is made possible with Google API and our
            own Python Flask API.
          </p>
          <a
            href="https://github.com/FiveSeats"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://fiveseats.redryder.at"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Angular
              </p>
              <p className="text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Bootstrap
              </p>
              <p className="text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Mapbox
              </p>
              <p className="text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Python Flask API
              </p>
              <p className="text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Google API
              </p>
              <p className="text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> OSM API
              </p>
              <p className="text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ORS API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default fiveseats;
