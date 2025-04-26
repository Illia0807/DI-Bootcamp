import { Recipe } from "../types/types.ts";

// export async function fetchRecipes(): Promise<Recipe[]> {
//   const response = await fetch("https://rapidapi.com/spoonacular/api/recipe-food-nutrition");
//   if (!response.ok) {
//     throw new Error("Failed to fetch recipes");
//   }
//   return response.json();
// }/




//Mock API response for testing purposes 
// This is a mock function to simulate an API call. In a real-world scenario, you would replace this with an actual API call.

export async function fetchRecipes(): Promise<Recipe[]> {
  return Promise.resolve([
    {
      id: 1,
      title: "Pasta",
      ingredients: ["Pasta", "Tomato", "Cheese"],
      instructions: "Boil pasta. Add sauce. Serve hot.",
      isFavorite: false,
    },
    {
      id: 2,
      title: "Salad",
      ingredients: ["Lettuce", "Tomato", "Cucumber"],
      instructions: "Mix ingredients. Add dressing. Serve cold.",
      isFavorite: true,
    },
  ]);
}
