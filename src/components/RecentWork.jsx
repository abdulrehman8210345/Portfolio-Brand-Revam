import React from "react";
import mobiledesign from "../assets/mobile-design.png";
import websitedesign from "../assets/website-design.png";
import whiteArrow from "../assets/whiteArrow.png";

const RecentWork = () => {
  return (
    <section className="recent-work-section">
      <div className="container">
        <div className="main-recent">
          <div className="recent-heading">
            <h6>Portfolio</h6>
            <h2>
              My Recent <span style={{ color: "#E65737" }}>Work</span>
            </h2>
          </div>
          <div className="recent-cards">
            <div className="recent-card">
              <div className="mob-img-div">
                <img src={mobiledesign} alt="" />
              </div>
              <h3>Mobile App Design</h3>
            </div>
            <div className="recent-card">
              <div className="mob-img-div">
                <img src={websitedesign} alt="" />
              </div>
              <h3>Website Design</h3>
            </div>
          </div>
          
            <button className="recent-button">
              <p>View all project</p>
              <div className="white-arrow">
                <img src={whiteArrow} alt="" />
              </div>
            </button>
         
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
