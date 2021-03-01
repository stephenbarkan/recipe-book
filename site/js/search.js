// const list = document.querySelector("[data-js='recipe-index']");
// const search = document.querySelector("[data-js='search']");
// const displayItems = document.querySelectorAll("[data-js='recipe']");

// //fetch the json file when person click on search field first time

// let recipeIndex = [];
// const fetchData = () => {
//   fetch("/api/recipes.json")
//     .then((response) => response.json())
//     .then((data) => (recipeIndex = data));
// };

// fetchData();
// // this function is called when the user writes a character and its goal is to remove leading & trailing spaces as well as lower case the string so we can implement a case insensitive search
// const cleanupWord = (word) => {
//   return word.replace(/( )+/g, " ").trim().toLowerCase();
// };

// // this is the function that will perform the actual search
// const filterData = (word) => {
//   return recipeIndex.filter((item) =>
//     item.replace(/( )+/g, " ").toLowerCase().includes(word)
//   );
// };

// const render = (word = "") => {
//   word = cleanupWord(word);
//   const filteredData = filterData(word);
//   console.log(filteredData);
//   //shows all displayItems if search string is empty
//   if (word === "") {
//     displayItems.forEach((displayItem) => {
//       displayItem.classList.remove("hidden");
//     });
//     return false;
//   }
//   //if the item.title does not match one of the displayItems data-search-title values, add class hidden
//   displayItems.forEach((displayItem) => {
//     const title = displayItem.getAttribute("data-search-title");
//     filteredData.forEach((item) => {
//       if (item.includes(title)) {
//         displayItem.style.display = "block";
//       } else {
//         displayItem.style.display = "hidden";
//       }
//     });
//   });
// };

// // render as the user types
// search.addEventListener("input", () => {
//   render(search.value);
// });
