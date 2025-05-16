
import React from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
  onClearFilter,
}) => {
  if (!categories || categories.length === 0) return null;

  return (
    <div className="category-filter">
      <button
        className={`category-button ${selectedCategory === '' ? 'active' : ''}`}
        onClick={() => onClearFilter()}
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
  );
};

export default CategoryFilter;
