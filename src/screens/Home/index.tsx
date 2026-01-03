import React, { useEffect } from 'react'
import Header from '../../components/Header'
import { CompleteSolution } from '../Homepage/sections/CompleteSolution'
import ProvidingRights from './sections/ProvidingRights'
import { Testimonial } from '../Homepage/sections/Testimonial'
import BestFinancial from './sections/BestFinancial'
import OurTeam from './sections/OurTeam'
import SuccessStories from './sections/SuccessStories'
import { Group } from '../Homepage/sections/Group'
import Footer from '../../components/Footer'
import Bars from './sections/Bars'
import Marquee from '../../components/Marquee'

import m1 from '../../assets/marquee/img1.png'
import m2 from '../../assets/marquee/img2.png'
import m3 from '../../assets/marquee/img3.png'
import m4 from '../../assets/marquee/img4.png'
import m5 from '../../assets/marquee/img5.png'
import './style.scss'
function Home() {
    const imageArray = [m1, m2, m3, m4,m5];

  // More aggressive scroll-to-top fix
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    // Immediate scroll
    scrollToTop();
    
    // Additional attempts for mobile
    setTimeout(scrollToTop, 0);
    setTimeout(scrollToTop, 10);
    setTimeout(scrollToTop, 50);
  }, []);

  return (
    <div className="home-container">
      <Header/>
      <div className="main-content">
        <CompleteSolution/>
        <Marquee images={imageArray} speed={12} height="64px" />
        <div className="white-div-container">
          <ProvidingRights/>
          <Testimonial/>
          <BestFinancial/>
          <OurTeam/>
          <Bars/>
          <SuccessStories/>
        </div>
        <Footer homeTightSpacing={true}/>
        {/* <Group /> */}
      </div>
    </div>
)
}

export default Home