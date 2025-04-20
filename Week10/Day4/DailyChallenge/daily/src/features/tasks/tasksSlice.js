import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'Write report', categoryId: 1, completed: false },
  { id: 2, name: 'Read book', categoryId: 2, completed: true },
  { id: 3, name: 'Exercise', categoryId: 1, completed: false }
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    }
  }
});

export const { addTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;