function makeJuice(size) {
  let ingredients = [];
  function addIngredients(ing1, ing2, ing3) {
    ingredients.push(ing1, ing2, ing3);
  }
  function displayJuice() {
    const newDiv = document.createElement("div");
    newDiv.textContent = `The client wants a ${size} cocktail, containing ${ingredients.join(
      ","
    )}`;
    document.body.appendChild(newDiv);
  }

  addIngredients("vodka", "beer", "soda");
  addIngredients("appleJuice", "rum", "tequila");
  displayJuice();
}
makeJuice("L");
