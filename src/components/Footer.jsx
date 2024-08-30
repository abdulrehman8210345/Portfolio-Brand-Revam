import React from "react";
import uparrow from "../assets/uparrow.png";
import insta from "../assets/insta.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import Be from "../assets/Be.png";
import linkedin from "../assets/linkedin.png";
import browser from "../assets/browser.png";
import diagonalarrow from "../assets/diagonalarrow.png";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="container">
        <div className="main-footer">
          <div className="footer-header">
            <div className="footer-content">
              <h1>
                Let’s Work
                <br />
                Together
              </h1>
              <div className="footer-location">
                <p>based in germany</p>
                <div className="footer-logos">
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
            <div className="footer-card">
              <p>Looking for a hectic designer?</p>
              <div className="card-footer-lower">
                <h5>dummy@gmail.com</h5>
                <div className="pricing-arrow">
                  <img src={diagonalarrow} alt="" />
                </div>
              </div>
            </div>
            <div className="footer-card">
              <p>
                Want a more in-depth look at <br />
                my History
              </p>
              <div className="card-footer-lower">
                <h5>+000 1111 2222</h5>
                <div className="pricing-arrow">
                  <img src={diagonalarrow} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-footer">
            <h5>2024 Faiq Shaikh . All Rights Reserved</h5>
            <div className="up-arrow-function">
              <h5>Back to top</h5>
              <div className="up-arrow-img">
                <img src={uparrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
