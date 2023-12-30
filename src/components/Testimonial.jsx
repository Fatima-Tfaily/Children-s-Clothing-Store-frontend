import React from "react";
import "../styles/testimonial.css";
import image1 from "../images/4764942294e1c125d4cce3940ec35709.jpg";
import image2 from "../images/images (7).jpg";
import user from "../images/icons8-male-user-50 (1).png";

const testimonial = () => {
  return (
    <div className="testimonial">
      <h1 className="superClass">Testimonials</h1>
      <div className="testimonialDiv">
        <div className="firstImage">
          <img className="testFirstImage" src={image1} />
        </div>
        <div className="testimonialContent">
          <p className="testContent">
            Very good product. Very nice cloth and stitch quality. And price is
            very reasonable. Fitting is very good. Gofor it.
          </p>
          <div className="testUser">
            <div className="testCircle">
              <div className="testCircle2">
                <img className="testimonialImg" src={user} />
              </div>
            </div>
            <p className="test_user">Jayshree Shah</p>
          </div>
        </div>
        <div className="scdImage">
          <img className="testSecondImage" src={image2} />
        </div>
      </div>
    </div>
  );
};

export default testimonial;
