import { Recipes } from './data/Recipes.js'
import { SearchMain } from './Search.js'

/**
 * Trie en fonction des keywords
 * @param {Object} dataFetch contient les méthodes de trie
 */

const dataFetch = {
  recipes: Recipes,

  updateRecipes: function () {
    this.recipes = Recipes.filter(sortDataBy => {
      // MATCH AVEC LES INGREDIENTS SELECTIONNÉS = TRUE sinon FALSE (n'est pas ajouté a la list)

      const matchMain = SearchMain.selected.main.every(item => {
        return sortDataBy.name.toLowerCase().includes(item) ||
        sortDataBy.description.toLowerCase().includes(item) ||
        sortDataBy.ingredients.some(x => x.ingredient.toLowerCase().includes(item))
      })
      if (!matchMain) {
        return false
      }
      return true
    })
  }
  /*,

  // extract Keyword
  extractIngredient: function () {
    const ingredientArr = []

    this.recipes.forEach(item => {
      return item.ingredients.forEach(item => ingredientArr.push(item.ingredient))
    })
    return ingredientArr.unique().filter(item => {
      return !SearchMain.selected.ingredients.includes(item)
    })
  },

  extractAppliance: function () {
    let appliance = []

    this.recipes.forEach(recipe => {
      appliance = appliance.concat(recipe.appliance)
    })
    return appliance.filter(item => !SearchMain.selected.appliance.includes(item))
  },

  extractUstensibles: function () {
    let ustensils = []

    this.recipes.forEach(recipe => {
      ustensils = ustensils.concat(recipe.ustensils)
    })
    return ustensils.filter(item => !SearchMain.selected.ustensils.includes(item))
  }
  */
}

export { dataFetch }
