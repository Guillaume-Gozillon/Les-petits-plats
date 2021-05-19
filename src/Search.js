import { dataFetch } from './Fetch.js'

/**
 * Met à jours le tableau des mots clefs
 * @param {[Object]} selected | Tableau contenant les keywords
 * @param {Array} reset => vide le tableau
 * @param {String} selectMain => array.push(keyword)
 */

const Search = {
  selected: {
    main: [],
    tags: [],
    ingredients: [],
    appliance: [],
    ustensils: []
  },
  reset: function () {
    this.selected = {
      main: [],
      tags: [],
      ingredients: [],
      appliance: [],
      ustensils: []
    }
    dataFetch.updateRecipes()
  },
  selectMain: function (main) {
    this.selected.main.push(main)
    dataFetch.updateRecipes()
  },
  selectTags: function (tags) {
    this.selected.tags.push(tags)
    dataFetch.updateRecipes()
  },
  selectIngredient: function (ingredient) {
    this.selected.ingredients.push(ingredient)
    dataFetch.updateRecipes()
  },
  selectAppliance: function (appliance) {
    this.selected.appliance.push(appliance)
    dataFetch.updateRecipes()
  },
  selectUstensils: function (ustensil) {
    this.selected.ustensils.push(ustensil)
    dataFetch.updateRecipes()
  }
}

export { Search }
