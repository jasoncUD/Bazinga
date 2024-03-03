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
  return (
    <div className="categories-container">
      <h1>Categories</h1>
      <div className="category-list">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-item"
          >
            {category.name}
          </div>
        ))}
      </div>
      {isPlaying && (
        <Playing task={props.task} subject={props.subject} />
      )}
    </div>
  );
};

export default Categories;
