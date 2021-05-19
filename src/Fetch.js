import { Recipes } from './data/Recipes.js'
import { Search } from './Search.js'

/**
 * Trie en fonction des keywords
 * @param {Object} dataFetch contient les méthodes de trie
 */

const dataFetch = {
  recipes: Recipes,
  updateRecipes: function () {
    this.recipes = Recipes.filter(sortDataBy => {
      // MATCH AVEC LES INGREDIENTS SELECTIONNÉS = TRUE sinon FALSE (n'est pas ajouté a la list)

      const matchMain = Search.selected.main.every(item => {
        return sortDataBy.name.includes(item) ||
        sortDataBy.description.includes(item) ||
        sortDataBy.ingredients.some(x => x.ingredient.includes(item))
      })
      if (!matchMain) {
        return false
      }

      const matchIngredients = Search.selected.ingredients.every(item => {
        return sortDataBy.ingredients.some(x => x.ingredient.includes(item))
      })
      if (!matchIngredients) {
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
        return sortDataBy.ustensils.some(y => y.includes(item))
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
      return item.ingredients.forEach(item => ingredientArr.push(item.ingredient))
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
    return appliance.filter(item => !Search.selected.appliance.includes(item))
  },

  extractUstensibles: function () {
    let ustensils = []

    this.recipes.forEach(recipe => {
      ustensils = ustensils.concat(recipe.ustensils)
    })
    return ustensils.filter(item => !Search.selected.ustensils.includes(item))
  }
}

export { dataFetch }
