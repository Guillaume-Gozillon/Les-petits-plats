import { DropdownIngredient } from './dropdown/DropdownIngredient.js'
import { DropdownAppliance } from './dropdown/DropdownAppliance.js'
import { dataJSON } from '../data/secondRecipes.js'

const mainHTML = document.querySelector('main')
const searchInput = document.getElementById('searchbar')
const applianceInput = document.getElementById('applianceInput')

let recipes
let searchTerm = ''

const fetchData = async () => {
  recipes = await fetch('./data/recipes.json')
    .then(res => res.json())
}

// TEST --------------
const normalizeString = (str) => {
  return str
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

console.log('TEST', normalizeString(dataJSON[0]))

class Init {
  constructor () {
    // On passe le JSON dans l'atelier pour obtenir le Bloc HTML
    // qui affiche toutes les recettes
    this.recipes = dataJSON
    this.globalOptions = [
      { context: 'name', fields: 'name', depth: 'root' },
      { context: 'ingredients', fields: 'ingredient', depth: 'lowerLevel' },
      { context: 'description', fields: 'description', depth: 'root' }
    ]
    console.log(this.recipes)
    console.log('normalisé', normalizeString(this.recipes))
  }
}

const init = new Init()
/*
allDataType(opt) {
  const result = []

}
*/

// FIN TEST --------------

const showRecipes = async () => {
  await fetchData()
  const data = recipes.recipes
  const listAppliance = document.getElementById('searchAppliance')

  // Filtre les ingredients avec le terme recherché
  const dataFiltered = data.filter(x => {
    return x.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      x.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      x.ingredients.some(y => {
        return y.ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      })
  })

  const dataAppliance = data.filter(x => x.appliance.toLowerCase().includes(searchTerm.toLowerCase()))

  // Initialise et créer le DOM
  mainHTML.innerHTML = dataFiltered.map(recipe => (`
        <div class="container">
          <div class="empty"></div>
          <div class="content">
            <div class="title">
              <p>${recipe.name}</p>
              <p><i class="far fa-clock"></i> ${recipe.time}min</p>
            </div>
            <div class="recette">
            <div class="ingredient">
              ${recipe.ingredients.map(x =>
                `<p><span class="bolder">${x.ingredient}:</span> ${x.quantity}${x.unit}</p>`).join('')}
            </div>
              <div class="ingredient">
            </div>
              <p class="main-para">${recipe.description}</p>
            </div>
          </div>
        </div>`
  )).join('')

  listAppliance.innerHTML = (
    dataAppliance.map(el => `<li>${el.appliance}</li>`)
  ).join('')
}

// Initialisation de l'algo
searchInput.addEventListener('input', e => {
  searchTerm = e.target.value
  showRecipes()
})

// IICCICICICIICI
const searchAppliance = document.getElementById('searchAppliance')
searchAppliance.addEventListener('click', e => {
  console.log(e.target.textContent)
})

applianceInput.addEventListener('input', e => {
  searchTerm = e.target.value
  showRecipes()
})

// EVENEMENT AU CLICK DU FILTRE
document.getElementById('searchAppliance').addEventListener('click', e => {
  document.getElementById('tags')
    .insertAdjacentHTML('afterbegin', `<p class="tagAdd">${e.target.textContent}</p>`)
})

// -----------FIN ---------------
showRecipes()
new DropdownIngredient()
new DropdownAppliance()
