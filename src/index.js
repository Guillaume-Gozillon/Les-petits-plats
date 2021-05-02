import { DropdownIngredient } from './dropdown/DropdownIngredient.js'
import { DropdownAppliance } from './dropdown/DropdownAppliance.js'
import { dataJSON } from '../data/secondRecipes.js'

/*
const mainHTML = document.querySelector('main')

let recipes
let searchTerm = ''
*/

const splitWords = str => {
  return str
    .trim()
    .replace(/  +/g, ' ')
    .split(' ')
}

class ListEVENT {
  constructor () {
    this.resultArr = []
    this.searchbar = document.getElementById('searchbar')
    this.applianceNODE = document.getElementById('applianceInput')

    console.log(this.searchbar.textContent)

    document.querySelector('main').innerHTML = this.resultArr

    this.getEVENT()
  }

  getEVENT () {
    this.searchbar.addEventListener('input', e => {
      console.log(splitWords(e.target.value))
    })
  }
}

new ListEVENT()

// TEST --------------
const normalizeString = str => {
  return str
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

class InitJSON {
  constructor (JSON) {
    this.recipesArr = []
    this.recipes = JSON

    // console.log('JSONArr', this.recipesArr);
    console.log(normalizeString(this.recipes[1].id))
  }
}

new InitJSON(dataJSON)

// EVENEMENT AU CLICK DU FILTRE
document.getElementById('searchAppliance').addEventListener('click', e => {
  document.getElementById('tags')
    .insertAdjacentHTML('afterbegin', `<p class="tagAdd">${e.target.textContent}</p>`)
})

// -----------FIN ---------------

new DropdownIngredient()
new DropdownAppliance()
