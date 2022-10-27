import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typed from "react-typed";
import AboutImg from "../public/assets/pics/about.jpg";

const ServiceItem = ({
  title,
  backgroundImg,
  projectUrl,
  tech,
  typeText,
  side,
  text,
}) => {
  return (
    <section
      className={
        side == "rigth"
          ? "secHidden2 max-w-[1240px] m-auto md:grid grid-cols-3 gap-8"
          : "secHidden max-w-[1240px] m-auto md:grid grid-cols-3 gap-8"
      }
    >
      <div
        className={
          side == "left"
            ? "w-full h-auto m-auto shadow-xl  rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"
            : "hidden"
        }
      >
        <Image
          className="rounded-xl"
          src={backgroundImg}
          alt="/"
          width="640px"
          height="800px"
        ></Image>
      </div>
      <div className="col-span-2">
        <p className="uppercase text-xl tracking-widest text-[#e92c2c]">
          {title}
        </p>
        <h3 className="py-4">
          <Typed strings={[typeText]} typeSpeed={40} startDelay={500} />
        </h3>
        <p className="py-2 ">{text}</p>
      </div>
      <div
        className={
          side == "rigth"
            ? "w-full h-auto m-auto shadow-xl  rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"
            : "hidden"
        }
      >
        <Image
          className="rounded-xl"
          src={backgroundImg}
          alt="/"
          width="640px"
          height="800px"
        ></Image>
      </div>
    </section>
  );
};

export default ServiceItem;
