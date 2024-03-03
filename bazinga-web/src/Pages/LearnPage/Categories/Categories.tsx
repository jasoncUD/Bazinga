import React, { useState } from "react";
import "./Categories.css";
import Playing from "../Playing/Playing";
// Update the imports to reflect the new interfaces
import { CategoryTemp } from "../../../interfaces/categoryTemp";
import { QuestionTemp } from "../../../interfaces/questionTemp";

interface CategoriesProps {
  categoryList: any[];
}

const Categories: React.FC<CategoriesProps> = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShowCategory, setIsShowCategory] = useState(true);
  const [questionList, setQuestionList] = useState<QuestionTemp[] | null>(null);

  // Update the state to use CategoryTemp
  const [categories, setCategories] = useState<CategoryTemp[]>(props.categoryList);

  // Update any usage of Category to CategoryTemp and Question to QuestionTemp
  const updateCategoryCorrect = () => {
    const updatedCategories = categories.map((category) => {
      // Assuming you have a logic to check if the questions match
      // and a 'correct' property to update in CategoryTemp
      return category; // Update this logic based on your actual data structure
    });
    setCategories(updatedCategories);
  };

  const handleCategoryClick = (category: CategoryTemp) => {
    // Assuming your CategoryTemp has a 'questions' property of type QuestionTemp[]
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
            {categories.map((category: CategoryTemp, index: number) => (
              <button
                key={index} // Assuming 'name' is not a property of CategoryTemp, use index or another unique identifier
                className="category-item"
                onClick={() => handleCategoryClick(category)}
              >
                {category.topic} {/* Assuming 'name' changed to 'topic' in CategoryTemp */}
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
          updateCategoryCorrect={updateCategoryCorrect} // Ensure Playing component is compatible with QuestionTemp[]
        />
      )}
    </div>
  );
};

export default Categories;
