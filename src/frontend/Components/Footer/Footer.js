import React from "react";
import "../LandingPage/LandingPage.scss";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="Footer_container">
      <div className="footer">
        <div className="getToKnowUs">
          <h6>Get to know us</h6>
          <ul>
            <Link>About Us</Link>
            <Link>Contact Us</Link>
            <Link>Careers</Link>
            <Link>Mission and Vision</Link>
          </ul>
        </div>
        <div className="policies">
          <h6>Policies</h6>
          <ul>
            <Link>Disclaimer</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms & Conditions</Link>
            <Link>Return & Exchange</Link>
            <Link>Shipping Policy</Link>
          </ul>
        </div>
        <div className="copyright_socialmedias">
          <div className="copyright">
            <p>
              ©Copyright 2024 by <b>COMPANY NAME</b> Limited. All Rights
              Reserved.
            </p>
          </div>
          <div className="socialmedia">
            <h6>Follow Us</h6>
            <div className="icons">
              <Tooltip title="Facebook">
                <IconButton>
                  <FaFacebook style={{ color: "#3b5998" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Youtube">
                <IconButton>
                  <FaYoutube style={{ color: "#ff0000" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Twitter">
                <IconButton>
                  <FaTwitterSquare style={{ color: "#0a66c2" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Pinterest">
                <IconButton>
                  <FaPinterest style={{ color: "#bd081c" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Instagram">
                <IconButton>
                  <FaInstagram
                    style={{
                      background:
                        "linear-gradient(0deg, rgb(249, 206, 52), rgb(238, 42, 123), rgb(98, 40, 215))",
                      color: "#fff",
                      borderRadius: "5px",
                    }}
                  />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
