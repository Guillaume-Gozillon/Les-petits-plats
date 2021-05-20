import { DropdownIngredient } from './dropdown/DropdownIngredient.js'
import { DropdownAppliance } from './dropdown/DropdownAppliance.js'
import { DropdownUstensile } from './dropdown/DropdownUstensile.js'

import { SearchMain } from './Search.js'
import { dataFetch } from './Fetch.js'

import { BuildMain } from './BuildMain.js'
import { BuildTags } from './BuildTags.js'
import { BuildFilter } from './BuildFilter.js'

/**
 * Retourn les differents valeurs separée dans un array
 * @param {String}
 * @returns {Array}
 */

const splitWords = str => {
  return str
    .trim()
    .replace(/  +/g, ' ')
}

let keyword = ''
let tags = ''

new BuildMain(dataFetch.recipes)
new BuildTags()

/**
 * Crée les differentes instances pour construire le DOM
 * @param {EventListener} keyword récupère le keyword dans l'input
 * @param {string} reset vide l'array pour mettre à jours
 * @param {string} SearchMain.selectMain remplit l'array avec le keyword
 * @returns {Object} Construit le DOM
 */

document.querySelector('#searchIngredient').addEventListener('click', () => {
  tags = document.querySelectorAll('.tagAdd')

  const tagsArr = []
  tags.forEach(item => {
    const tagsClicked = item.textContent
    tagsArr.push(tagsClicked.toLowerCase())
  })

  const keywordToSort = tagsArr.join(' ')

  SearchMain.selectMain(keywordToSort)
  new BuildMain(dataFetch.recipes)
})

document.querySelector('#searchAppliance').addEventListener('click', () => {
  tags = document.querySelectorAll('.tagAdd')

  const tagsArr = []
  tags.forEach(item => {
    const tagsClicked = item.textContent
    tagsArr.push(tagsClicked.toLowerCase())
  })

  const keywordToSort = tagsArr.join(' ')

  SearchMain.selectMain(keywordToSort)
  new BuildMain(dataFetch.recipes)
})

document.querySelector('#searchUstensile').addEventListener('click', () => {
  tags = document.querySelectorAll('.tagAdd')

  const tagsArr = []
  tags.forEach(item => {
    const tagsClicked = item.textContent
    tagsArr.push(tagsClicked.toLowerCase())
  })

  const keywordToSort = tagsArr.join(' ')

  SearchMain.selectMain(keywordToSort)
  new BuildMain(dataFetch.recipes)
})

document.querySelector('#searchbar').addEventListener('input', e => {
  keyword = splitWords(e.target.value)

  SearchMain.reset()
  SearchMain.selectMain(keyword)
  new BuildMain(dataFetch.recipes)
})

/**
 * CONSTRUITS LES TAGS
 * @param {EventListener} tags récupère le tag
 */

BuildFilter.ingredientsTags(dataFetch.recipes)
BuildFilter.applianceTags(dataFetch.recipes)
BuildFilter.ustensileTags(dataFetch.recipes)

document.addEventListener('input', () => {
  BuildFilter.ingredientsTags(dataFetch.recipes)
  BuildFilter.applianceTags(dataFetch.recipes)
  BuildFilter.ustensileTags(dataFetch.recipes)
})

document.addEventListener('click', () => {
  BuildFilter.ingredientsTags(dataFetch.recipes)
  BuildFilter.applianceTags(dataFetch.recipes)
  BuildFilter.ustensileTags(dataFetch.recipes)
})

/**
 * Récupère les tags
 * @param {EventListener} tags récupère le tag
 */

new DropdownIngredient()
new DropdownAppliance()
new DropdownUstensile()
