import { useState } from "react";
import "./CompanyInfo.css";

const CompanyInfo = () => {
  const [groupInputValue, setGroupInputValue] = useState("");
  return (
    <section className="company-info">
      <img
        className="vector-arrow-icon"
        loading="eager"
        alt=""
        src="/rectangle-20@2x.png"
      />
      <img
        className="vector-arrow-icon1"
        loading="eager"
        alt=""
        src="/rectangle-21@2x.png"
      />
      <img
        className="vector-arrow-icon2"
        loading="eager"
        alt=""
        src="/rectangle-24@2x.png"
      />
      <img
        className="vector-arrow-icon3"
        loading="eager"
        alt=""
        src="/rectangle-25@2x.png"
      />
      <button className="customer-reviews">
        <div className="customer-reviews-child" />
        <img
          className="contact-information-icon"
          alt=""
          src="/contact-information.svg"
        />
        <div className="follow-our-instagram">Follow our Instagram</div>
      </button>
      <footer className="help-support">
        <div className="help-support-child" />
        <div className="subscribe-newsletter">
          <div className="company-contact">
            <h1 className="strings-of-india-container2">
              <span className="strings-of-india-container3">
                <span>Strings</span>
                <span className="span1">{` `}</span>
                <span className="of-india1">of India</span>
              </span>
            </h1>
            <div className="order-status">
              <div className="returns-exchange">
                <div className="company">Company</div>
                <div className="shipping-payment">
                  <div className="about-us">About us</div>
                  <div className="contact-us">Contact us</div>
                  <div className="contact-us">Privacy policy</div>
                </div>
              </div>
              <div className="returns-exchange1">
                <div className="company">Support</div>
                <div className="order-status-parent">
                  <div className="contact-us">Order status</div>
                  <div className="contact-us">{`Returns & exchange`}</div>
                  <div className="contact-us">{`Ordering & payment`}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="help-f-a-qs">
            <div className="company">Help</div>
            <div className="f-a-q-s-size-guide-shipping-po">
              <div className="contact-us">FAQs</div>
              <div className="contact-us">Size guide</div>
              <div className="contact-us">Shipping Policy</div>
            </div>
          </div>
        </div>
        <div className="about-us-order-status">
          <div className="contactus-returns-exchange">
            <h1 className="subscribe-to-our-container">
              <span>{`Subscribe to our `}</span>
              <span className="newsletter">Newsletter</span>
            </h1>
            <div className="help-f-a-qs1">
              <input
                className="help-f-a-qs-child"
                placeholder="Enter your Email"
                type="text"
                value={groupInputValue}
                onChange={(event) => setGroupInputValue(event.target.value)}
              />
              <div className="group-div">
                <div className="frame-child1" />
                <div className="company">Subscribe</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default CompanyInfo;
