import React from "react";
import "../Styles/section3.css";
import { FaCheckCircle } from "react-icons/fa";

const Section3 = () => {
  return (
    <div className="section3">
      <div className="we-provide ">
        <h2 className="h-tag">We provide...</h2>

        <div className="Personalized">
          <FaCheckCircle className="Cheak" />
          Personalized routine
        </div>
        <div className="Follow-up">
          <FaCheckCircle className="Cheak" />
          Follow-up after completing courses
        </div>
        <div className="resources">
          <div class="icon-cheak">
            <FaCheckCircle className="Cheak" />
          </div>
          <div className="passage">
            <h3> Access to additional resources</h3>
            <p>
              We offer access to a variety of additional resources to enhance
              your experience, including exclusive tools, guides, and support
              materials designed to help you achieve your goals more
              effectively.
            </p>
          </div>
        </div>
        <div className="support">
          <FaCheckCircle className="Cheak" />
          Free community support
        </div>

        <button className="Serv-btn">Learn More About Our Services</button>
      </div>
      <div className="image-box"></div>
    </div>
  );
};

export default Section3;
