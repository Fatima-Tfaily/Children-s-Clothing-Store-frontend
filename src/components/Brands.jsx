import React from "react";
import "../styles/brands.css";
import img1 from "../images/Capture.PNG";
import img2 from "../images/Capture1.PNG";
import img3 from "../images/Capture2.PNG";
import img4 from "../images/Capture3.PNG";
import img5 from "../images/Capture4.PNG";

const Brands = () => {
  return (
    <div className="gallery">
      <h1 className="superClass">Top Brands</h1>
      <div className="imagesBrand">
        <img className="imgBrand" src={img1} />
        <img className="imgBrand" src={img2} />
        <img className="imgBrand" src={img3} />
        <img className="imgBrand" src={img4} />
        <img className="imgBrand" src={img5} />
      </div>
    </div>
  );
};

export default Brands;
