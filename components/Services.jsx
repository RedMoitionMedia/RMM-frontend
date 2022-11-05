import React from 'react';
import ServiceItem from './ServiceItem';
import MarketingImg from '../public/assets/services/marketing.jpg';
import SocialMediaImg from '../public/assets/services/social-media.jpg';
import VideographyImg from '../public/assets/services/videography.jpg';
import WebdesignImg from '../public/assets/services/webdesign.jpg';

function Services() {
  return (
    <div
      id='services'
      className='w-full p-2 overflow-x-hidden'
    >
      <section className='max-w-[1240px] mx-auto flex flex-col justify-center px-14'>
        <p className='text-xl tracking-widest uppercase text-[#e92c2c]'>
          Services
        </p>
        <h3 className='py-4'>What we can offer</h3>
        <div className='flex flex-col justify-between gap-8'>
          <ServiceItem
            backgroundImg={MarketingImg}
            typeText="Digital <span style='color:#e92c2c'>marketing</span>"
            side='rigth'
            section1='Marketing that actually works.'
            section2='Marketing on a wide variety of social media management systems to increase your revenue.'
            section3='Besides Facebook Marketing, we can also market your product or business such as SnapChat, Tinder, Pinterest and TikTok.'
          />
          <ServiceItem
            backgroundImg={WebdesignImg}
            typeText="E-<span style='color:#e92c2c'>Commerce</span>"
            side='left'
            section1='Creating or improving your Products in your Online Store or just building one from scratch.'
          />
          <ServiceItem
            backgroundImg={VideographyImg}
            typeText="Photo- and <span style='color:#e92c2c'>Videography</span>"
            side='rigth'
            section1='Need new pictures of your Product or new content on sozial media? We got you.'
            section2={
              'Besides, we can also help you with your production videos or help you run your own commercial.'
            }
          />
        </div>
      </section>
    </div>
  );
}

export default Services;
