import React, { FC, useState } from "react";
import "./Categories.css"; // Assume you have some basic styles defined
import Playing from "../Playing/Playing";
import { Category } from "../../../interfaces/category";
import { Question } from "../../../interfaces/question";

interface CategoriesProps {
  categoryList: Category[];
}

const Categories: React.FC<CategoriesProps> = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const promptPlaying = (questions: Question[]) => {

  };
  return (
    <div className="categories-container">
      <h1>Categories</h1>
      <div className="category-list">
        {props.categoryList.map((category) => (
          <div key={category.name} className="category-item">
            <button> onClick={() => promptPlaying(category.questions)} {category.name}</button>
          </div>
        ))}
      </div>
      {isPlaying && <Playing />}
    </div>
  );
};

export default Categories;
