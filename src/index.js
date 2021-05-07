import { DropdownIngredient } from './dropdown/DropdownIngredient.js'
import { DropdownAppliance } from './dropdown/DropdownAppliance.js'
import { DropdownUstensile } from './dropdown/DropdownUstensile.js'

import { BuildDOM } from './BuildDOM.js'

import { dataJSON } from '../data/secondRecipes.js'

const splitWords = str => {
  return str
    .trim()
    .replace(/  +/g, ' ')
    .split(' ')
}

// eslint-disable-next-line no-extend-native
Array.prototype.unique = function () {
  return this.filter(function (value, index, self) {
    return self.indexOf(value) === index
  })
}

class ListEVENT {
  constructor () {
    this.searchbar = document.getElementById('searchbar')
    this.applianceNODE = document.getElementById('applianceInput')
    this.liTargeted = document.getElementById('liTargeted')

    this.getInputSearchbar()
    this.getInputApplicance()

    // const testARR = [1, 1, 2, 2, 3, 4]
    // console.log(testARR.unique())

    //this.getApplicanceByClick()
  }

  getInputSearchbar () {
    this.searchbar.addEventListener('input', e => {
      this.keywords = splitWords(e.target.value)
      dom.setKeywords(this.keywords.unique(), '4')
      // NE MARCHE PAS ?
      // console.log(dom.setKeywords(this.keywords.unique()))
    })
  }

  getInputApplicance () {
    this.applianceNODE.addEventListener('input', e => {
      this.secondKeywords = splitWords(e.target.value)
      // dom.setKeywords(this.keywords.unique())
    })
  }

  getApplicanceByClick () {
    this.liTargeted.addEventListener('click', e => {
      console.log(e.target.value)
      // dom.setKeywords(this.keywords.unique())
    })
  }
}

new ListEVENT()

// build DOM --------------
const dom = new BuildDOM(dataJSON)
console.log(dom)

// const normalizeString = str => {
//   return str
//     .toString()
//     .toLowerCase()
//     .normalize('NFD')
//     .replace(/[\u0300-\u036f]/g, '')
// }

// EVENEMENT AU CLICK DU FILTRE
document.getElementById('searchAppliance').addEventListener('click', e => {
  document.getElementById('tags')
    .insertAdjacentHTML('afterbegin', `<p class="tagAdd">${e.target.textContent}</p>`)
})

// -----------FIN ---------------

new DropdownIngredient()
new DropdownAppliance()
new DropdownUstensile()
