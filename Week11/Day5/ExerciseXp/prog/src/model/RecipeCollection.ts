import { RecipeItem } from "./RecipeItem";

export class RecipeCollection {
  private recipes: RecipeItem[] = [];

  addRecipe(recipe: RecipeItem): void {
    this.recipes.push(recipe);
    this.saveToLocalStorage();
  }

  removeRecipe(id: string): void {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== id);
    this.saveToLocalStorage();
  }

  toggleFavorite(id: string): void {
    const recipe = this.recipes.find((r) => r.id === id);
    if (recipe) {
      recipe.isFavorite = !recipe.isFavorite;
      this.saveToLocalStorage();
    }
  }

  getAllRecipes(): RecipeItem[] {
    return this.recipes;
  }

  saveToLocalStorage(): void {
    localStorage.setItem("recipes", JSON.stringify(this.recipes));
  }

  loadFromLocalStorage(): void {
    const data = localStorage.getItem("recipes");
    if (data) {
      const parsed = JSON.parse(data);
      this.recipes = parsed.map((r: any) =>
        Object.assign(new RecipeItem(r.title, r.ingredients, r.instructions), r)
      );
    }
  }

  clearRecipes(): void {
    this.recipes = [];
    this.saveToLocalStorage();
  }
}
