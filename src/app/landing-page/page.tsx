"use client";
import React from "react";
// components
import HeroSection from "./hero-section/HeroSection";
import AboutUs from "./about-us/AboutUs";
import Programs from "./programs/Programs";
import Events from "./events/Events";
import Blog from "./blog/Blog";
import Gallery from "./gallery/Gallery";
import ImageSection from "./image-section/ImageSection";
import GreetingBlock from "./greeting-block/GreetingBlock";
import Contact from "./contact/Contact";

const LandingPage = () => {
  return (
    <div className="bg-brightGray">
      <HeroSection />
      <AboutUs />
      <Programs />
      <Events />
      <Blog />
      <Gallery />
      <ImageSection />
      <GreetingBlock />
      <Contact />
    </div>
  );
};

export default LandingPage;
