import React, { useState } from "react";
import "./Footer.css";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaDribbble } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { subscribeAction } from "../../redux/actions/subscribers"

const Footer = ({}) => {
  const dispatch = useDispatch();
  const [subscribeData, setSubscribeData] = useState({
    email: "", 
  });
  const handleInputChange = (e) => {
    subscribeData[e.target.name] = e.target.value;
  };
  const handleSubscribe = async (e) => {
    e.preventDefault();
    await dispatch(subscribeAction(subscribeData))
      .then(() => console.log("sucess"))
      .catch((e) => console.error(e));
  };
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
                name="email"
                onChange={handleInputChange}
              />
              {/*
              <p
                className={`${
                  apiResult && apiResult.success ? "green" : "red"
                }`}
              >
                {apiResult && apiResult.message}
              </p>
              */}
              <input
                className="input-btn"
                type={"button"}
                value={"Subscribe"}
                onClick={handleSubscribe}
              />
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
