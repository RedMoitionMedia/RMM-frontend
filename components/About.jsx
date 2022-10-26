import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Typed from "react-typed";

import AboutImg from "../public/assets/pics/about.jpg";

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center">
      <section className="secHidden max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#e92c2c]">
            About
          </p>
          <h3 className="py-4">
            <Typed
              strings={[
                "Who are we?",
                "We're Red<span style='color:#e92c2c'>Motion</span>Media",
              ]}
              typeSpeed={40}
              startDelay={500}
              backSpeed={50}
              backDelay={10000}
              loop
            />
          </h3>
          <p className="py-2 ">&#8427; I am not a normal content creator</p>
          <p className="py-2 ">
            Hi, I&apos;m <span className="text-[#e92c2c]">Red</span>Ryder. My
            real Name is Marcel. I am a 20 year old content creator on multiple
            platforms. Maybe you know me from Instagram or TikTok. In addition
            to my daily excessive use of sociale media I am a quite good web
            developer too. I have always had a knack for technology and working
            with computers. In 2017 I started working with HTML and CSS due to
            my school of course. But what I thought was just a few small edits
            turned into a love for programming and the urge to go with the time
            of technologies.
          </p>
          <p className="py-2 ">
            So it turnes out the thesis was the first big step towards real web
            development. In addition to Angular and Next.js, I also had to learn
            about the three-tier architecture. But that was relativly easy for
            me and so in 2022 I graduated from school and worked on various
            projects.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer hover:text-gray-400">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl  rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src={AboutImg}
            alt="/"
            width="640px"
            height="800px"
          ></Image>
        </div>
      </section>
    </div>
  );
}

export default About;
