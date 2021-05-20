import { Recipes } from './data/Recipes.js'
import { SearchMain } from './Search.js'

/**
 * Recherche principale | Trie en fonction des keywords
 * @param {Object} dataFetch contient les méthodes de trie
 */

const dataFetch = {
  recipes: Recipes,
  updateRecipes: function () {
    this.recipes = Recipes.filter(sortDataBy => {
      // MATCH AVEC LES INGREDIENTS SELECTIONNÉS

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
}

export { dataFetch }
