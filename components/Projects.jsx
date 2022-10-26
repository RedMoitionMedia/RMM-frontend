import Image from "next/image";
import Link from "next/link";
import React from "react";
import fiveseatsImg from "../public/assets/projects/fiveseats.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-[100px]">
        <p className="text-xl tracking-widest uppercase text-[#e92c2c]">
          Projects
        </p>
        <h3 className="py-4">What I&apos;ve Created</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="FiveSeats"
            backgroundImg={fiveseatsImg}
            projectUrl="/fiveseats"
            tech="Angular JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
