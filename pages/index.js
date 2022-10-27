import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import React, { useState, useEffect } from "react";
import Services from "../components/Services";

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

    const hiddenElement2 = document.querySelectorAll(".secHidden2");
    hiddenElement2.forEach((el) => observer.observe(el));
  });
  return (
    <div>
      <Main />
      <About />
      <Services />
      <Projects />

      <Contact />
    </div>
  );
}
