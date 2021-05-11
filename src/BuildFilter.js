export class BuildFilter {
  constructor (data) {
    this.recipes = data

    this.buildAppliance(this.recipes)
    this.buildUstensils(this.recipes)
    this.buildIngredient(this.recipes)
    this.buildRecipes(this.recipes)
  }

  buildIngredient (data) {
    const ingredientArr = []

    data.forEach(multiArrIngredients => {
      const ingredient = multiArrIngredients.ingredients
      ingredient.forEach(arrIngredient =>
        ingredientArr.push(arrIngredient.ingredient))
    })

    const ingredientsDom = ingredientArr.unique().slice(0, 30)
    document.querySelector('#searchIngredient').innerHTML =
      ingredientsDom.map(item => `<li>${item}</li>`).join('')
  }

  buildAppliance (data) {
    const appareil = data.map(x => x.appliance).unique()
    document.querySelector('#searchAppliance').innerHTML =
      appareil.map(item => `<li class="liTargeted">${item}</li>`).join('')
  }

  buildUstensils (data) {
    const ustensilArr = []

    data.forEach(multiArrUstensils => {
      const ustensil = multiArrUstensils.ustensils
      ustensil.forEach(ArrUstensils => ustensilArr.push(ArrUstensils))
    })

    const ustensilsDom = ustensilArr.unique()
    document.querySelector('#searchUstensile').innerHTML =
      ustensilsDom.map(item => `<li>${item}</li>`).join('')
  }

  buildRecipes (data) {
    document.querySelector('main').innerHTML = data.map(recipe => (`
    <div class="container">
      <div class="empty"></div>
      <div class="content">
        <div class="title">
          <p>${recipe.name}</p>
          <p><i class="far fa-clock"></i> ${recipe.time}min</p>
        </div>
        <div class="recette">
        <div class="ingredient">
          ${recipe.ingredients.map(x =>
            `<p><span class="bolder">${x.ingredient}:</span> ${x.quantity}${x.unit}</p>`).join('')}
        </div>
          <div class="ingredient">
        </div>
          <p class="main-para">${recipe.description}</p>
        </div>
      </div>
    </div>`
    )).join('')
  }
}

/*
  setKeywords (keywords, secondKeywords, thirthKeywords) {
    this.keywords = keywords
    this.secondKeywords = secondKeywords
    this.thirthKeywords = thirthKeywords

    // MERGE PLUSIEURS TABLEAU
    console.log([...this.keywords, this.secondKeywords, this.thirthKeywords])
  }
  */
