import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { BsFillPersonLinesFill, BsArrowsExpand } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import useMouse from "@react-hook/mouse-position";

import AfterRightImg from "../public/assets/pics/before-after/after-right.jpg";
import BeforeLeftImg from "../public/assets/pics/before-after/before-left.jpg";

function Presets() {
  const [clientMouseX, setClientMouseX] = useState("");
  const [click, setClick] = useState(false);

  const onMouseClick = () => {
    setClick(!click);
  };

  const MouseUp = () => {
    setClick(false);
  };

  const onMouseMove = (e) => {
    if (click) {
      if (e.changedTouches) {
        let rect = e.currentTarget.getBoundingClientRect();
        let x = e.changedTouches[0].clientX - rect.left;
        let y = e.changedTouches[0].clientY - rect.top;
        setClientMouseX(x);
      } else {
        let rect = e.currentTarget.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        setClientMouseX(x);
      }
    }
  };

  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  const [backgroundSpeed, setBackgroundSpeed] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    let width = window.innerWidth;
    let res = (1920 / width - 1) * 250;
    setWindowWidth(res);
    let speed = 1000 - clientWindowHeight;
    setBackgroundSpeed(0); //change to (speed / 2) to make it automation
  }, [clientWindowHeight]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    if (!click && clientMouseX == "") {
      setClientMouseX(window.innerWidth / 2);
    }
  });

  return (
    <div
      id="presets"
      onTouchMove={onMouseMove}
      onMouseMove={onMouseMove}
      onMouseUp={MouseUp}
      style={{
        position: "relative",
        clipPath: "inset(0 0 0 0)",
        userSelect: "none",
      }}
      className="h-screen sm:h-screen"
    >
      <div
        style={{
          position: "fixed",
          width: `100%`,
          top: `${backgroundSpeed}px`,
        }}
        className="h-screen sm:h-screen sm:left-0"
      >
        <Image
          src={AfterRightImg}
          layout="fill"
          objectFit="cover"
          objectPosition={`-${windowWidth}px 0`}
          draggable="false"
        />

        <div
          id="start"
          style={{
            position: "fixed",
            width: `${clientMouseX}px`,
          }}
          className="border-r-2 border-[#e92c2c] h-screen sm:h-screen sm:left-0"
        >
          <Image
            src={BeforeLeftImg}
            layout="fill"
            objectFit="cover"
            objectPosition={`-${windowWidth}px 0`}
            draggable="false"
            className="object-[-100px]"
          />
        </div>

        <div
          className={`relative flex items-center top-[500px] sm:top-[500px]`}
          style={{
            left: `${clientMouseX - 22}px`,
          }}
        >
          <div
            onTouchStart={onMouseClick}
            onTouchEnd={MouseUp}
            onMouseDown={onMouseClick}
            onMouseUp={MouseUp}
            className=" bg-[#ecf0f3] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer rotate-90"
            objectPosition="0 0"
          >
            <BsArrowsExpand />
          </div>
        </div>
      </div>

      <div className="absolute md:h-sm p-2 flex items-center pt-16">
        <div className="max-w-xl ml-5 mt-10 md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="uppercase text-xl tracking-widest text-[#e92c2c]">
              Presets
            </p>
            <h3 className="py-4 text-gray-100">Changes by one click</h3>
            <p className="py-2 text-gray-100">
              &#8427; Presets that blow your mind
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presets;
