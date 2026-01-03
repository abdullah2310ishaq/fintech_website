import React, { useEffect } from 'react'
import './style.scss'
import Header from '../../components/Header'
import ConsultantSlider from './sections/ConsultantServiceSlider'
import CardColumn from './sections/CardColumn'
import Marquee from '../../components/Marquee'

import m1 from '../../assets/marquee/img1.png'
import m2 from '../../assets/marquee/img2.png'
import m3 from '../../assets/marquee/img3.png'
import m4 from '../../assets/marquee/img4.png'
import m5 from '../../assets/marquee/img5.png'
import Footer from '../../components/Footer'
import Hero from './sections/Hero'
function OurServices() {
      const imageArray = [m1, m2, m3, m4,m5];
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    scrollToTop();
    // a few retries for mobile browsers
    const t1 = setTimeout(scrollToTop, 0);
    const t2 = setTimeout(scrollToTop, 50);
    const t3 = setTimeout(scrollToTop, 100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div className="our-services-page">
        <Header/>
        <Hero/>
        {/* <ConsultantSlider/> */}
        {/* <CardColumn/> */}
        <Marquee images={imageArray} speed={12} height="64px" borderRadius='50px' padding='70px 0px'/>
        <Footer blueSection={false}/>
    </div>
  )
}

export default OurServices