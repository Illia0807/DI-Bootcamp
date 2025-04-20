import { createSelector } from '@reduxjs/toolkit';

// селектор-фабрика, возвращает мемоизированный селектор
export const makeSelectTasksByCategory = (categoryId) =>
  createSelector(
    [(state) => state.tasks],
    (tasks) => tasks.filter(task => task.categoryId === categoryId)
  );

// кол-во завершённых задач (одиночный селектор можно не оборачивать в фабрику)
export const selectCompletedTasks = createSelector(
  [(state) => state.tasks],
  (tasks) => tasks.filter(task => task.completed).length
);