import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Categories.css'; // Assume you have some basic styles defined
import { Category } from '../../../interfaces/category';

interface CategoriesProps {
    onCategorySelect: (category: string) => void; // Function to handle category selection
    task: string;
    subject: string;
}

const Categories: React.FC<CategoriesProps> = (props) => {

  const handleCategoryClick = (category: Category ) => {
  };

  return (
    <div className="categories-container">
      {/* Example of hardcoding two categories */}
      {['Math', 'Science'].map((category) => (
        <div
          key={category}
          className="category-circle"
          // onClick={() => handleCategoryClick(category)}
          style={{
            display: 'inline-block',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: '#ff914d',
            textAlign: 'center',
            lineHeight: '100px',
            margin: '10px',
            cursor: 'pointer',
          }}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Categories;
