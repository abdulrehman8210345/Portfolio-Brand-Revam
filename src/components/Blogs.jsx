import React from "react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import diagonalarrow from "../assets/diagonalarrow.png";

const Blogs = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="main-blogs">
          <div className="blog-heading">
            <h6>Blogs</h6>
            <h2>
              My Blog <span style={{ color: "#E65737" }}>Post</span>
            </h2>
          </div>
          <div className="all-blogs">
            <div className="blog1">
              <div className="blog-img">
                <img src={blog1} alt="" />
              </div>
              <div className="blog-det">
                <div className="blog-ul">
                  <div className="dot-icon"></div>
                  <h6>UI Design</h6>
                </div>
                <p>18/nov/2024</p>
              </div>
              <div className="blog-det2">
                <h5>
                  Right-lo-left behind <br />
                  development in mobile <br />
                  web design
                </h5>
                <div className="blog-det-arrow">
                  <img src={diagonalarrow} alt="" />
                </div>
              </div>
            </div>
            <div className="blog2">
              <div className="blog-img">
                <img src={blog2} alt="" />
              </div>
              <div className="blog-det">
                <div className="blog-ul">
                  <div className="dot-icon"></div>
                  <h6>UI Design</h6>
                </div>
                <p>18/nov/2024</p>
              </div>
              <div className="blog-det2">
                <h5>
                  Right-lo-left behind <br />
                  development in mobile <br />
                  web design
                </h5>
                <div className="blog-det-arrow">
                  <img src={diagonalarrow} alt="" />
                </div>
              </div>
            </div>
            <div className="blog1">
              <div className="blog-img">
                <img src={blog3} alt="" />
              </div>
              <div className="blog-det">
                <div className="blog-ul">
                  <div className="dot-icon"></div>
                  <h6>UI Design</h6>
                </div>
                <p>18/nov/2024</p>
              </div>
              <div className="blog-det2">
                <h5>
                  Right-lo-left behind <br />
                  development in mobile <br />
                  web design
                </h5>
                <div className="blog-det-arrow">
                  <img src={diagonalarrow} alt="" />
                </div>
              </div>
            </div>
            <div className="blog2">
              <div className="blog-img">
                <img src={blog4} alt="" />
              </div>
              <div className="blog-det">
                <div className="blog-ul">
                  <div className="dot-icon"></div>
                  <h6>UI Design</h6>
                </div>
                <p>18/nov/2024</p>
              </div>
              <div className="blog-det2">
                <h5>
                  Right-lo-left behind <br />
                  development in mobile <br />
                  web design
                </h5>
                <div className="blog-det-arrow">
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

export default Blogs;
