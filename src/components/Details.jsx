import React from "react";
import pic from "../assets/pic.png";
import ten from "../assets/10.png";
import hundred from "../assets/100+.png";
import nintyNine from "../assets/99+.png";
import yearofexp from "../assets/yearofexp.png";
import twelve from "../assets/12+.png";

const Details = () => {
  return (
    <section className="detail-section">
      <div className="container">
        <div className="main-details">
          <div className="det-image">
            <div className="person-img">
              <img src={pic} alt="" />
            </div>
            <div className="twelve">
              <img src={twelve} alt="" />
            </div>
          </div>
          <div className="det-desc">
            <h5>Hello i’m</h5>
            <h2>
              John Wick,
              <br />
              UI/UX <span style={{ color: "#E65737" }}>Designer</span>
            </h2>
            <p>
              Fusce mollis sem eu ligula ornare, ut molestie eros volutpat.
              Praesent <br />
              condimentum, libero id tincidunt tincidunt, neque ex ultrices
              purus,
              <br />
              interdum gravida enim sapien ac urna.{" "}
            </p>
            <p>
              Fusce mollis sem eu ligula ornare, ut molestie eros volutpat.
              Praesent <br />
              condimentum, libero id tincidunt tincidunt, neque ex ultrices
              purus,
              <br />
              interdum gravida enim sapien ac urna.{" "}
            </p>
            <div className="experience">
              <div className="exp-col">
                <div className="ten">
                  <img src={ten} alt="" />
                </div>
                <p>Award Winner</p>
              </div>
              <div className="exp-col">
                <div className="hundred">
                  <img src={hundred} alt="" />
                </div>
                <p>WorldWide Client</p>
              </div>
              <div className="exp-col">
                <div className="nintynine">
                  <img src={nintyNine} alt="" />
                </div>
                <p>Job Done Successfully</p>
              </div>
            </div>

            <div className="exp-img-div">
              <img src={yearofexp} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
