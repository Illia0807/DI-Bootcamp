import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRecipes } from '../api/api';
import { Recipe } from '../types/types';

interface DataState {
  data: Recipe[];
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: [],
  loading: false,
  error: null,
};

export const getRecipes = createAsyncThunk(
  'data/getRecipes',
  async () => {
    const recipes = await fetchRecipes();
    return recipes;
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Wrong!';
      });
  }
});

export default dataSlice.reducer;