/* eslint-disable no-extend-native */
import { DropdownIngredient } from './dropdown/DropdownIngredient.js'
import { DropdownAppliance } from './dropdown/DropdownAppliance.js'
import { DropdownUstensile } from './dropdown/DropdownUstensile.js'

import { BuildFilter } from './BuildFilter.js'

import { dataJSON } from '../data/secondRecipes.js'

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
    this.searchbar = document.getElementById('searchbar')
    this.ingredientNode = document.getElementById('inputIngredient')
    this.applianceNode = document.getElementById('applianceInput')
    this.ustensileNode = document.getElementById('ustensileInput')

    // this.liTargeted = document.getElementsByClassName('liTargeted')

    this.getInputSearchbar()
    this.getInputIngredient()
    this.getInputApplicance()
    this.getInputUstensile()
    // this.getApplicanceByClick()
  }

  getInputSearchbar () {
    this.searchbar.addEventListener('input', e => {
      this.keywords = e.target.value.splitWords()
      dom.setKeywords(this.keywords.unique(), '4', 'YES')
    })
  }

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
}

new ListEvent()
// _-_-_-_-_-_-_-_-_-_-_-_FIN_EVENT_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

class SortData {
  constructor (JSON) {
    this.data = JSON
    console.log(this.data)
  }
}

new SortData(dataJSON)

// build DOM --------------
const dom = new BuildFilter(dataJSON)
console.log(dom)

const toTest = document.getElementsByClassName('tagAdd')
for (let i = 0; i < toTest.length; i++) {
  const el = toTest[i]
  console.log(el.textContent)
}

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
