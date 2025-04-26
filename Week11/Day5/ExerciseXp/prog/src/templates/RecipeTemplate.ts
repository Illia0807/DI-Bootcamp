import { RecipeItem } from "../model/RecipeItem";
import { RecipeCollection } from "../model/RecipeCollection";

export class RecipeTemplate {
  constructor(
    private collection: RecipeCollection,
    private container: HTMLElement
  ) {}

  renderRecipes(): void {
    this.container.innerHTML = "";
    const recipes = this.collection.getAllRecipes();

    recipes.forEach((recipe) => {
      const card = document.createElement("div");
      card.className = "recipe-card";
      card.innerHTML = `
        <h2>${recipe.title}</h2>
        <button class="toggle-favorite">${
          recipe.isFavorite ? "Unfavorite" : "Favorite"
        }</button>
        <button class="delete-recipe">Delete</button>
        <details>
          <summary>Details</summary>
          <h4>Ingredients:</h4>
          <ul>${recipe.ingredients
            .map((ing) => `<li>${ing}</li>`)
            .join("")}</ul>
          <h4>Instructions:</h4>
          <p>${recipe.instructions}</p>
        </details>
      `;

      card.querySelector(".toggle-favorite")?.addEventListener("click", () => {
        this.collection.toggleFavorite(recipe.id);
        this.renderRecipes();
      });

      card.querySelector(".delete-recipe")?.addEventListener("click", () => {
        this.collection.removeRecipe(recipe.id);
        this.renderRecipes();
      });

      this.container.appendChild(card);
    });
  }
}
