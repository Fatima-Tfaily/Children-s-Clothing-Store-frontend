import React from "react";
import "../styles/about.css";
import image from "../images/kids-blog-01.jpg";

const About = () => {
  return (
    <div className="about">
      <h1 className="superClass">About Us</h1>
      <div className="aboutDiv">
        <img className="aboutImg" src={image} />
        <p className="aboutP">
          Kids grow at a fast pace and to ensure that they do not outgrow their
          garments during theirformative years. We, dummy company, located in
          area, city, state make sure to use comfortable and flexible fabric
          that they can wear even after a couple of years. Children today are
          becomingmore fashionable by the day and thus our aim is to please
          them. All shades of colours, sizes and materials are available here,
          for both boys and girls.
        </p>
      </div>
    </div>
  );
};

export default About;
