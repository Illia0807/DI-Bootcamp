export const selectCategories = state => state.categories;

export const selectCategoryById = (state, id) =>
  state.categories.find(category => category.id === id);