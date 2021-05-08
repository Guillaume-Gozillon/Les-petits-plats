export class BuildFilter {
  constructor (JSON) {
    this.recipes = JSON

    this.buildAppliance(this.recipes)
    this.buildUstensils(this.recipes)
    this.buildIngredient(this.recipes)
  }

  buildIngredient (item) {
    const ingredientArr = []

    item.forEach(multiArrIngredients => {
      const ingredient = multiArrIngredients.ingredients
      ingredient.forEach(arrIngredient =>
        ingredientArr.push(arrIngredient.ingredient))
    })

    const ingredientsDom = ingredientArr.unique().slice(0, 30)
    document.getElementById('searchIngredient').innerHTML =
      ingredientsDom.map(x => `<li>${x}</li>`).join('')
  }

  buildAppliance (item) {
    const appareil = item.map(x => x.appliance).unique()
    document.getElementById('searchAppliance').innerHTML =
      appareil.map(y => `<li class="liTargeted">${y}</li>`).join('')
  }

  buildUstensils (item) {
    const ustensilArr = []

    item.forEach(multiArrUstensils => {
      const ustensil = multiArrUstensils.ustensils
      ustensil.forEach(ArrUstensils => ustensilArr.push(ArrUstensils))
    })

    const ustensilsDom = ustensilArr.unique()
    document.getElementById('searchUstensile').innerHTML =
      ustensilsDom.map(z => `<li>${z}</li>`).join('')
  }

  setKeywords (keywords, secondKeywords, thirthKeywords) {
    this.keywords = keywords
    this.secondKeywords = secondKeywords
    this.thirthKeywords = thirthKeywords

    // MERGE PLUSIEURS TABLEAU
    console.log([...this.keywords, this.secondKeywords, this.thirthKeywords])
  }
}
