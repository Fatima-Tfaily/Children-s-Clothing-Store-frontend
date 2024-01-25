import React, { useRef } from "react";
import "../styles/contact.css";
import Header from "./Header";
import Footer from "./Footer";
import Email from "../images/icons8-email-50 (1).png";
import Phone from "../images/icons8-phone-50 (1).png";
import ImageContact from "../images/ImageContact.jpg";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ndi7fgf",
        "template_0tawx5l",
        form.current,
        "OJXfDc9DyIkdZcUr4"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");
          toast.success("Thank you for contacting us!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <Header />
      <h1 className="superClass">Contact Us</h1>
      <div className="divContact">
        <div className="AboutContact">
          <div className="EmailContact">
            <div className="LignDivEmail">
              <div className="GreenDivEmail">
                <div className="DivIconEmail">
                  <img src={Email} />
                </div>
              </div>
            </div>
            <div className="EmailContactDiv">
              <h3 className="HEmail">Email</h3>
              <a className="AEmail">MiniFashion@gmail.com</a>
            </div>
          </div>
          <div className="CallContact">
            <div className="LignDivCall">
              <div className="GreenDivCall">
                <div className="DivIconCall">
                  <img src={Phone} />
                </div>
              </div>
            </div>
            <div className="CallContactDiv">
              <h3 className="HCall">Call</h3>
              <a className="AEmail">+961 71/153 332</a>
            </div>
          </div>
          <div className="TimingContact">
            <div className="LignDivTiming">
              <div className="GreenDivTiming">
                <div className="DivIconTiming">
                  <img src={Phone} />
                </div>
              </div>
            </div>
            <div className="TimingContactDiv">
              <h3 className="HTiming">Our Timing </h3>
              <a className="ATiming">Mon-Sun: 10:00AM-7:00PM</a>
            </div>
          </div>
        </div>
        <div className="ImageContact">
          <img className="imageContact" src={ImageContact} />
        </div>
        <form ref={form} onSubmit={sendEmail} className="FormContact">
          <input
            className="InputFormContact"
            placeholder="Your Name"
            name="user_name"
          />
          <input
            className="InputFormContact"
            placeholder="Your Email"
            name="user_email"
          />
          <textarea
            name="message"
            className="textAreaContact"
            placeholder="Your Message"
          />
          <input className="SubmitFormContact" type="submit" value="Submit" />
        </form>
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
