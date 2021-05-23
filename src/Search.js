import { dataFetch } from './Fetch.js'

/**
 * Sépare les mots clef en differents tableau
 * @param str
 */

const splitString = str => {
  return str
    .trim()
    .replace(/  +/g, ' ')
    .split(' ')
}

/**
 * Met à jours le tableau des mots clefs
 * @param {[Object]} selected | Tableau contenant les keywords
 * @param {Array} reset => vide le tableau
 * @param {String} selectMain => array.push(keyword)
 */

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
    for (let i = 0; i < main.length; i++) {
      this.selected.main.push(splitString(main[i]))
    }
    dataFetch.updateRecipes()
  }
}

export { SearchMain }
