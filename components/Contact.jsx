import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTwitch,
} from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contact.jpg";

const Contact = () => {
  const [con, setCon] = useState(false);
  const [sucCon, setSucCon] = useState(false);
  const [errorCon, setErrorCon] = useState(false);

  const handleCon = () => {
    setCon(!con);
  };

  const handleConBack = () => {
    setCon(false);
    setSucCon(false);
    setErrorCon(false);
  };

  const handleErrorCon = () => {
    setErrorCon(!errorCon);
  };

  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    console.log(formData);

    await fetch("https://www.redryder.at:5001/api/redryder/sg/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((data) => {
        setCon(true);
        setSucCon(true);
        setErrorCon(false);

        console.log("Success:", data);
      })
      .catch((error) => {
        setCon(true);
        setErrorCon(true);
        setSucCon(false);
        console.error("Error:", error);
      });
  }
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 pt-[100px] w-full ">
        <p className="text-xl tracking-widest uppercase text-[#e92c2c]">
          Contact
        </p>
        <h3 className="py-4">Get In Touch</h3>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl  rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h3 className="py-2">
                  Red<span className="text-[#e92c2c]">Motion</span>Media
                </h3>
                <p>We work to inspire.</p>
                <p className="py-4">
                  We are available for business support or project works.
                  Contact us and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Us</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.instagram.com/redryder.at/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg  p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaInstagram />
                    </div>
                  </a>
                  <a
                    href="https://www.tiktok.com/@redryder.at?lang=de-DE"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg  p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaTiktok />
                    </div>
                  </a>

                  <a href="mailto:office@redryder.at">
                    <div className="rounded-full shadow-lg  p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </a>

                  <Link href="/#contact">
                    <a>
                      <div className="rounded-full shadow-lg  p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div
            id="contact"
            className="col-span-3 w-full h-auto shadow-xl  rounded-xl lg:p-4"
          >
            <div className="p-4">
              <form className={con ? "hidden" : ""} onSubmit={handleOnSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="5"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
              <div className={!con ? "hidden" : `grid place-items-center`}>
                <div className={!sucCon ? "hidden" : `grid place-items-center`}>
                  <div className="text-center">
                    <AiOutlineCheckCircle size={50} color="green" />
                  </div>

                  <div>
                    <h4>Message sent successfully</h4>
                  </div>
                </div>

                <div
                  className={!errorCon ? "hidden" : `grid place-items-center`}
                >
                  <div className="text-center">
                    <AiOutlineCloseCircle size={50} color="red" />
                  </div>

                  <div>
                    <h4>Message failed to send</h4>
                  </div>
                </div>

                <button
                  onClick={handleConBack}
                  className="w-full p-4 text-gray-100 mt-4"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-10">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-lg  p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#e92c2c]"
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
