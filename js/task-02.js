const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const IngredientsRef = document.querySelector("#ingredients");

const makeIngredient = (ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");

  return item;
};

const makeIngredients = ingredients.map(makeIngredient);

IngredientsRef.append(...makeIngredients);
