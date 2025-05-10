/*import React from "react";
import "./CategoryFilter.css";

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory, onClearFilter }) => {
  return (
    <div className="category-filter">
      <button
        className={`category-button ${selectedCategory === null ? "active" : ""}`}
        onClick={onClearFilter}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`category-button ${selectedCategory === category ? "active" : ""}`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

*/


import React from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory, onClearFilter, showOnMobile }) => {
  return (
    <div
      className={`category-filter-wrapper ${showOnMobile ? 'visible' : 'hidden'}`}
    >
      <div className="category-filter">
        <button
          className={`category-button ${selectedCategory === '' ? 'active' : ''}`}
          onClick={onClearFilter}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
