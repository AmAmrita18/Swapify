import React from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{ backgroundImage: "url('assets/img/footer-bg.png')" }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-12 wow fadeInUp"
            data-wow-duration="0.3s"
            data--wow-duration="0.2s"
          >
            <div className="top-footer">
              <div className="logo">
                <img id="logo" src="assets/img/logo3.png" alt="" />
              </div>
              <a href="/" className="button-1">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div
            className="col-lg-2 col-md-6 wow fadeInUp"
            data-wow-duration="0.3s"
            data-wowo-delay="0.3s"
          >
            <div className="footer-box">
              <h4 className="lasthead">Company</h4>
              <ul className="footer-link">
                {["About Us", "Contact Us", "Blog", "Affiliate"].map(
                  (item, index) => (
                    <li key={index}>
                      <a href="#">{item}</a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div
            className="col-lg-2 col-md-6 wow fadeInUp"
            data-wow-duration="0.4s"
            data-wowo-delay="0.4s"
          >
            <div className="footer-box">
              <h4 className="lasthead">Support</h4>
              <ul className="footer-link">
                {["FAQ", "Contact Time", "How it works", "Details"].map(
                  (item, index) => (
                    <li key={index}>
                      <a href="#">{item}</a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div
            className="col-lg-2 col-md-6 wow fadeInUp"
            data-wow-duration="0.5s"
            data-wowo-delay="0.5s"
          >
            <div className="footer-box">
              <h4 className="lasthead">Policy</h4>
              <ul className="footer-link">
                {[
                  "Terms Of Use",
                  "Privacy Policy",
                  "Refunds Policy",
                  "Money Type",
                ].map((item, index) => (
                  <li key={index}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="col-lg-5 col-md-6 wow fadeInUp"
            data-wow-duration="0.5s"
            data-wowo-delay="0.5s"
          >
            <div className="footer-box">
              <h4 className="lasthead">Newsletter</h4>
              <form action="#">
                <div className="form-group">
                  <input type="email" placeholder="Enter email address" />
                  <button type="submit" className="button-1">
                    {" "}
                    Join Now
                  </button>
                </div>
              </form>
              <div className="social-style">
                <a href="#">
                  <i ><SlSocialLinkedin />
                  </i>
                </a>
                <a href="#">
                  <i ><SlSocialFacebook />
                  </i>
                </a>
                <a href="#">
                  <i><SlSocialInstagram />
                  </i>
                </a>
                <a href="#">
                  <i><SlSocialTwitter />
                  </i>
                </a>
                <a href="#">
                  <i><SlSocialGoogle />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 text-center wow fadeInUp"
            data-wow-duration="0.4s"
            data-wowo-delay="0.4s"
          >
            <div className="footer-bottom">
              <p className="text">
                Copyright &copy; <a href="#">@Swapper</a>{" "}
                | <a href="#">2024</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
