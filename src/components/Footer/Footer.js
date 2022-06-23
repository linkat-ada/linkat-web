import React, { useState } from "react";
import "./Footer.css";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaDribbble } from "react-icons/fa";

const Footer = ({}) => {
  const [email, setEmail] = useState("");
  const URL = process.env.PUBLIC_URL+"/subscribers";
  const setSubscriber = (emil) => {
    
  };
  const [apiResult, setApiResult] = useState();
  return (
    <div className="footer">
      <div className="containers">
        <h1>Linkat</h1>
        <div className="socialmedia-rights-subscribe">
          <div className="subscribe">
            <h2>subscribe to our newsletter</h2>
            <p>Monthly disgest of whats new and exciting from us</p>
            <div className="input">
              <input
                className="input-email"
                type={"text"}
                placeholder={"Email address"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="input-btn"
                type={"button"}
                value={"Subscribe"}
                onClick={() => setSubscriber(email)}
              />
              <p
                className={`${
                  apiResult && apiResult.success ? "green" : "red"
                }`}
              >
                {apiResult && apiResult.message}
              </p>
            </div>
            <div className="socialmedia">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-xs-12">
                    <ul className="social-icons">
                      <li>
                        <a className="facebook" href="#">
                          <i className="fa fa-facebook">
                            <FaFacebookF/>
                          </i>
                        </a>
                      </li>
                      <li>
                        <a className="twitter" href="#">
                          <i className="fa fa-twitter">
                            <BsTwitter />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a className="dribbble" href="#">
                          <i className="fa fa-dribbble">
                            <FaDribbble />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a className="linkedin" href="#">
                          <i className="fa fa-linkedin">
                            <FaLinkedinIn />
                          </i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="rights">2021&copy; Company, Inc. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
