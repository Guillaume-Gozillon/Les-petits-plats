/* eslint-disable no-extend-native */
import { Recipes } from '../data/Recipes.js'
import { Search } from './Search.js'

Array.prototype.unique = function () {
  return this.filter(function (value, index, self) {
    return self.indexOf(value) === index
  })
}

const dataFetch = {
  recipes: Recipes,

  updateRecipes: function () {
    this.recipes = Recipes.filter(sortDataBy => {
      // MATCH AVEC LES INGREDIENTS SELECTIONNÉS = TRUE sinon FALSE (n'est pas ajouté a la list)
      const ingredientArray = []

      sortDataBy.ingredients.forEach(item => ingredientArray.push(item.ingredient))

      const sortByIngredients = Search.selected.ingredients.every(item => {
        return ingredientArray.includes(item)
      })

      /*
      POUR RECHERCHE GLOBALE:
      const matchIngredient = Search.selected.ingredients.every(x => {
        return sortDataBy.name.includes(x) ||
        sortDataBy.description.includes(x) ||
        ingredientArray.includes(x)
      })
      */

      if (!sortByIngredients) {
        return false
      }

      // MATCH AVEC LES APPLICANCE SELECTIONN
      const matchAppliance = Search.selected.appliance.every(item => {
        return sortDataBy.appliance.includes(item)
      })

      if (!matchAppliance) {
        return false
      }

      // MATCH AVEC LES USTENSILE SELECTIONN
      const matchUstensils = Search.selected.ustensils.every(item => {
        return sortDataBy.ustensils.includes(item)
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

    this.recipes.forEach(item => {
      return item.ingredients.forEach(x => ingredientArr.push(x.ingredient))
    })
    return ingredientArr.unique().filter(item => {
      return !Search.selected.ingredients.includes(item)
    })
  },

  extractAppliance: function () {
    let appliance = []

    this.recipes.forEach(recipe => {
      appliance = appliance.concat(recipe.appliance)
    })
    return appliance.unique().filter(item => !Search.selected.appliance.includes(item))
  },

  extractUstensibles: function () {
    let ustensils = []

    this.recipes.forEach(recipe => {
      ustensils = ustensils.concat(recipe.ustensils)
    })
    return ustensils.unique().filter(item => !Search.selected.ustensils.includes(item))
  }
}

export { dataFetch }
