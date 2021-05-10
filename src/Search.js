import { dataFetch } from './Fetch.js'

const Search = {
  selected: {
    ingredients: [],
    ustensils: []
  },

  reset: function () {
    this.selected = {
      ingredients: [],
      ustensils: []
    }
    dataFetch.updateRecipes()
  },

  selectIngredient: function (test) {
    this.selected.ingredients.push(test)
    dataFetch.updateRecipes()
  },
  selectUstensils: function (ustensil) {
    this.selected.ustensils.push(ustensil)
    dataFetch.updateRecipes()
  }
}

export { Search }
