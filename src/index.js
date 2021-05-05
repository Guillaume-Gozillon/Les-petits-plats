import { DropdownIngredient } from './dropdown/DropdownIngredient.js'
import { DropdownAppliance } from './dropdown/DropdownAppliance.js'
import { dataJSON } from '../data/secondRecipes.js'

const splitWords = str => {
  return str
    .trim()
    .replace(/  +/g, ' ')
    .split(' ')
}

const normalizeString = str => {
  return str
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

class ListEVENT {
  constructor () {
    this.searchbar = document.getElementById('searchbar')
    this.applianceNODE = document.getElementById('applianceInput')

    this.test = 'salut'
    this.keywords = []
    console.log(this.keywords)

    this.getEVENTsearchBar()
  }

  // RAJOUTER STOPWORD

  getEVENTsearchBar () {
    this.searchbar.addEventListener('input', e => {
      console.log(this.test)
      this.keywords = [...splitWords(e.target.value)]
      dom.setKeywords(this.keywords)
    })
  }
}

new ListEVENT()

// build DOM --------------

class BuildDOM {
  constructor (JSON) {
    this.recipesArr = []
    this.recipes = JSON

    console.log(this.keywords)

    // console.log('JSONArr', this.recipesArr);
    // console.log(normalizeString(this.recipes[1].id))
  }

  setKeywords (keywords) {
    this.keywords = keywords
    console.log('KEYWORDS', keywords)
  }
}

const dom = new BuildDOM(dataJSON)

// EVENEMENT AU CLICK DU FILTRE
document.getElementById('searchAppliance').addEventListener('click', e => {
  document.getElementById('tags')
    .insertAdjacentHTML('afterbegin', `<p class="tagAdd">${e.target.textContent}</p>`)
})

// -----------FIN ---------------

new DropdownIngredient()
new DropdownAppliance()

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
