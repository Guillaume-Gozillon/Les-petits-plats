import { DropdownIngredient } from './dropdown/DropdownIngredient.js'
import { DropdownAppliance } from './dropdown/DropdownAppliance.js'
import { DropdownUstensile } from './dropdown/DropdownUstensile.js'

import { SearchMain } from './Search.js'
import { dataFetch } from './Fetch.js'

import { BuildMain } from './BuildMain.js'
import { BuildTags } from './BuildTags.js'

function updateView () {
  console.log(dataFetch.recipes, `${dataFetch.recipes.length} Recettes trouvées`)
}

/**
 * Retourn les differents valeurs separée dans un array
 * @param {String}
 * @returns {Array}
 */

const splitWords = str => {
  return str
    .trim()
    .replace(/  +/g, ' ')
    .split(' ')
}

let keyword = ''
let tags = ''

if (keyword === '') {
  new BuildMain(dataFetch.recipes)
  new BuildTags(dataFetch.recipes)
}

/**
 * Crée les differentes instances pour construire le DOM
 * @param {EventListener} keyword récupère le keyword dans l'input
 * @param {string} reset vide l'array pour mettre à jours
 * @param {string} SearchMain.selectMain remplit l'array avec le keyword
 * @returns {Object} Construit le DOM
 */

document.querySelector('#searchbar').addEventListener('input', e => {
  keyword = splitWords(e.target.value)

  console.log(keyword)
  console.log(SearchMain.selected.main)

  SearchMain.reset()
  SearchMain.selectMain(keyword)
  // updateView()

  new BuildMain(dataFetch.recipes)
})

// document.querySelector('#inputIngredient').addEventListener('input', e => {
//   keyword = e.target.value
//   SearchMain.reset()
//   SearchMain.selectIngredient(keyword)
//   updateView()
//
//   new BuildTags(dataFetch.recipes)
// })
//
// document.querySelector('#applianceInput').addEventListener('input', e => {
//   keyword = e.target.value
//   SearchMain.reset()
//   SearchMain.selectAppliance(keyword)
//   updateView()
//
//   new BuildTags(dataFetch.recipes)
// })
//
// document.querySelector('#ustensileInput').addEventListener('input', e => {
//   keyword = e.target.value
//   SearchMain.reset()
//   SearchMain.selectUstensils(keyword)
//   updateView()
//
//   new BuildTags(dataFetch.recipes)
// })

/**
 * Récupère les tags
 * @param {EventListener} tags récupère le tag
 */

const listenTags = {
  tags: {
    ingredientSelect: []
  },
  testListener: function () {
    document.querySelector('#inputIngredient').addEventListener('click', () => {
      const tags = document.querySelectorAll('.tagAdd')

      for (let i = 0; i < tags.length; i++) {
        const el = tags[i].textContent
        this.tags.ingredientSelect.push(el)
      }
    })
    console.log(this.tags.ingredientSelect)
  }
}

console.log(listenTags)

document.querySelector('#applianceInput').addEventListener('click', () => {
  tags = document.querySelectorAll('.tagAdd')
  console.log(tags)
})

document.querySelector('#ustensileInput').addEventListener('click', () => {
  tags = document.querySelectorAll('.tagAdd')
  console.log(tags)
})

new DropdownIngredient()
new DropdownAppliance()
new DropdownUstensile()

/*
const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.addedNodes.length) {
      const test = [...mutation.addedNodes]

      for (let i = 0; i < test.length; i++) {
        const autre = document.querySelectorAll('.tagAdd')

        // autre.forEach(x => console.log(x.textContent))
        for (let i = 0; i < autre.length; i++) {
          const test = autre[i].textContent
          console.log(test)
        }
      }
    }
  })
})

const tags = document.getElementById('tags')

observer.observe(tags, {
  childList: true
})
*/
