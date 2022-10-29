import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

import NavLogoImg from "../public/assets/navLogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    let backgroundTransparacyVar = 0;
    if (clientWindowHeight >= 1000) {
      backgroundTransparacyVar = 1;
    } else {
      backgroundTransparacyVar = clientWindowHeight / 1000;
    }
    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.2;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 1000) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const onMouseClick = (e) => {
    if (e.target.id == "dropout") {
      setNav(false);
    }
  };

  return (
    <div
      className={
        shadow
          ? `fixed w-full h-50 shadow-xl bg-[#313131]/100 z-[100]`
          : `fixed w-full h-50 z-[100]`
      }
    >
      <div
        style={{
          background: `rgba(49, 49, 49, ${backgroundTransparacy})`,
          padding: `10px 0px`,
          boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        }}
      >
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 cursor-pointer">
          <Link href="/">
            <Image src={NavLogoImg} alt="/" width="175" height="70" />
          </Link>
          <div>
            <ul className="hidden md:flex">
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
              </Link>
              <Link href="/#presets">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Presets
                </li>
              </Link>
              <Link href="/#about">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  About
                </li>
              </Link>
              <Link href="/#work">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  My Work
                </li>
              </Link>
              <Link href="/#skills">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Contact
                </li>
              </Link>
              <Link href="/loginPage">
                <li
                  id="navLoginLink"
                  className="ml-10 text-sm uppercase hover:border-b"
                >
                  Login
                </li>
              </Link>
              <Link href="https://nextcloud.redryder.at">
                <li
                  id="navCloudLink"
                  className="ml-10 text-sm uppercase hover:border-b"
                  style={{ display: "none" }}
                >
                  Cloud
                </li>
              </Link>
            </ul>
            <div onClick={handleNav} className="cursor-pointer md:hidden">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>

        <div
          id="dropout"
          onMouseDown={onMouseClick}
          onTouchStart={onMouseClick}
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          <div
            id="dropin"
            className={
              nav
                ? "fixed h-screen left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-[#313131] p-5 ease-in duration-500 py-4 flex flex-col"
                : "fixed h-screen left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-[#313131] p-5 ease-in duration-500 py-4 flex flex-col" //"fixed left-[-100%] top-0 p-5 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href="/">
                  <Image
                    onClick={() => setNav(false)}
                    src={NavLogoImg}
                    width="70"
                    height="70"
                    alt="/"
                  />
                </Link>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">
                  Let&apos;s inspire people
                </p>
              </div>
            </div>
            <div>
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Home
                  </li>
                </Link>
                <Link href="/#presets">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Presets
                  </li>
                </Link>
                <Link href="/#about">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    About
                  </li>
                </Link>
                <Link href="/#work">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    My Work
                  </li>
                </Link>
                <Link href="/#skills">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Skills
                  </li>
                </Link>
                <Link href="/#projects">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Projects
                  </li>
                </Link>
                <Link href="/#contact">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
            <div className="mt-auto">
              <p className="uppercase tracking-widest text-[#e92c2c]">
                Let&apos;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.instagram.com/redryder.at/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaInstagram />
                  </div>
                </a>
                <a
                  href="https://www.tiktok.com/@redryder.at?lang=de-DE"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaTiktok />
                  </div>
                </a>
                <a href="mailto:office@redryder.at">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(false)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
