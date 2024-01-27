import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/categories.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CategoriesHome() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://minifashion-backend.onrender.com/categories/getAll"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching Categories:", error);
        setError("Error fetching Categories. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    navigate(`/Products/${categoryId}`);
  };

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
            {categories.map((category, index) => (
              <div
                className="home-category"
                key={category.categoryId}
                onClick={() => handleCategoryClick(category.categoryId)}
              >
                <div className="border">
                  <img
                    src={category.categoryImage}
                    className="catg-img"
                    alt="pic"
                  />
                  <div className="desc">
                    <div className="ctn">
                      {" "}
                      <h1 className="title">{category.categoryName}</h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default CategoriesHome;
