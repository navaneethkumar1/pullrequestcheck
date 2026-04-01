fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian")
  .then(response => response.json())
  .then(data => {
    if (!data.meals) {
      document.getElementById("products").innerHTML = "<p>No Indian meals found</p>";
      return;
    }
    data.meals.map(({ strMealThumb, strMeal, idMeal }) => {
      let products = document.getElementById("products");
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .then(response => response.json())
        .then(details => {
          let meal = details.meals[0];
          products.innerHTML += `
            <div class="shoppinglist">
              <img src="${strMealThumb}" alt="${strMeal}">
              <h2>${strMeal}</h2>
              <button class="add-to-cart">Add to Cart</button>
            </div>
          `;
        });
    });
  })
  .catch(error => {
    console.error("Error fetching data:", error);
    document.getElementById("products").innerHTML = "<p>Error loading Indian meals</p>";
  });
