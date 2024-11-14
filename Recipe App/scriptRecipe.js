let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
let userInp = document.getElementById("user-inp");
let suggestions = document.getElementById("suggestions");
let container = document.querySelector(".container");  

userInp.addEventListener("input", async () => {
  const query = userInp.value.trim();
  suggestions.innerHTML = ""; 

  if (query.length > 1) {
    try {
      const response = await fetch(url + query);
      const data = await response.json();

      if (data.meals && data.meals.length > 0) {
        data.meals.forEach(meal => {
          const li = document.createElement("li");
          li.textContent = meal.strMeal;
          li.addEventListener("click", () => {
            userInp.value = meal.strMeal;  
            suggestions.innerHTML = ""; 
          });
          suggestions.appendChild(li);
        });
      }
      else {
        suggestions.innerHTML = "<li>Recipe not found</li>";
      }
    } catch (error) {
      console.error('Error Fetching Data:', error);
    }
  }
});

searchBtn.addEventListener("click", async () => {
  if (userInp.value.length == 0) {
    result.innerHTML = `<h3>Input Field Cannot Be Empty</h3>`;
  } else {
    try {
      const response = await fetch(url + userInp.value);
      const data = await response.json();

      if (data.meals && data.meals.length > 0) {
        let myMeal = data.meals[0];
        console.log(myMeal);
        let ingredients = [];
        let count = 1;
        for (let i in myMeal) {
          if (i.startsWith("strIngredient") && myMeal[i]) {
            let measure = myMeal[`strMeasure` + count] || "";
            ingredients.push(`${measure} ${myMeal[i]}`);
            count += 1;
          }
        }

        result.innerHTML = `
          <img src=${myMeal.strMealThumb}>
          <div class="details">
              <h2>${myMeal.strMeal}</h2>
              <h4>${myMeal.strArea}</h4>
          </div>
          <div id="ingredient-con"></div>
          <div id="recipe">
              <button id="hide-recipe">X</button>
              <pre id="instructions">${myMeal.strInstructions}</pre>
          </div>
          <button id="show-recipe">View Recipe</button>
        `;

        let ingredientCon = document.getElementById("ingredient-con");
        let parent = document.createElement("ul");
        ingredients.forEach((ingredient) => {
          let child = document.createElement("li");
          child.innerText = ingredient;
          parent.appendChild(child);
        });
        ingredientCon.appendChild(parent);

        document.getElementById("hide-recipe").addEventListener("click", () => {
          document.getElementById("recipe").style.display = "none";
        });
        document.getElementById("show-recipe").addEventListener("click", () => {
          document.getElementById("recipe").style.display = "block";
        });
      } else {
        result.innerHTML = `<h3>Receip not found</h3>`;
      }
    } catch (error) {
      result.innerHTML = `<h3>Error Fetching Data</h3>`;
      console.error("Error:", error);
    }
  }
});