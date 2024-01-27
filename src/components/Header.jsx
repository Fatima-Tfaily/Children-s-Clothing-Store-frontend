import React, { useState, useMemo, useEffect } from "react";
import Email from "../images/icons8-email-50 (1).png";
import phone from "../images/icons8-phone-50 (1).png";
import instagram from "../images/icons8-instagram-32.png";
import facebook from "../images/icons8-facebook-50.png";
import tiktok from "../images/icons8-tiktok-50.png";
import "../styles/style.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Header = () => {
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

  let Links = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/AllProducts" },
    { name: "Girls", link: "/Girls" },
    { name: "Boys", link: "/Boys" },
    { name: "Contact Us", link: "/Contact" },
    { name: "Cart", link: "/Cart" },
  ];

  let [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const isAuthenticated = useMemo(() => {
    return !!Cookies.get("authToken"); // Check if the authentication token exists
  }, []);

  const handleLogout = () => {
    const allCookies = Cookies.get();
    Object.keys(allCookies).forEach((cookieName) => {
      Cookies.remove(cookieName);
    });

    navigate("/Login");
  };

  const [phoneNumber, setPhoneNumber] = useState("71153332");
  const link = `https://wa.me/${phoneNumber}`;

  const redirectToGmail = () => {
    window.open("mailto:fatima.h.tfaily.com", "_blank");
  };

  const openChat = () => {
    window.open(link, "_blank");
  };

  return (
    <div>
      <div className="navbar">
        <div className="navEmail">
          <a
            className="n_email"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              redirectToGmail();
            }}
          >
            <img className="nEmail" src={Email} />
            <p className="n_p_email">Mini.Fashion@gmail.com</p>
          </a>
        </div>
        <div className="navPhone">
          <a
            className="n_phone"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              openChat();
            }}
          >
            <img className="nPhone" src={phone}></img>
            <p className="n_p_phone">+961 71/153 332</p>
          </a>
        </div>
        <div className="navInsta">
          <a
            className="n_insta"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              redirectToInstagram();
            }}
          >
            <img className="nInsta" src={instagram}></img>
            <p className="n_p_insta">Mini Fashion</p>
          </a>
        </div>
        <div className="navFace">
          <a
            className="n_face"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              redirectToFacebook();
            }}
          >
            <img className="nFace" src={facebook}></img>
            <p className="n_p_face">Mini Fashion</p>
          </a>
        </div>
        <div className="navTik">
          <a
            className="n_tik"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              redirectToTiktok();
            }}
          >
            <img className="nTik" src={tiktok}></img>
            <p className="n_p_tik">Mini Fashion</p>
          </a>
        </div>
      </div>
      <div className="shadow-md bg-white p-2 border border-customBlue sm:h-12">
        <div className="flex flex-row">
          <div className="flex flex-row">
            <a href="/">
              <p className="text-customBlue font-imperial pl-5 text-7xl sm:text-m sm:pl-0">
                Mini Fashion
              </p>
            </a>
            <div className="flex flex-row text-gray ml-20 pl-16 pt-4 text-kaisei text-m sm:w-0 width-100%">
              <div
                onClick={() => setOpen(!open)}
                className="text-3xl absolute right-8 top-7 cursor-pointer md:hidden"
              >
                <ion-icon
                  name={open ? "close" : "menu"}
                  style={{ paddingRight: "0px", marginTop: "10px" }}
                ></ion-icon>
              </div>
              <ul
                className={`md:flex md:items-center md:mt-0 md:pb-0 pb-14 absolute md:static bg-white md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 ml-16 transition-all duration-500 ease-in ${
                  open ? "top-20 opacity-100" : "top-[-490px] "
                }`}
              >
                {Links.map((link) => (
                  <li key={link.name} className="md:ml-10 text-xl md:my-0 my-7">
                    <a
                      href={link.link}
                      className="hover:text-CustomBlue duration-500"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                {isAuthenticated ? (
                  <li className="md:ml-10 text-xl md:my-0 my-7">
                    <a onClick={handleLogout} href="#">
                      Logout
                    </a>
                  </li>
                ) : (
                  <li className="md:ml-10 text-xl md:my-0 my-7">
                    <a href="/Login">Login</a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
