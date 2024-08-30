import React from "react";
import whiteArrowLeft from "../assets/whiteArrowLeft.png";

import whiteArrowRight from "../assets/whiteArrowRight.png";
import invertedcomma from "../assets/invertedcomma.png";
import profilePic from "../assets/profilePic.png";

const Testimonial = () => {
  return (
    <section className="test-section">
      <div className="container">
        <div className="main-test">
          <div className="test1">
            <h6>Tesstimonial</h6>
            <h2>
              Client
              <br />
              <span style={{ color: "#E65737" }}>Feedback</span>
            </h2>

            <div className="test-arrows">
              <div className="test-arrow">
                <img src={whiteArrowLeft} alt="" />
              </div>

              <div className="test-arrow2">
                <img src={whiteArrowRight} alt="" />
              </div>
            </div>
          </div>
          <div className="test2">
            <div className="test2-content">
              <div className="inverted-comma">
                <img src={invertedcomma} alt="" />
              </div>
              <p>
                Fusce mollis sem eu ligula ornare, ut molestie <br /> eros
                volutpat. Praesent condimentum, libero id <br />
                tincidunt tincidunt, neque ex ultrices purus, <br /> interdum
                gravida enim sapien ac urna. neque ex <br /> ultrices purus,
                interdum gravida enim sapien ac <br /> urna.{" "}
              </p>
              <div className="profile">
                <div className="profilePic">
                  <img src={profilePic} alt="" />
                </div>
                <p>John Wick</p>
              </div>
            </div>
          </div>
          <div className="test2">
            <div className="test2-content">
              <div className="inverted-comma">
                <img src={invertedcomma} alt="" />
              </div>
              <p>
                Fusce mollis sem eu ligula ornare, ut molestie <br /> eros
                volutpat. Praesent condimentum, libero id <br />
                tincidunt tincidunt, neque ex ultrices purus, <br /> interdum
                gravida enim sapien ac urna. neque ex <br /> ultrices purus,
                interdum gravida enim sapien ac <br /> urna.{" "}
              </p>
              <div className="profile">
                <div className="profilePic">
                  <img src={profilePic} alt="" />
                </div>
                <p>John Wick</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
