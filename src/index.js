import { DropdownIngredient } from './dropdown/DropdownIngredient.js'
import { DropdownAppliance } from './dropdown/DropdownAppliance.js'
import { DropdownUstensile } from './dropdown/DropdownUstensile.js'

import { Search } from './Search.js'
import { dataFetch } from './Fetch.js'
import { BuildFilter } from './BuildFilter.js'

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
  new BuildFilter(dataFetch.recipes)
}

/**
 * Crée les differentes instances pour construire le DOM
 * @param {EventListener} keyword récupère le keyword dans l'input
 * @param {string} reset vide l'array pour mettre à jours
 * @param {string} Search.selectMain remplit l'array avec le keyword
 * @returns {Object} Construit le DOM
 */

document.querySelector('#searchbar').addEventListener('input', e => {
  keyword = splitWords(e.target.value)
  console.log(keyword)

  Search.reset()
  Search.selectMain(keyword)
  updateView()

  new BuildFilter(dataFetch.recipes)
})

document.querySelector('#inputIngredient').addEventListener('click', () => {
  tags = [document.querySelectorAll('.tagAdd')]
  tags.forEach(x => {
    console.log(x)
  })
})

document.querySelector('#applianceInput').addEventListener('click', e => {
  tags = document.querySelectorAll('.tagAdd')
  console.log(tags)
})

document.querySelector('#ustensileInput').addEventListener('click', e => {
  tags = document.querySelectorAll('.tagAdd')
  console.log(tags)
})

document.querySelector('#inputIngredient').addEventListener('input', e => {
  keyword = e.target.value
  Search.reset()
  Search.selectIngredient(keyword)
  updateView()

  new BuildFilter(dataFetch.recipes)
})

document.querySelector('#applianceInput').addEventListener('input', e => {
  keyword = e.target.value
  Search.reset()
  Search.selectAppliance(keyword)
  updateView()

  new BuildFilter(dataFetch.recipes)
})

document.querySelector('#ustensileInput').addEventListener('input', e => {
  keyword = e.target.value
  Search.reset()
  Search.selectUstensils(keyword)
  updateView()

  new BuildFilter(dataFetch.recipes)
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
