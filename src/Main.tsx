import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import { Homepage } from "./screens/Homepage";
import About from "./screens/About";
import { Services } from "./screens/Services";
import ServiceDetail from "./screens/ServiceDetail/index.";
import CaseStudy from "./screens/CaseStudy";
import CaseStudyDetail from "./screens/CaseStudyDetail";
import ContactUs from "./screens/ContactUS";
import OurServices from "./screens/OurServices";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<OurServices />} />
      <Route path="/servicedetail/:id" element={<ServiceDetail />} />
      <Route path="/casestudy" element={<CaseStudy />} />
      <Route path="/casestudydetail/:id" element={<CaseStudyDetail />} />
      <Route path="/contactus" element={<ContactUs />} />

      {/* Catch-all route for 404 */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default Main;
