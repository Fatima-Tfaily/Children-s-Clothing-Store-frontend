import React from "react";
import "../styles/gallery.css";
import img1 from "../images/16674617695c4ae4a5d2d6c3086d0a3ee1a5858c2c_thumbnail_720x.jpg";
import img2 from "../images/adorable-beautiful-casual-cute.jpg";
import img3 from "../images/images (9).jpg";
import img4 from "../images/images (10).jpg";

const Gallery = () => {
  return (
    <div className="gallery">
      <h1 className="superClass">Gallery</h1>
      <div className="imagesGallery">
        <div className="grImagesGallery">
          <img className="imgGallery" src={img1} />
          <img className="imgGallery" src={img2} />
        </div>
        <div className="grImagesGallery">
          <img className="imgGallery" src={img3} />
          <img className="imgGallery" src={img4} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
