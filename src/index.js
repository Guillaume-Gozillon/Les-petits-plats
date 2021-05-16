/* eslint-disable no-extend-native */
import { DropdownIngredient } from './dropdown/DropdownIngredient.js'
import { DropdownAppliance } from './dropdown/DropdownAppliance.js'
import { DropdownUstensile } from './dropdown/DropdownUstensile.js'

import { BuildFilter } from './BuildFilter.js'
import { dataFetch } from './Fetch.js'
import { Search } from './Search.js'

function updateView () {
  console.log(dataFetch.recipes, `${dataFetch.recipes.length} Recettes trouvées`)
}

const splitWords = str => {
  return str
    .trim()
    .replace(/  +/g, ' ')
    .split(' ')
}

let keyword = ''

if (keyword === '') {
  new BuildFilter(dataFetch.recipes)
}

document.querySelector('#searchbar').addEventListener('input', e => {
  keyword = splitWords(e.target.value)
  console.log(keyword)

  Search.reset()
  Search.selectMain(keyword)
  updateView()

  new BuildFilter(dataFetch.recipes)
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
String.prototype.splitWords = function () {
  return this
    .trim()
    .replace(/  +/g, ' ')
    .split(' ')
}

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
*/
