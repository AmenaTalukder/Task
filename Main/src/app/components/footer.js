import React from "react";
import "../Styles/footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { SiDiscord } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-body">
        <div className="footer-content">
          <div className="category">
            <h1 className="head1">Categories</h1>
            <a> Nutrition and diet</a>
            <a>Mindfulness</a>
            <a>Mental health</a>
            <a>Personal growth</a>
            <a>Social well-being</a>
          </div>

          <div className="aboutfo">
            <h1 className="head1">About</h1>
            <a>About us</a>
            <a>Our partners</a>
            <a>Investors</a>
            <a>Investors</a>
          </div>

          <div className="res">
            <h1 className="head1">Resources</h1>
            <a>FAQ</a>
            <a>Refund policies</a>
            <a>Terms and conditions</a>
            <a>Cookie </a>
            <a>Latest posts</a>
          </div>

          <div className="supt">
            <h1 className="head1">Support</h1>
            <a>Get in touch</a>
            <a>Visit our forum</a>
          </div>
        </div>
        <hr class="dashed-line" />
        <div className="Channels">
          <h1>Join our official channels</h1>
          <div className="social-media">
            <FaInstagram className="social-app" />
            <FaSquareXTwitter className="social-app" />
            <FaFacebook className="social-app" />
            <SiDiscord className="social-app" />
          </div>
        </div>
        <hr class="dashed-line" />

        <div className="copyRighgt">© 2024 EduPath. All rights reserved</div>
      </div>
    </div>
  );
};

export default Footer;
