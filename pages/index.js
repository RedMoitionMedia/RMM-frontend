import Image from "next/image";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Presets from "../components/Presets";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Work from "../components/Work";

export default function Home() {
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
