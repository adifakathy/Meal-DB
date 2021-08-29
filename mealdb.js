//document.getElementById('error-message').style.display = 'none';
const searchFood = async () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    //clear data
  searchField.value = '';
 // document.getElementById('error-message').style.display = 'none';
  if (searchText == '') {
              const  alertinfo=alert('Please Enter Correct Value');
                cupponInput.value = '';
  }
  else {
      //load data
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
      `;
    // async diye fetch er kaj o kora jay .
   
    try {
      const res = await fetch(url);
    const data = await res.json();
    displaySearchResult(data.meals);
    }
    catch {
      console.log(error);
    }
    
      // fetch(url)
      //     .then(res => res.json())
      //     .then(data => displaySearchResult(data.meals));
      
  }
  
}

const displaySearchResult = meals => {
  const searchresult = document.getElementById('search-result');
  searchresult.textContent = '';
    meals.forEach(meal => {
        console.log(meal);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">
           ${meal.strInstructions.slice(0,200)}
          </p>
        </div>
      </div>`;
        searchresult.appendChild(div);
    })
}

const loadMealDetail = mealId => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
      .then(res => res.json())
      .then(data => displayMealDetail(data.meals[0]));
}

const displayMealDetail = meal => {
    console.log(meal);
  const mealDetails = document.getElementById('meal-details');
  mealDetails.textContent = '';
  const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <div class="card">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">
      ${meal.strInstructions.slice(0, 150)}
      </p>
      <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `;
    mealDetails.appendChild(div);
}