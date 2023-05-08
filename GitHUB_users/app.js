import userSearch from "./modules/api.js";
import viewReposetories from "./modules/view.js";

const ul = document.querySelector("#results");
const input = document.querySelector("#searchInput");
const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = input.value;
  const results = await userSearch(username);
  viewReposetories(results, ul);
});
