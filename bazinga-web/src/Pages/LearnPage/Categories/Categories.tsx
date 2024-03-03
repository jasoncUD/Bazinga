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
      <h1>Categories</h1>
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
    </div>
  );
};

export default Categories;
