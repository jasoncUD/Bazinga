import React, { FC, useState } from "react";
import './Categories.css'; // Assume you have some basic styles defined
import Playing from "../Playing/Playing";

interface CategoriesProps {
    task: string;
    subject: string;
}

const Categories: React.FC<CategoriesProps> = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const categories = [
    { name: "Category 1", id: 1 },
    { name: "Category 2", id: 2 },
    { name: "Category 3", id: 3 },
    { name: "Category 4", id: 4 },
    { name: "Category 5", id: 5 },
  ];

  const handleCategoryClick = (categoryId: number) => {
    // This function does nothing right now
  };
  return (
    <div className="categories-container">
      <div className="letslearn">
  <h1>Let's Learn!</h1>
</div>
      <div className="category-list">
        {categories.map((category) => (
          <button
            key={category.id}
            className="category-item"
            onClick={() => handleCategoryClick(category.id)} // Handle click event if needed
          >
            {category.name}
          </button>
        ))}
      </div>
      {isPlaying && (
        <Playing task={props.task} subject={props.subject} />
      )}
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
      <div className="line4"></div>
    </div>
  );
};

export default Categories;
