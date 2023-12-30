import React from "react";
import "../styles/footer.css";
import email from "../images/icons8-email-50 (1).png";
import phone from "../images/icons8-phone-50 (1).png";
import instagram from "../images/icons8-instagram-32.png";
import facebook from "../images/icons8-facebook-50.png";
import tiktok from "../images/icons8-tiktok-50.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="div_footer">
        <div className="menuFooter">
          <a href="#">Home</a>
          <a href="#">Categories</a>
          <a href="#">Product</a>
          <a href="#">Contact Us</a>
          <a href="#">AboutUs</a>
          <a href="#">Top Brands</a>
        </div>
        <div className="contactFooter">
          <h2 className="Footer_title">Contact</h2>
          <p className="contactFooter_p">
            Palm Court Bldg M, 501/B, 5th Floor, New Link Road, Beside Goregaon
            Sports Complex, Malad West, Mumbai, 400064, Maharashtra.
          </p>
          <a className="phoneFooter_a">
            <img className="phoneFooter_img" src={phone} />
            <p className="phoneFooter_p">+961 71/153332</p>
          </a>
          <a className="emailFooter_a">
            <img className="emailFooter_img" src={email} />
            <p className="emailFooter_p">Mini.Fashion@gmail.com</p>
          </a>
        </div>
        <div className="socialMediaFooter">
          <h2 className="Footer_title">Social Media</h2>
          <a className="socialMediaFooter_a">
            <img className="socialMediaFooter_img" src={facebook} />
            <p className="socialMediaFooter_p">Mini Fashion</p>
          </a>
          <a className="socialMediaFooter_a">
            <img className="socialMediaFooter_img" src={instagram} />
            <p className="socialMediaFooter_p">Mini Fashion</p>
          </a>
          <a className="socialMediaFooter_a">
            <img className="socialMediaFooter_img" src={tiktok} />
            <p className="socialMediaFooter_p">Mini Fashion</p>
          </a>
        </div>
      </div>
      <div className="copyRight">
        <a className="copyRight_a">
          © Copyrights 2023.Mini Fashion.All Rights Reserved.
        </a>
      </div>
    </div>
  );
};

export default Footer;
