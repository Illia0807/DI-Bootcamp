import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'Work' },
  { id: 2, name: 'Personal' }
];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
