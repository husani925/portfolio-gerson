import React from "react";
import ReactCursorPosition from "react-cursor-position";
import { Element } from "react-scroll";
import Header3 from "../components/layouts/Header3";
import Footer from "../components/layouts/Footer";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Experiences from "../components/sections/Experiences";
import Herosection from "../components/sections/Herosection";
import Services from "../components/sections/Services";
import Works from "../components/sections/Works";

function Homepage3Light() {
  document.body.classList.remove("dark");

  return (
    <>
      <Header3 light logoSource="/images/gersonmedina.png" />
      <main className="content-3">
        <Element name="section-home">
          <ReactCursorPosition>
            <Herosection light />
          </ReactCursorPosition>
        </Element>
        <Element name="section-about">
          <About />
        </Element>
        <Element name="section-services">
          <Services />
        </Element>
        <Element name="section-experiences">
          <Experiences />
        </Element>
        <Element name="section-works">
          <Works />
        </Element>
        {/*<Element name="section-pricing">
          <Pricing />
        </Element> 
        <Element name="section-testimoninal">
          <Testimonials />
        </Element>
        <Element name="section-brandlogos">
          <br />
          <Brandlogos />
        </Element>
        {/* <Element name="section-blogs">
          <Blogs />
        </Element> */}
        <Element name="section-contact">
          <Contact />
        </Element>
        <div className="spacer" data-height="96"></div>
      </main>
      <Footer light />
    </>
  );
}

export default Homepage3Light;
