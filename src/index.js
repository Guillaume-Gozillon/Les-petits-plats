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

    this.getEVENT()
  }

  getEVENT () {
    this.searchbar.addEventListener('input', e => {
      this.resultArr = []
      this.resultArr.push(splitWords(e.target.value))
      let p = document.createElement('p')
      p.textContent = this.resultArr
      console.log('1', document.querySelector('main').firstChild)
      document.querySelector('main').removeChild(document.querySelector('main').querySelector('p'))
      console.log('2', document.querySelector('main').firstChild)

      document.querySelector('main').appendChild(p)

      console.log('RESULT', this.resultArr)
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
