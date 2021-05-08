import { DropdownIngredient } from './dropdown/DropdownIngredient.js'
import { DropdownAppliance } from './dropdown/DropdownAppliance.js'
import { DropdownUstensile } from './dropdown/DropdownUstensile.js'

import { BuildFilter } from './BuildFilter.js'

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
// _-_-_-_-_-_-_-_-_-_-_-_EVENT_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
class ListEVENT {
  constructor () {
    this.searchbar = document.getElementById('searchbar')
    this.applianceNODE = document.getElementById('applianceInput')
    this.liTargeted = document.getElementsByClassName('liTargeted')

    this.getInputSearchbar()
    this.getInputApplicance()

    // const testARR = [1, 1, 2, 2, 3, 4]
    // console.log(testARR.unique())

    // this.getApplicanceByClick()
  }

  getInputSearchbar () {
    this.searchbar.addEventListener('input', e => {
      this.keywords = splitWords(e.target.value)
      dom.setKeywords(this.keywords.unique(), '4', 'YES')
    })
  }

  getInputApplicance () {
    this.applianceNODE.addEventListener('input', e => {
      this.carotte = splitWords(e.target.value)
      console.log(splitWords(e.target.value))
      // dom.setKeywords(this.keywords.unique())
    })
  }

  getApplicanceByClick () {
    this.liTargeted.addEventListener('click', e => {
      console.log(e.target.value)
    })
  }
}

new ListEVENT()
// _-_-_-_-_-_-_-_-_-_-_-_FIN_EVENT_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

class TrieDATA {
  constructor (JSON) {
    this.data = JSON
    console.log(this.data)
  }
}

new TrieDATA(dataJSON)

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
