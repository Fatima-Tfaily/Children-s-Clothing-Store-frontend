import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/categories.css";
import pants from "../images/1691547646acfaad18a7d46dc060363f1f59b917f6_thumbnail_720x.webp";
import coats from "../images/3450069108fc2ba3ffed7541316876c7.jpg";
import tops from "../images/images (11).jpg";
import sets from "../images/images (1).jpg";
import jeans from "../images/images (15).jpg";
import jackets from "../images/images (2).jpg";

function CategoriesHomeB() {
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
                <img src={coats} className="catg-img" alt="pic" />
                <div className="desc">
                  <div className="ctn">
                    {" "}
                    <h1 className="title">Coats</h1>
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
                <div className="desc"></div>
              </div>
            </div>
            <div className="home-category">
              <div className="border">
                <div className="desc"></div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default CategoriesHomeB;
