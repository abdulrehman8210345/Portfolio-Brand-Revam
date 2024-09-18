import React from "react";
import whiteArrow from "../assets/whiteArrow.png";
import diagonalarrow from "../assets/diagonalarrow.png";

const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="main-pricing">
          <div className="pricing-header">
            <div className="pricing-title">
              <p>Pricing</p>
              <h3>
                Stay Chill & Pick <br />
                Your plan
              </h3>
            </div>
            <button className="pricing-button">
              <p>Contact for Custom Project</p>
              <div className="white-arrow">
                <img src={whiteArrow} alt="" />
              </div>
            </button>
          </div>
          <div className="pricing-cards">
            <div className="pricing-card">
              <div className="card-header">
                <h6>Premium</h6>
                <p>$48/hrs</p>
              </div>
              <div className="card-footer">
                <div>
                  <h5>20 hrs</h5>
                  <p>10 hours per week</p>
                </div>
                <div className="pricing-arrow">
                  <img src={diagonalarrow} alt="" />
                </div>
              </div>
            </div>
            <div className="pricing-card">
              <div className="card-header">
                <h6>Platium</h6>
                <p>$48/hrs</p>
              </div>
              <div className="card-footer">
                <div>
                  <h5>20 hrs</h5>
                  <p>10 hours per week</p>
                </div>
                <div className="pricing-arrow">
                  <img src={diagonalarrow} alt="" />
                </div>
              </div>
            </div>
            <div className="pricing-card">
              <div className="card-header">
                <h6>Basic</h6>
                <p>$48/hrs</p>
              </div>
              <div className="card-footer">
                <div>
                  <h5>20 hrs</h5>
                  <p>10 hours per week</p>
                </div>
                <div className="pricing-arrow">
                  <img src={diagonalarrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
