import React, { useState } from "react";
import email from "../images/icons8-email-50 (1).png";
import phone from "../images/icons8-phone-50 (1).png";
import instagram from "../images/icons8-instagram-32.png";
import facebook from "../images/icons8-facebook-50.png";
import tiktok from "../images/icons8-tiktok-50.png";
import user from "../images/icons8-male-user-50 (1).png";
import search from "../images/icons8-search-50.png";
import favorite from "../images/icons8-favorite-50.png";
import cart from "../images/icons8-shopping-bag-50.png";
import "../styles/style.css";

const Header = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Categories", link: "/" },
    { name: "Girls", link: "/" },
    { name: "Boys", link: "/" },
    { name: "Contact Us", link: "/" },
    { name: "Brands", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div>
      <div className="navbar">
        <div className="navEmail">
          <a className="n_email">
            <img className="nEmail" src={email} />
            <p className="n_p_email">Mini.Fashion@gmail.com</p>
          </a>
        </div>
        <div className="navPhone">
          <a className="n_phone">
            <img className="nPhone" src={phone}></img>
            <p className="n_p_phone">+961 71/153 332</p>
          </a>
        </div>
        <div className="navInsta">
          <a className="n_insta">
            <img className="nInsta" src={instagram}></img>
            <p className="n_p_insta">Mini Fashion</p>
          </a>
        </div>
        <div className="navFace">
          <a className="n_face">
            <img className="nFace" src={facebook}></img>
            <p className="n_p_face">Mini Fashion</p>
          </a>
        </div>
        <div className="navTik">
          <a className="n_tik">
            <img className="nTik" src={tiktok}></img>
            <p className="n_p_tik">Mini Fashion</p>
          </a>
        </div>
        <div className="navUser">
          <a className="n_user">
            <img className="nUser" src={user}></img>
            <p className="n_p_user">LogIn/SignUp</p>
          </a>
        </div>
      </div>
      <div className="shadow-md bg-white p-2 border border-customBlue sm:h-12">
        <div className="flex flex-row">
          <div className="flex flex-row">
            <p className="text-customBlue font-imperial pl-5 text-7xl sm:text-m sm:pl-0">
              Mini Fashion
            </p>
            <div className="flex flex-row pl-10 sm:pl-0">
              <input class="w-90 h-8 border border-customBlue mt-5 shadow-md sm:h-5 sm:w-20 sm:ml-10 sm:mt-2" />
              <div class="w-8 h-8 shadow-md bg-white mt-5 border border-customBlue sm:w-5 sm:h-5 sm:mt-0 sm:mt-2">
                <img
                  src={search}
                  className="w-6 h-6 pt-2 pl-2 sm:pt-1 sm:pl-1 sm:w-3 sm:h-3 sm:mt-0"
                />
              </div>
              <div className="flex flex-row pt-6 sm:pt-1 sm:mt-2 sm:h-10 sm:pr-0 sm:pl-0 ">
                <a>
                  <img
                    src={favorite}
                    class="w-6 h-6 ml-5 sm:ml-0 sm:w-3 sm:h-3"
                  />
                </a>
                <a>
                  <img
                    src={cart}
                    class="w-6 h-6 ml-5 sm:ml-0 sm:mr-0 sm:w-3 sm:h-3"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-row text-gray pl-10 pt-6 text-kaisei text-m sm:w-0">
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
                className={`md:flex md:items-center md:mt-0 md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-12 transition-all duration-500 ease-in ${
                  open ? "top-20 opacity-100" : "top-[-490px] "
                }`}
              >
                {Links.map((link) => (
                  <li key={link.name} className="md:ml-5 text-xl md:my-0 my-7">
                    <a
                      href={link.link}
                      className="hover:text-CustomBlue duration-500"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
