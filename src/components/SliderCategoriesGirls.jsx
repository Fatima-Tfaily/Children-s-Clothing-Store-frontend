import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/categories.css";
import images from "../images/depositphotos_187705130-stock-photo-two-beautiful-girls-and-boys.jpg";
import pants from "../images/16880061339c86e47984f2d6fcefd431d0b26ffccf_thumbnail_336x.jpg";
import dresses from "../images/d50ea3b93fa57f18be5363146a8c8a0a.jpg";
import tops from "../images/b18c87ab59f4cd166bd9328b1d3ddb07.jpg";
import sets from "../images/M13_DSC8255MIRANDAPUBLICIDADINV22_grande.webp";
import jeans from "../images/71UdzFcQl5L._AC_UL1350_.jpg";
import jackets from "../images/Pink-Girls-Winter-Jackets-Coats-Imitated-Mink-Cashmere-Kids-Parkas-Woolen-Coat-For-Girls-Outerwear-Children.webp";
import skirts from "../images/503cf96e5a2fed85c09448d2e8302704.jpg_720x720q80.jpg";
import overalls from "../images/e5aeb2dfd83ff2083b832ca2c8356d22.jpg";

function CategoriesHomeG() {
  var settings = {
    dots: true,
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          display: "none",
          borderRadius: "50%",
        }}
      />
    ),
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div>
      <section className="section-white">
        <div className="yellow-background"></div>

        <div className="carousel">
          <Slider {...settings}>
            <div className="home-category">
              <div className="border">
                <img src={pants} className="catg-img" alt="pic" />
                <div className="desc">
                  <div className="ctn">
                    {" "}
                    <h1 className="title">Pants</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-category">
              <div className="border">
                <img src={dresses} className="catg-img" alt="pic" />
                <div className="desc">
                  <div className="ctn">
                    {" "}
                    <h1 className="title">Dresses</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-category">
              <div className="border">
                <img src={tops} className="catg-img" alt="pic" />
                <div className="desc">
                  <div className="ctn">
                    {" "}
                    <h1 className="title">Tops</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-category">
              <div className="border">
                <img src={sets} className="catg-img" alt="pic" />
                <div className="desc">
                  <div className="ctn">
                    {" "}
                    <h1 className="title">Sets</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-category">
              <div className="border">
                <img src={jeans} className="catg-img" alt="pic" />
                <div className="desc">
                  <div className="ctn">
                    {" "}
                    <h1 className="title">Jeans</h1>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="home-category">
              <div className="border">
                <img src={jackets} className="catg-img" alt="pic" />
                <div className="desc">
                  <div className="ctn">
                    {" "}
                    <h1 className="title">Jackets</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-category">
              <div className="border">
                <img src={skirts} className="catg-img" alt="pic" />
                <div className="desc">
                  <div className="ctn">
                    {" "}
                    <h1 className="title">Skirts</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-category">
              <div className="border">
                <img src={overalls} className="catg-img" alt="pic" />
                <div className="desc">
                  <div className="ctn">
                    {" "}
                    <h1 className="title">Overalls</h1>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default CategoriesHomeG;
