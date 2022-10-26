import Image from "next/image";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Presets from "../components/Presets";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Work from "../components/Work";
import React, { useState, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("secShow");
        } else {
          entry.target.classList.remove("secShow");
        }
      });
    });

    const hiddenElement = document.querySelectorAll(".secHidden");
    hiddenElement.forEach((el) => observer.observe(el));
  });
  return (
    <div>
      <Main />
      <Presets />
      <About />
      <Work />
      <Skills />
      <Projects />

      <Contact />
    </div>
  );
}
