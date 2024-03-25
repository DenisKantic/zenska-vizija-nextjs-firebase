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
import Footer from "./footer/Footer";
import Navbar from "./navigation/Navbar";

const LandingPage = () => {
  return (
    <div className="bg-brightGray">
      <Navbar />
      <HeroSection />
      <section id="about-us">
        <AboutUs />
      </section>
      <section id="programs">
        <Programs />
      </section>
      <section id="events">
        <Events />
      </section>
      <section id="blogs">
        <Blog />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <ImageSection />
      <GreetingBlock />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
