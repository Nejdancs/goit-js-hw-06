const categoriesRef = document.querySelector("#categories");
const listCategoriesRef = document.querySelectorAll("#categories .item");
// const listCategoriesRef = [...categoriesRef.children]; // альтернативный вариант

console.log(`Number of categories: ${listCategoriesRef.length}`);

listCategoriesRef.forEach((item) => {
  const titleOfCategoryRef = item.querySelector("h2");
  const elementsOfCategoryRef = item.querySelectorAll("li");
  // const titleOfCategoryRef = item.firstElementChild; // альтернативный вариант
  // const elementsOfCategoryRef = item.lastElementChild.children; // альтернативный вариант

  console.log(`Category: ${titleOfCategoryRef.textContent}`);
  console.log(`Elements: ${elementsOfCategoryRef.length}`);
});
