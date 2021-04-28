import data from '../data/data'
import { searching } from './search-engine'
import { displayRecipes } from './recipes'
import { sanitizeString, addFilterID, removeNodes } from './utils'

let recipes = []

export let filtered = [
  {
    type: 'searchbar',
    id: null,
    value: null
  }
]

/**
 * Getter for filter pushed into Filtered array (filters entered by user)
 * @returns {[{id: string, type: string, value: null}]} filtered - Array of filters
 */
export function getFiltered () {
  return filtered
}

/**
 * Set up the search engine for first launch, reset the filters of selects, fill selects and set comportement for input search
 * @param {Array} ingredientsArray
 * @param {Array} appliancesArray
 * @param {Array} ustensilsArray
 * @param {Array.<Object>} recipesArray
 */
export function launchSearchEngine (ingredientsArray, appliancesArray, ustensilsArray, recipesArray) {
  fillSelect('ingredients-filters', 'ingredients', ingredientsArray)
  fillSelect('appliances-filters', 'appliances', appliancesArray)
  fillSelect('ustensils-filters', 'ustensils', ustensilsArray)
  setMainInput()
  recipes = recipesArray
  setCustomSelectInput()
}
/**
 * Reload the search when user add an entrie, reset the filters of selects, fill selects
 * @param {Array} ingredientsArray
 * @param {Array} appliancesArray
 * @param {Array} ustensilsArray
 * @param {Array.<Object>} recipesArray
 */
export function reloadSearchEngine (ingredientsArray, appliancesArray, ustensilsArray, recipesArray) {
  removeNodes('filter')
  fillSelect('ingredients-filters', 'ingredients', ingredientsArray)
  fillSelect('appliances-filters', 'appliances', appliancesArray)
  fillSelect('ustensils-filters', 'ustensils', ustensilsArray)
  recipes = recipesArray

  // remove filter (in custom select) already put in tag
  const tagsElements = document.getElementsByClassName('tag')

  Array.from(tagsElements).forEach(elt => {
    const id = elt.getAttribute('id') + '-filters'
    const filterToRemove = document.getElementById(id)

    if (filterToRemove != null) {
      filterToRemove.remove()
    }
  })
}

/**
 * Fill the custom select with appropriate filters
 * @param { String } selectType - type of select
 * @param { String } type - type of select for create ID unique
 * @param { array }  filters array
 */
function fillSelect (selectType, type, array) {
  const parentElt = document.getElementById(selectType)
  const childrenElt = ''

  array.forEach(elt => {
    const id = addFilterID(elt) + '-' + selectType
    const idTag = addFilterID(elt) + '-' + type

    elt = elt.charAt(0).toUpperCase() + elt.slice(1)

    const filter = `<a href="#" class="filter" id="${id}" data-type="${selectType}" data-tagID="${idTag}">
                    ${elt}
                   </a>`

    parentElt.insertAdjacentHTML('beforeend', filter)
  })
}

/**
 * Set up the main input search
 */
function setMainInput () {
  const inputSearch = document.getElementById('searchbar')
  inputSearch.addEventListener('input', e => {
    if (e.value.length < 3) {
      // Reset array
      filtered = filtered.filter(function (value) {
        return value.type !== 'searchbar'
      })

      filtered.unshift({
        type: 'searchbar',
        id: null,
        value: null
      })
      // RE - init recipes
      const tagsElements = document.getElementsByClassName('tag')

      // If a tag exists, don't init recipe
      if (tagsElements != null) {
        searching(filtered)
      } else {
        reloadRecipes()
      }
      return
    }

    // If input.value > 2
    const valuesInput = inputSearch.value.split(' ')
    const valuesToSearch = []

    valuesInput.forEach(value => {
      if (value.length > 2) {
        valuesToSearch.push(sanitizeString(value))
      }
    })

    filtered = filtered.filter(function (value) {
      return value.type !== 'searchbar'
    })

    // console.log(filtered)
    valuesToSearch.forEach(value => {
      filtered.unshift({
        type: 'searchbar',
        id: value,
        value: value
      })
    })

    searching(filtered)
  })
}

/**
 * Set up the custom select input search
 */
function setCustomSelectInput () {
  const customInput = document.getElementsByClassName('custom-input')

  Array.from(customInput).forEach(input => {
    input.addEventListener('input', e => {
      const typeOfInput = input.className.substring(input.className.indexOf(' ') + 1) + '-filters'
      const container = document.getElementById(typeOfInput)
      const filters = container.querySelectorAll('a')

      filters.forEach(filter => {
        filter.style.display = 'none'
        if (sanitizeString(filter.innerText).includes(sanitizeString(input.value))) {
          filter.style.display = 'flex'
        }
      })
    })
  })
}

/**
 * Create a tag HTML element when user select a filter, display it under main search input, and remove it from custom select
 * @param { String } elt
 * @param { String } eltType
 * @param { String } eltID
 */
export function createTag (elt, eltType, eltID) {
  const parentElt = document.getElementById('tag-container')
  const dataType = eltType.substr(0, eltType.lastIndexOf('-'))

  const tag = `<a href="#" class="tag ${eltType}" id="${eltID}" data-type="${dataType}">
                    <span>${elt}</span><em class="far fa-times-circle"></em>
               </a>`

  parentElt.insertAdjacentHTML('beforeend', tag)

  filtered.push({
    type: dataType,
    id: eltID,
    value: sanitizeString(elt)
  })

  resetCustomSelectInput(dataType)

  searching(filtered)
}

/**
 * Remove input value
 * @param {String} dataType - type of input
 */
function resetCustomSelectInput (dataType) {
  Array.from(document.getElementsByClassName('custom-input ' + dataType)).forEach(elt => {
    elt.value = ''
  })
}

/**
 * Remove HTML tag and re-push it in custom select
 * @param eltID
 * @param type
 * @param text
 */
export function removeTagNodeByID (eltID, type, text) {
  const elt = document.getElementById(eltID)

  document.getElementById(eltID).remove()
  filtered = filtered.filter(function (tag) {
    return tag.id !== eltID
  })

  let array = [text]
  array = new Set(array)
  // Refill select custom
  fillSelect(type + '-filters', type, array)
}

/**
 * Remove all recipes reload recipes from origin
 */
function reloadRecipes () {
  removeNodesRecipes()
  const filters = displayRecipes(data.recipes)
  reloadSearchEngine(filters[0], filters[1], filters[2], data.recipes)
}
