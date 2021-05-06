import { DropdownIngredient } from './dropdown/DropdownIngredient.js'
import { DropdownAppliance } from './dropdown/DropdownAppliance.js'
import { DropdownUstensile } from './dropdown/DropdownUstensile.js'

import { dataJSON } from '../data/secondRecipes.js'

const splitWords = str => {
  return str
    .trim()
    .replace(/  +/g, ' ')
    .split(' ')
}

class ListEVENT {
  constructor () {
    this.searchbar = document.getElementById('searchbar')
    this.applianceNODE = document.getElementById('applianceInput')

    this.keywords = []
    this.secondKeywords = []

    this.getInputSearchbar()
    this.getInputApplicance()
  }

  getInputSearchbar () {
    this.searchbar.addEventListener('input', e => {
      this.keywords = splitWords(e.target.value)
      dom.setKeywords(this.keywords)
    })
  }

  getInputApplicance () {
    this.applianceNODE.addEventListener('input', e => {
      this.secondKeywords = splitWords(e.target.value)
      dom.setKeywords(this.secondKeywords)
    })
  }
}

new ListEVENT()

// build DOM --------------

class BuildDOM {
  constructor (JSON) {
    this.recipes = JSON

    this.buildAppliance(this.recipes)
    this.buildUstensils(this.recipes)
  }

  buildAppliance (obj) {
    document.getElementById('searchAppliance').innerHTML = obj
      .map(x => `<li>${x.appliance}</li>`).join('')
  }

  buildUstensils (obj) {
    document.getElementById('searchUstensile').innerHTML = obj
      .map(x => `<li>${x.ustensils}</li>`).join('')
  }

  setKeywords (keywords, secondKeywords) {
    this.keywords = keywords
    this.secondKeywords = secondKeywords

    console.log(this.keywords)
  }
}

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

/*
THE FOR METHODE TO SORT ARRAY
      for (let i = 0; i < this.keywords.length; i++) {
        // console.log(splitWords(this.resultArr[i]))
        // console.log(dataJSON.map(x => x.name))
        if (normalizeString(dataJSON.map(x => x.name)).includes(this.keywords[i])) {
          console.log('CA FONCTIONNE')
        }

        this.newArr = []
        this.newArr.push(this.keywords.filter(normalizeString(dataJSON.map(x => x.name)).includes(this.keywords[i])))
        console.log('newARR', this.newArr)
      }
*/
