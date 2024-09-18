import React from "react";
import scrollDown from "../assets/scrollDown.png";
import portfolio from "../assets/portfolio.png";
import insta from "../assets/insta.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import Be from "../assets/Be.png";
import linkedin from "../assets/linkedin.png";
import browser from "../assets/browser.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="main-hero">
          <div className="scroller">
            <img src={scrollDown} alt="" />
          </div>
          <div className="intro">
            <h1 className="intro-text" style={{ color: "#E65737" }}>
              Website
            </h1>
            <h2 className="intro-text" style={{ color: "#D5D2E4" }}>
              {" "}
              Designer
            </h2>
            <p className="intro-para">
              Fusce mollis sem eu ligula ornare, ut molestie eros volutpat.
              Praesent condimentum,
              <br /> libero id tincidunt tincidunt, neque ex ultrices purus,
              interdum gravida enim sapien <br /> ac urna.{" "}
            </p>
          </div>
          <div className="social-links">
            <div className="footer-social-logo">
              <img src={facebook} alt="" />
            </div>
            <div className="footer-social-logo">
              <img src={twitter} alt="" />
            </div>
            <div className="footer-social-logo">
              <img src={linkedin} alt="" />
            </div>
            <div className="footer-social-logo">
              <img src={insta} alt="" />
            </div>
            <div className="footer-social-logo">
              <img src={Be} alt="" />
            </div>
            <div className="footer-social-logo">
              <img src={browser} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
