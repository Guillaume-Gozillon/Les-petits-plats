/* eslint-disable no-extend-native */
import { DropdownIngredient } from './dropdown/DropdownIngredient.js'
import { DropdownAppliance } from './dropdown/DropdownAppliance.js'
import { DropdownUstensile } from './dropdown/DropdownUstensile.js'

import { BuildFilter } from './BuildFilter.js'

import { Recipes } from '../data/Recipes.js'
import { dataFetch } from './Fetch.js'
import { Search } from './Search.js'

function updateView () {
  console.log('####################### Filtres disponibles : ####################### ')

  console.log('----- Ingredients -----')
  //console.log(dataFetch.extractIngredient())

  console.log('----- Ustensibles -----')
  console.log(dataFetch.extractUstensibles())

  console.log('----- Tools -----')
  console.log(dataFetch.extractTools())

  console.log('### Recettes trouvées (' + dataFetch.recipes.length + ') ###')
}

updateView()
Search.selectIngredient('Tomate')
Search.selectUstensils('verres')
updateView()
Search.reset()
updateView()

String.prototype.splitWords = function () {
  return this
    .trim()
    .replace(/  +/g, ' ')
    .split(' ')
}

Array.prototype.unique = function () {
  return this.filter(function (value, index, self) {
    return self.indexOf(value) === index
  })
}
// _-_-_-_-_-_-_-_-_-_-_-_EVENT_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

class ListEvent {
  constructor () {
    this.searchbar = document.querySelector('#searchbar')
    this.searchKeyword = document.querySelectorAll('.searchKeyword')
    this.liTargeted = document.querySelectorAll('.liTargeted')

    this.getAllFilters()
  }

  getAllFilters () {
    this.searchKeyword.forEach(tags => tags.addEventListener('input', e => {
      askData.askKeywords(e.target.value.splitWords())
    }))
  }

  getInputSearchbar () {
    this.searchbar.addEventListener('input', e => {
      this.keywords = e.target.value.splitWords()
      dom.setKeywords(this.keywords.unique(), '4', 'YES')
    })
  }
}

new ListEvent()
// _-_-_-_-_-_-_-_-_-_-_-_FIN_EVENT_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

class SortData {
  constructor (JSON) {
    this.data = JSON

    this.askKeywords()
  }

  askKeywords (keywords) {
    this.keywords = keywords
    console.log(this.keywords)
  }
}

const askData = new SortData(Recipes)

// build DOM --------------
const dom = new BuildFilter(Recipes)
console.log(dom)

// const normalizeString = str => {
//   return str
//     .toString()
//     .toLowerCase()
//     .normalize('NFD')
//     .replace(/[\u0300-\u036f]/g, '')
// }

// EVENEMENT AU CLICK DU FILTRE
document.querySelector('#searchAppliance').addEventListener('click', e => {
  document.querySelector('#tags')
    .insertAdjacentHTML('afterbegin', `<p class="tagAdd">${e.target.textContent}</p>`)
})

// -----------FIN ---------------

new DropdownIngredient()
new DropdownAppliance()
new DropdownUstensile()

// this.tagsLink = document.querySelectorAll(`#inputList--${options.context} [data-js="getTag"]`)
//
// this.tagsLink.forEach((tags) => tags.addEventListener('click', (e) => {
//  e.preventDefault(); e.stopPropagation()
//  this.getTag(e.target)
// }))

// ========== TOUT LES EVENT SAUVEGARDE ==========
/*
  this.ingredientNode = document.querySelector('#inputIngredient')
  this.applianceNode = document.querySelector('#applianceInput')
  this.ustensileNode = document.querySelector('#ustensileInput')

  getInputIngredient () {
    this.ingredientNode.addEventListener('input', e => {
      console.log(e.target.value.splitWords())
    })
  }

  getInputApplicance () {
    this.applianceNode.addEventListener('input', e => {
      console.log(e.target.value.splitWords())
    })
  }

  getInputUstensile () {
    this.ustensileNode.addEventListener('input', e => {
      console.log(e.target.value.splitWords())
    })
  }

  getApplicanceByClick () {
    this.liTargeted.addEventListener('click', e => {
      console.log(e.target.value)
    })
  }

  // this.getInputSearchbar()
  // this.getInputIngredient()
  // this.getInputApplicance()
  // this.getInputUstensile()
  // this.getApplicanceByClick()
  */
