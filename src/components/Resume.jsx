import React from "react";
import blackArrow from "../assets/blackArrow.png";

const Resume = () => {
  return (
    <section className="resume-section">
      <div className="container">
        <div className="main-resume">
          <div className="resume-col-1">
            <h5>resume</h5>
            <h2>
              All Over My <br />
              <span style={{ color: "#E65737" }}>Details Find</span> <br />
              Here....
            </h2>

            <div className="drop-down">
              <div className="drop-down1">
                <h2>About Me</h2>
                <div className="resume-arrow">
                  {" "}
                  <img src={blackArrow} alt="" />
                </div>
              </div>
              <div className="drop-down1">
                <h2>Experience</h2>
                <div className="resume-arrow">
                  {" "}
                  <img src={blackArrow} alt="" />
                </div>
              </div>
              <div className="drop-down1">
                <h2>Education</h2>
                <div className="resume-arrow">
                  {" "}
                  <img src={blackArrow} alt="" />
                </div>
              </div>
              <div className="drop-down1">
                <h2>Skills</h2>
                <div className="resume-arrow">
                  {" "}
                  <img src={blackArrow} alt="" />
                </div>
              </div>
              <div className="drop-down1">
                <h2>Awards</h2>
                <div className="resume-arrow">
                  {" "}
                  <img src={blackArrow} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="resume-col-2">
            <h3>Based in German</h3>
            <p>
              Fusce mollis sem eu ligula ornare, ut molestie eros volutpat.
              Praesent condimentum, libero id tincidunt tincidunt, neque ex
              ultrices purus, interdum gravida enim sapien ac urna.{" "}
            </p>
            <p>
              Fusce mollis sem eu ligula ornare, ut molestie eros volutpat.
              Praesent condimentum,  libero id tincidunt tincidunt, neque
              ex ultrices purus,{" "}
            </p>
            <div className="resume-detail-box">
              <div className="resume-details">
                <div className="key">
                  <h6>Name:</h6>
                  <h6>Nationality:</h6>
                  <h6>Phone:</h6>
                  <h6>Email:</h6>
                  <h6>Experience:</h6>
                  <h6>Freelance:</h6>
                  <h6>Skype:</h6>
                  <h6>Language:</h6>
                </div>
                <div className="value">
                  <h6>John Wick</h6>
                  <h6>German</h6>
                  <h6>+000 111 2222</h6>
                  <h6>dummy@gmail.com</h6>
                  <h6>dummy@gmail.com</h6>
                  <h6>Available</h6>
                  <h6>Available</h6>
                  <h6>English</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
