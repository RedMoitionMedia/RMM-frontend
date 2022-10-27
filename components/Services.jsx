import Image from "next/image";
import React from "react";

import PhotographyImg from "../public/assets/skills/photography.png";
import EditingImg from "../public/assets/skills/editing.png";
import ManagingImg from "../public/assets/skills/managing.png";
import ShopifyImg from "../public/assets/skills/shopify.png";
import HtmlImg from "../public/assets/skills/html.png";
import CssImg from "../public/assets/skills/css.png";
import JavascriptImg from "../public/assets/skills/javascript.png";
import AngularImg from "../public/assets/skills/angular.png";
import TailwindImg from "../public/assets/skills/tailwind.png";
import NextjsImg from "../public/assets/skills/nextjs.png";
import PythonImg from "../public/assets/skills/python.png";
import JavaImg from "../public/assets/skills/java.png";
import ServiceItem from "./ServiceItem";
import MarketingImg from "../public/assets/services/marketing.jpg";
import SocialMediaImg from "../public/assets/services/social-media.jpg";
import VideographyImg from "../public/assets/services/videography.jpg";
import WebdesignImg from "../public/assets/services/webdesign.jpg";

function Services() {
  return (
    <div id="services" className="w-full p-2 overflow-x-hidden">
      <section className="max-w-[1240px] mx-auto flex flex-col justify-center">
        <p className="text-xl tracking-widest uppercase text-[#e92c2c]">
          Services
        </p>
        <h3 className="py-4">What we can do for you</h3>
        <div className="flex flex-col justify-between gap-8">
          <ServiceItem
            title=""
            backgroundImg={MarketingImg}
            projectUrl=""
            tech=""
            typeText="<span style='color:#e92c2c'>Marketing</span>"
            side="rigth"
            text="Marketing that actually works"
          />
          <ServiceItem
            title=""
            backgroundImg={WebdesignImg}
            projectUrl=""
            tech=""
            typeText="Web<span style='color:#e92c2c'>design</span>"
            side="left"
            text="Webdesign that inspires"
          />
          <ServiceItem
            title=""
            backgroundImg={SocialMediaImg}
            projectUrl=""
            tech=""
            typeText="Sozial <span style='color:#e92c2c'>media</span> management"
            side="rigth"
            text="Sozial media that goes viral"
          />
          <ServiceItem
            title=""
            backgroundImg={VideographyImg}
            projectUrl=""
            tech=""
            typeText="Photo- and <span style='color:#e92c2c'>Videography</span>"
            side="left"
            text="Media design that impresses"
          />
        </div>
      </section>
    </div>
  );
}

export default Services;
