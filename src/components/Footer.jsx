import { React, useState } from "react";
import "../styles/footer.css";
import email from "../images/icons8-email-50 (1).png";
import phone from "../images/icons8-phone-50 (1).png";
import instagram from "../images/icons8-instagram-32.png";
import facebook from "../images/icons8-facebook-50.png";
import tiktok from "../images/icons8-tiktok-50.png";

const Footer = () => {
  const redirectToFacebook = () => {
    window.open(
      "https://www.facebook.com/fatimatfayli.tfayli?mibextid=ZbWKwL",
      "_blank"
    );
  };

  const redirectToInstagram = () => {
    window.open(
      "https://www.instagram.com/fatima.tfaylii?igsh=Yml6ZmI0cXpvcGx4",
      "_blank"
    );
  };

  const redirectToTiktok = () => {
    window.open("https://www.tiktok.com/tiktok.com/@fatimatfayli443", "_blank");
  };

  const redirectToGmail = () => {
    window.open("mailto:fatima.h.tfaily.com", "_blank");
  };

  const [phoneNumber, setPhoneNumber] = useState("71153332");
  const link = `https://wa.me/${phoneNumber}`;

  const openChat = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="footer">
      <div className="div_footer">
        <div className="menuFooter">
          <a href="/">Home</a>
          <a href="/AllProducts">Products</a>
          <a href="/Girls">Girls</a>
          <a href="/Boys">Boys</a>
          <a href="/Contact">Contact Us</a>
          <a href="/Carts">Carts</a>
        </div>
        <div className="contactFooter">
          <h2 className="Footer_title">Contact</h2>
          <p className="contactFooter_p">
            Palm Court Bldg M, 501/B, 5th Floor, New Link Road, Beside Goregaon
            Sports Complex, Malad West, Mumbai, 400064, Maharashtra.
          </p>
          <a
            className="phoneFooter_a"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              openChat();
            }}
          >
            <img className="phoneFooter_img" src={phone} />
            <p className="phoneFooter_p">+961 71/153332</p>
          </a>
          <a
            className="emailFooter_a"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              redirectToGmail();
            }}
          >
            <img className="emailFooter_img" src={email} />
            <p className="emailFooter_p">Mini.Fashion@gmail.com</p>
          </a>
        </div>
        <div className="socialMediaFooter">
          <h2 className="Footer_title">Social Media</h2>
          <a
            className="socialMediaFooter_a"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              redirectToFacebook();
            }}
          >
            <img className="socialMediaFooter_img" src={facebook} />
            <p className="socialMediaFooter_p">Mini Fashion</p>
          </a>
          <a
            className="socialMediaFooter_a"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              redirectToInstagram();
            }}
          >
            <img className="socialMediaFooter_img" src={instagram} />
            <p className="socialMediaFooter_p">Mini Fashion</p>
          </a>
          <a
            className="socialMediaFooter_a"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              redirectToTiktok();
            }}
          >
            <img className="socialMediaFooter_img" src={tiktok} />
            <p className="socialMediaFooter_p">Mini Fashion</p>
          </a>
        </div>
      </div>
      <div className="copyRight">
        <a className="copyRight_a" href="/Dashboard">
          © Copyrights 2023.Mini Fashion.All Rights Reserved.
        </a>
      </div>
    </div>
  );
};

export default Footer;
