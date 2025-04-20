import React from "react";
import { useSelector } from "react-redux";
import { selectCategories } from "./categoriesSelectors.js";

const CategorySelector = ({ onSelectCategory }) => {
  const categories = useSelector(selectCategories);

  return (
    <select onChange={(e) => onSelectCategory(e.target.value)}>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default CategorySelector;
