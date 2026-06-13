import React, { useEffect } from 'react'
import Header from '../../components/Header'
import { CompleteSolution } from '../Homepage/sections/CompleteSolution'
import ProvidingRights from './sections/ProvidingRights'
import WhyFinCan from './sections/WhyFinCan'
// import { Testimonial } from '../Homepage/sections/Testimonial'
import BestFinancial from './sections/BestFinancial'
import OurTeam from './sections/OurTeam'
import SuccessStories from './sections/SuccessStories'
import { Group } from '../Homepage/sections/Group'
import Footer from '../../components/Footer'
import Bars from './sections/Bars'
import './style.scss'
function Home() {
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
        <div className="white-div-container">
          <WhyFinCan/>
          <ProvidingRights/>
          {/* <Testimonial/> */}
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