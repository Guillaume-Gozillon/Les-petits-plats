import { dataFetch } from './Fetch.js'

/**
 * Met à jours le tableau des mots clefs
 * @param {[Object]} selected | Tableau contenant les keywords
 * @param {Array} reset => vide le tableau
 * @param {String} selectMain => array.push(keyword)
 */

const splitString = str => {
  return str
    .trim()
    .replace(/  +/g, ' ')
    .split(' ')
}

const SearchMain = {
  selected: {
    main: []
  },
  reset: function () {
    this.selected = {
      main: []
    }
    dataFetch.updateRecipes()
  },
  selectMain: function (main) {
    // this.selected.main.push(main)
    for (let i = 0; i < main.length; i++) {
      this.selected.main.push(splitString(main[i]))
    }
    dataFetch.updateRecipes()
  }
}

export { SearchMain }
