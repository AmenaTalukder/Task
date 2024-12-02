import React from "react";
import "../Styles/section1.css";

const Section1 = () => {
  console.log("Section1 rendered!");
  return (
    <div className="hero">
      {/* container-small */}
      <div className="container-small">
        <div className="Upper">
          <div className="star-div">
            <div className="star-img">
              {Array(4)
                .fill(null)
                .map((_, index) => (
                  <img key={index} src="/Frame.png" alt="Full Star" />
                ))}
              <img src="/Frame-half.png" alt="Half Star" />
            </div>
            <p>4.9 (566)</p>
          </div>
          <h1 className="h1">#1 Plarfrom Powering health and Wellness</h1>
        </div>

        <div className="below">
          <h3 className="h3">
            We're restoring home as the primary place of personal well-being
          </h3>
          <h4 className="h4">
            Health is not just about what you're eating. It's also about waht
            you're thinking and saying
          </h4>
          <div className="button-twich">
            <button className="btn">Brower Courses</button>
            <button className="btn-2">Get Started</button>
          </div>
        </div>
      </div>

      {/* container-large */}
      <div className="container-Large">
        <div className="text-div">
          <div className="headline">12,000+</div>
          <div className="line"></div>
          <div className="subheadline">Happy learners rely on us regularly</div>
        </div>

        <div className="leaf-div">
          <img src="/Leaf.png" className="leaf" />
        </div>
        <div className="inner-div">
          <div className="title">Find your wellbeing</div>
          <div className="description">
            By prioritizing self-care and making informed choices, one can
            enhance their overall quality of life.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
