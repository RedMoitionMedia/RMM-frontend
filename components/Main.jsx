import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import Typed from "react-typed";

import StartImg from "../public/assets/start.jpg";

const Main = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  const [backgroundSpeed, setBackgroundSpeed] = useState(0);

  useEffect(() => {
    let speed = 1 - clientWindowHeight / 2;
    setBackgroundSpeed(0); //change to (speed - 1) to make it automation
    document.getElementById("start").style.top = clientWindowHeight;
  }, [clientWindowHeight]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        clipPath: "inset(0 0 0 0)",
      }}
    >
      <div
        id="start"
        style={{
          position: "fixed",
          width: "100%",
          left: 0,
          top: `${backgroundSpeed}px`,
        }}
        className="h-screen sm:h-screen bg-[#313131]"
      ></div>

      <div id="home" className="w-full h-screen text-center z-auto">
        <div className="relative max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
          <div>
            <p className="uppercase text-sm tracking-widest text-gray-100">
              Let&apos;s inspire people
            </p>
            <h2 className="py-4 text-gray-100">
              <Typed
                strings={[
                  "This is <span style='color:#e92c2c'>Art</span>",
                  "This is Web<span style='color:#e92c2c'>design</span>",
                  "This is <span style='color:#e92c2c'>Marketing</span>",
                  "This is Red<span style='color:#e92c2c'>Motion</span>Media",
                ]}
                typeSpeed={40}
                startDelay={500}
                backSpeed={50}
                backDelay={1000}
                contentType="html"
              />
            </h2>

            <p className="py-4 text-gray-200 max-w-[70%] m-auto">
              Are you searching for a webdesigning or marketing companies. We
              are the one to go with. We make marketing that actually works.
            </p>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              <a
                href="https://www.instagram.com/redmotionmedia_/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-xl bg-[#3d3d3d] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaInstagram />
                </div>
              </a>
              <a href="mailto:office@redryder.at">
                <div className="rounded-full shadow-xl bg-[#3d3d3d] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail />
                </div>
              </a>
              <Link href="/#contact">
                <div className="rounded-full shadow-xl bg-[#3d3d3d]  p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
