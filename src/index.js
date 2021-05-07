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

Array.prototype.unique = function () {
  return this.filter(function (value, index, self) {
    return self.indexOf(value) === index
  })
}

class ListEVENT {
  constructor () {
    this.searchbar = document.getElementById('searchbar')
    this.applianceNODE = document.getElementById('applianceInput')

    this.getInputSearchbar()
    this.getInputApplicance()

    const testARR = [1, 1, 2, 2, 3, 4]

    console.log(testARR.unique())
  }

  getInputSearchbar () {
    this.searchbar.addEventListener('input', e => {
      this.keywords = splitWords(e.target.value)
      dom.setKeywords(this.keywords.unique())
      console.log(dom.setKeywords(this.keywords.unique()))
    })
  }

  getInputApplicance () {
    this.applianceNODE.addEventListener('input', e => {
      this.secondKeywords = splitWords(e.target.value)
      dom.setKeywords(this.secondKeywords.unique())
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

  buildAppliance (item) {
    const appareil = item.map(x => x.appliance).unique()
    console.log('TEST', appareil)

    document.getElementById('searchAppliance').innerHTML = `<li>${appareil}</li>`
  }

  buildUstensils (obj) {
    document.getElementById('searchUstensile').innerHTML = obj
      .map(x => `<li>${x.ustensils}</li>`).join('')
  }

  setKeywords (keywords, secondKeywords) {
    this.keywords = keywords
    this.secondKeywords = secondKeywords

    console.log(this.keywords, this.secondKeywords)
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
