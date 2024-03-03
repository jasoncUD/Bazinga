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
  const [isShowCategory, setIsShowCategory] = useState(true);
  const [questionList, setQuestionList] = useState<Question[] | null>(null);
  //This function takes in a category parameter
  const handleCategoryClick = (category: Category) => {
    setQuestionList(category.questions);
    setIsPlaying(true);
    setIsShowCategory(false);
  };
  return (
    <div className="categories-container">
      {isShowCategory && (
        <>
          <div className="letslearn">
            <h1>Let's Learn!</h1>
          </div>
          <div className="category-list">
            {props.categoryList.map((category) => (
              <button
                key={category.name}
                className="category-item"
                onClick={() => handleCategoryClick(category)} // Assuming you have a function handleCategoryClick to handle clicks
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          <div className="line4"></div>
        </>
      )}

      {isPlaying && questionList !== null && (
        <Playing questionList={questionList} />
      )}
    </div>
  );
};

export default Categories;
