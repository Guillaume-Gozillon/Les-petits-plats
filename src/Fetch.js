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
    this.recipes = Recipes.filter(function (recipe) {
      // MATCH AVEC LES INGREDIENTS SELECTIONNÉS = TRUE sinon FALSE (n'est pas ajouté a la list)
      const ingredientName = []

      recipe.ingredients.forEach(test => {
        ingredientName.push(test.ingredient)
      })

      const matchIngredients = Search.selected.ingredients.every((el) => {
        return ingredientName.includes(el)
      })
      if (!matchIngredients) {
        return false
      }

      // MATCH AVEC LES ustensils SELECTIONN
      const matchUstensils = Search.selected.ustensils.every(el => {
        return recipe.ustensils.includes(el)
      })

      if (!matchUstensils) {
        return false
      }
      return true
    })
  },

  // extract Keyword
  extractIngredient: function () {
    const ingredientArr = []
    console.log(ingredientArr)

    this.recipes.forEach(test => {
      return test.ingredients.forEach(x => {
        ingredientArr.push(x.ingredient)
      })
    })
    return ingredientArr.unique().filter(x => !Search.selected.ingredients.includes(x))
  },
  extractUstensibles: function () {
    let ustensils = []
    console.log(ustensils)

    this.recipes.forEach(function (recipe) {
      ustensils = ustensils.concat(recipe.ustensils)
    })
    return ustensils.unique().filter(x => !Search.selected.ustensils.includes(x))
  }
}
