import React, { FC, useState } from "react";
import './Categories.css'; // Assume you have some basic styles defined
import Playing from "../Playing/Playing";
import { Category } from "../../../interfaces/category";

interface CategoriesProps {
    categoryList: Category[];
}

const Categories: React.FC<CategoriesProps> = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="categories-container">
      <div className="letslearn">
  <h1>Let's Learn!</h1>
</div>
      <div className="category-list">
        {props.categoryList.map((category) => (
          <div
            key={category.name}
            className="category-item"
          >
            {category.name}
          </div>
        ))}
      </div>
      {isPlaying && (
        <Playing />
      )}
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
      <div className="line4"></div>
    </div>
  );
};

export default Categories;
