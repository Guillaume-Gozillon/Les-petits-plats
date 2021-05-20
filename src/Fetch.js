import { Recipes } from './data/Recipes.js'
import { SearchMain } from './Search.js'

/**
 * Recherche principale | Trie en fonction des keywords
 * Si la recette match avec includes => renvoie TRUE Sinon FASLE
 * @param {Object} dataFetch contient les méthodes de trie
 * @returns {Boolean}
 */

const dataFetch = {
  recipes: Recipes,
  updateRecipes: function () {
    this.recipes = Recipes.filter(sortDataBy => {
      return SearchMain.selected.main.every(item => {
        return sortDataBy.name.toLowerCase().includes(item) ||
          sortDataBy.description.toLowerCase().includes(item) ||
          sortDataBy.appliance.toLowerCase().includes(item) ||
          sortDataBy.ustensils.some(x => x.toLowerCase().includes(item)) ||
          sortDataBy.ingredients.some(y => y.ingredient.toLowerCase().includes(item))
      })
    })
  }
}

export { dataFetch }
