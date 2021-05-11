/* eslint-disable no-extend-native */
import { Recipes } from '../data/Recipes.js'
import { Search } from './Search.js'

Array.prototype.unique = function () {
  return this.filter(function (value, index, self) {
    return self.indexOf(value) === index
  })
}

export const dataFetch = {
  recipes: Recipes,

  updateRecipes: function () {
    this.recipes = Recipes.filter(sortWith => {
      // MATCH AVEC LES INGREDIENTS SELECTIONNÉS = TRUE sinon FALSE (n'est pas ajouté a la list)
      const ingredientName = []

      sortWith.ingredients.forEach(item => {
        ingredientName.push(item.ingredient)
      })

      const matchIngredients = Search.selected.ingredients.every(item => ingredientName.includes(item))
      if (!matchIngredients) {
        return false
      }

      // MATCH AVEC LES ustensils SELECTIONN
      const matchUstensils = Search.selected.ustensils.every(item => sortWith.ustensils.includes(item))

      if (!matchUstensils) {
        return false
      }
      return true
    })
  },

  // extract Keyword
  extractIngredient: function () {
    const ingredientArr = []

    this.recipes.forEach(test => {
      return test.ingredients.forEach(x => ingredientArr.push(x.ingredient))
    })
    return ingredientArr.unique().filter(item => !Search.selected.ingredients.includes(item))
  },

  extractUstensibles: function () {
    let ustensils = []

    this.recipes.forEach(recipe => {
      ustensils = ustensils.concat(recipe.ustensils)
    })
    return ustensils.unique().filter(item => !Search.selected.ustensils.includes(item))
  }
}
