import React from "react";
import SliderCategoriesGirls from "../components/SliderCategoriesGirls";
import SliderCategoriesBoys from "../components/SliderCategoriesBoys";
import "../styles/categories.css";

const Categories = () => {
  return (
    <div className="categories">
      <h1 className="superClass">Categories</h1>
      <SliderCategoriesGirls />
      <SliderCategoriesBoys />
    </div>
  );
};

export default Categories;
