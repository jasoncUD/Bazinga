import React, { FC, useState } from "react";
import "./LessonCategories.css";
import { Category } from "../../../interfaces/category";
import Lesson from "../Lesson";

interface LessonCategoriesProps {
  categoryList: Category[];
}

const LessonCategories: React.FC<LessonCategoriesProps> = (props) => {
  const [isLesson, setIsLesson] = useState(false);
  const [isShowCategory, setIsShowCategory] = useState(true);
  // Create state to manage category data
  const [categories, setCategories] = useState<Category[]>(props.categoryList);
  const [categoryLesson, setCategoryLesson] = useState<string>("math");


  // Callback function to update category correct count

  const handleCategoryClick = (category: Category) => {
    setCategoryLesson(category.name);
    setIsLesson(true);
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

      {isLesson && (
        <Lesson
          categoryLesson={categoryLesson}
          setIsShowCategory={setIsShowCategory}
          setIsPlaying={setIsLesson}
        />
      )}
    </div>
  );
};

export default LessonCategories;
