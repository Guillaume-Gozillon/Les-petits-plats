/* eslint-disable no-extend-native */
import { DropdownIngredient } from './dropdown/DropdownIngredient.js'
import { DropdownAppliance } from './dropdown/DropdownAppliance.js'
import { DropdownUstensile } from './dropdown/DropdownUstensile.js'

import { BuildFilter } from './BuildFilter.js'

import { dataFetch } from './Fetch.js'
import { Search } from './Search.js'

function updateView () {
  console.log(dataFetch.recipes.forEach(x => console.log(x)), `------ ${dataFetch.recipes.length} Recettes trouvées ------`)
}






// updateView()

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
// ------ EVENT ------

class ListEvent {
  constructor () {
    this.searchbar = document.querySelector('#searchbar')
    this.searchKeyword = document.querySelectorAll('.searchKeyword')
    this.liTargeted = document.querySelectorAll('.liTargeted')
    this.ingredientNode = document.querySelector('#inputIngredient')

    this.getAllFilters()
    this.getInputIngredient()
  }

  getInputIngredient () {
    this.ingredientNode.addEventListener('input', e => {
      console.log(e.target.value.splitWords())
      Search.reset()
      updateView()
      Search.selectIngredient(e.target.value)
    })
  }

  getAllFilters () {
    this.searchKeyword.forEach(tags => tags.addEventListener('input', e => {
      e.target.value.splitWords()
    }))
  }

  getInputSearchbar () {
    this.searchbar.addEventListener('input', e => {
      this.keywords = e.target.value.splitWords()
      // dom.setKeywords(this.keywords.unique(), '4', 'YES')
    })
  }
}

const dom = new ListEvent()
// ------ FIN_EVENT ------
// updateView()
//Search.selectIngredient('')

Search.selectUstensils('couteau')
Search.selectAppliance('Four')

updateView()

new BuildFilter(dataFetch.recipes)

// const dom = new BuildFilter(Recipes)
// console.log(dom)

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
