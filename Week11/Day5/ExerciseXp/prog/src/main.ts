import { RecipeCollection } from "./model/RecipeCollection";
import { RecipeItem } from "./model/RecipeItem";
import { RecipeTemplate } from "./templates/RecipeTemplate";

const collection = new RecipeCollection();
collection.loadFromLocalStorage();

const container = document.getElementById("recipeContainer") as HTMLElement;
const template = new RecipeTemplate(collection, container);
template.renderRecipes();

const form = document.getElementById("recipeEntryForm") as HTMLFormElement;
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const titleInput = document.getElementById("recipeTitle") as HTMLInputElement;
  const ingredientsInput = document.getElementById(
    "ingredients"
  ) as HTMLTextAreaElement;
  const instructionsInput = document.getElementById(
    "instructions"
  ) as HTMLTextAreaElement;

  const title = titleInput.value.trim();
  const ingredients = ingredientsInput.value
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
  const instructions = instructionsInput.value.trim();

  if (title && ingredients.length > 0 && instructions) {
    const newRecipe = new RecipeItem(title, ingredients, instructions);
    collection.addRecipe(newRecipe);
    template.renderRecipes();
    form.reset();
  }
});

const clearButton = document.getElementById(
  "clearRecipesButton"
) as HTMLButtonElement;
clearButton.addEventListener("click", () => {
  collection.clearRecipes();
  template.renderRecipes();
});
