import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);
  const [windowHeight, setWindowHeight] = useState(0);
  const [checkBox, setCheckBox] = useState(false);

  const handleScroll = () => {
    let heigth = (1080 / window.innerHeight - 1) * 500;
    setWindowHeight(heigth);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    if (formData.checkbox == "true") {
      if (formData.email != "") {
        await fetch(
          "https://www.redryder.at:5001/api/redryder/newsletter/subscribe",
          {
            method: "POST",
            body: JSON.stringify(formData),
          }
        )
          .then((data) => {
            setState("SUCCESS");

            console.log("Success:", data);
          })
          .catch((error) => {
            setErrorMessage(error.response);
            setState("ERROR");
            console.error("Error:", error);
          });
      } else {
        setErrorMessage("Email is empty!");
        setState("ERROR");
      }
    } else {
      setErrorMessage("Please accept the terms!");
      setState("ERROR");
    }
  }

  return (
    <div
      className="w-full pt-auto
      "
      style={{
        boxShadow: "0px -20px 20px 5px rgba(1, 1, 1, 0.03)",
      }}
    >
      <div className="max-w-[1240px] m-auto w-full">
        <div className="flex flex-col">
          <div className="flex flex-col justify-between pt-10 gap-10 md:flex-row xl:gap-20">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
              className="gap-1"
            >
              <Link href="/Impressum">
                <a className="sticky w-auto ml-10 text-sm uppercase hover:border-b-2 hover:mb-[-2px]">
                  Impressum
                </a>
              </Link>
              <Link href="/PrivacyPolicy">
                <a className="sticky w-auto ml-10 text-sm uppercase hover:border-b-2 hover:mb-[-2px]">
                  Privacy Policy
                </a>
              </Link>
              <Link href="/#contact">
                <a className="sticky w-auto ml-10 text-sm uppercase hover:border-b-2 hover:mb-[-2px]">
                  Contact
                </a>
              </Link>
            </div>
            <form></form>

            <form onSubmit={handleOnSubmit}>
              <div className="h-full grid gap-5 mx-10 md:mx-0">
                <div className="h-full grid gap-5 max-w-xl">
                  <h4>Enter your Email to not miss out on anything</h4>
                  <input
                    className="border-2 rounded-lg p-3 border-gray-300 sm:w-[425px]"
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="text-xs">
                    Enter your Email-adresse in the field above. For instance
                    abc@xyz.com.
                  </p>
                  <div>
                    <input
                      id="checkbox"
                      type="checkbox"
                      name="checkbox"
                      value={checkBox}
                      onChange={(e) => setCheckBox(e.target.checked)}
                    />
                    <label className="ml-2">
                      I accept the terms of the{" "}
                      <Link href="/PrivacyPolicy">
                        <a className="hover:border-b-2 hover:mb-[-2px]">
                          Privacy Policy
                        </a>
                      </Link>
                      .
                    </label>
                  </div>
                  <p className="text-xs">
                    You can always unsubscribe under the link in every
                    Newsletter.
                  </p>
                </div>
                <div className="w-full grid ">
                  <div className="flex gap-4">
                    <button
                      className={`p-2 text-gray-100 text-base sm:px-10 sm:text-lg ${
                        state === "LOADING" ? "button-gradient-loading" : ""
                      }`}
                      disabled={state === "LOADING"}
                    >
                      Subscribe
                    </button>
                  </div>
                  {state === "ERROR" && (
                    <p className="w-1/2 mt-2 text-red-600">{errorMessage}</p>
                  )}
                  {state === "SUCCESS" && (
                    <p className="w-1/2 mt-2 text-green-600">Success!</p>
                  )}
                </div>
              </div>
            </form>
            <div className="flex ml-10 md:ml-auto md:mr-5 gap-2">
              <div>
                <a
                  href="https://www.instagram.com/redmotionmedia_/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-xl  p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaInstagram />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="ml-5 md:ml-0 p-5 text-xs">
            <p>RedMotionMedia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
