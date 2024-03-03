import React, { FC, useState } from "react";
import "./Categories.css";
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

  // Create state to manage category data
  const [categories, setCategories] = useState<Category[]>(props.categoryList);

  // Callback function to update category correct count
  const updateCategoryCorrect = () => {
    const updatedCategories = categories.map((category) => {
      if (category.questions === questionList) {
        return {
          ...category,
          correct: category.correct + 1, // Increase correct count by 1
        };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

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
            {categories.map((category: Category) => (
              <button
                key={category.name}
                className="category-item"
                onClick={() => handleCategoryClick(category)}
              >
                {category.name} {category.correct}/{category.questions.length}
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
        <Playing
          questionList={questionList}
          setIsShowCategory={setIsShowCategory}
          setIsPlaying={setIsPlaying}
          updateCategoryCorrect={updateCategoryCorrect} // Pass the callback function
        />
      )}
    </div>
  );
};

export default Categories;