import React from "react";
import mobileLogo from "../assets/Frame.png";
import arrow from "../assets/arrow.png"

const Specialities = () => {
  const skill = [
    {
      name: "Mobile App Design",
    },
    {
      name: "UI/UX Design",
    },
    {
      name: "Website Design",
    },
    {
      name: "Banner Design",
    },
    {
      name: "Web App Design",
    },
    {
      name: "Logo Design",
    },
  ];
  return (
    <section className="specialities-section">
      <div className="container">
        <div className="main-specialities">
          <div className="spec-desc">
            <div className="spec-title">
              <h4 style={{ color: "#D5D2E4" }}>My</h4>
              <h4 style={{ color: "#E65737" }}>Specialities</h4>
            </div>
            <div className="spec-para">
              <p className="intro-para">
                Fusce mollis sem eu ligula ornare, ut molestie eros volutpat.
                Praesent <br /> condimentum, libero id tincidunt tincidunt,
                neque ex ultrices purus,
                <br /> interdum gravida enim sapien ac urna.{" "}
              </p>
            </div>
          </div>

          <div className="spec-logos">
            <div className="skill-logos">
              {skill.map((card, i) => (
                <div key={i} className="skill-card">
                  <div className="card-content">
                    <div className="card-logo">
                      <img src={mobileLogo} alt="" />
                    </div>
                    <div className="card-name">
                      <h5>{card.name}</h5>
                      <div className="arrow"><img src={arrow} alt="" /></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="hello-card">
              <div className="hello-text">
                <h5>SAY hELLO!</h5>
                <h6>dummy@gmail.com</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialities;
