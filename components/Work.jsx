import React, { useState, useEffect } from "react";
import workImg1 from "../public/assets/pics/work/work1.jpg";
import workImg2 from "../public/assets/pics/work/work2.jpg";
import workImg3 from "../public/assets/pics/work/work3.jpg";
import workImg4 from "../public/assets/pics/work/work4.jpg";
import workImg5 from "../public/assets/pics/work/work5.jpg";
import workImg6 from "../public/assets/pics/work/work6.jpg";
import workImg7 from "../public/assets/pics/work/work7.jpg";
import workImg8 from "../public/assets/pics/work/work8.jpg";
import InstaItem from "./Instaitem";

function Work() {
  const [clientMouseX, setClientMouseX] = useState("");
  const [click, setClick] = useState(false);

  const onMouseClick = () => {
    setClick(!click);
  };

  const onMouseMove = (e) => {
    if (click) {
      let rect = e.currentTarget.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;

      setClientMouseX(x);
    }
  };

  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  const [backgroundSpeed, setBackgroundSpeed] = useState(0);

  useEffect(() => {
    let speed;
    if (window.innerWidth < 768) {
      speed = 2700 - clientWindowHeight;
    } else if (window.innerWidth > 768 && window.innerWidth < 1000) {
      speed = 5000 - clientWindowHeight;
    } else if (window.innerWidth > 1000 && window.innerWidth < 1500) {
      speed = 3800 - clientWindowHeight;
    } else {
      speed = 3000 - clientWindowHeight;
    }
    let divi = (1080 / window.innerHeight) * 10;

    setBackgroundSpeed(speed / divi);
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
      id="work"
      onMouseMove={onMouseMove}
      style={{
        position: "relative",
        clipPath: "inset(0 0 0 0)",
      }}
      className="h-[100vh] md:h-[50vh] lg:h-[100vh] "
    >
      <div
        style={{
          position: "fixed",
          height: "100%",
          width: `100%`,
          left: 0,
          top: `${backgroundSpeed}px`,
        }}
      >
        <div className="w-full">
          <div className="max-w-full">
            <div className="grid md:grid-cols-4 gap-0">
              <InstaItem
                backgroundImg={workImg1}
                instaUrl="https://www.instagram.com/p/CiU8cHlofxv/?utm_source=ig_web_copy_link"
              />
              <InstaItem
                backgroundImg={workImg2}
                instaUrl="https://www.instagram.com/p/CiQNPMeIIW5/?utm_source=ig_web_copy_link"
              />
              <InstaItem
                backgroundImg={workImg3}
                instaUrl="https://www.instagram.com/p/CiLdjyLLJWS/?utm_source=ig_web_copy_link"
              />
              <InstaItem
                backgroundImg={workImg4}
                instaUrl="https://www.instagram.com/p/CfyTCPErKXp/?utm_source=ig_web_copy_link"
              />
              <InstaItem
                backgroundImg={workImg5}
                instaUrl="https://www.instagram.com/p/CfoScSIITDR/?utm_source=ig_web_copy_link"
              />
              <InstaItem
                backgroundImg={workImg6}
                instaUrl="https://www.instagram.com/p/CfRviSdLgxS/?utm_source=ig_web_copy_link"
              />
              <InstaItem
                backgroundImg={workImg7}
                instaUrl="https://www.instagram.com/p/CfJSrlfrbij/?utm_source=ig_web_copy_link"
              />
              <InstaItem
                backgroundImg={workImg8}
                instaUrl="https://www.instagram.com/p/Ce-2XfJrVYX/?utm_source=ig_web_copy_link"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute md:h-sm p-2 flex items-center pt-16">
        <div className="max-w-xl ml-5 mt-10 md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="uppercase text-xl tracking-widest text-[#e92c2c]">
              Work
            </p>
            <h3 className="py-4 text-gray-100">My Work</h3>
            <p className="py-2 text-gray-100">
              &#8427; Working to inspire people
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
