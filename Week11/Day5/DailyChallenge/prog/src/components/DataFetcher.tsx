import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../features/store';
import { getRecipes } from '../features/dataSlice';

export function DataFetcher() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Recipes</h1>
      {data.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <ul>
            {recipe.ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
          <p>{recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
}