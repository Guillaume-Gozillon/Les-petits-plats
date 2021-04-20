import { DropdownIngredient } from './dropdown/DropdownIngredient.js'
import { DropdownAppliance } from './dropdown/DropdownAppliance.js'
import { DropdownUstensile } from './dropdown/DropdownUstensile.js'

const mainHTML = document.querySelector('main')
const searchInput = document.getElementById('searchbar')
const applianceInput = document.getElementById('applianceInput')

let recipes
let searchTerm = ''

const fetchData = async () => {
  recipes = await fetch('./data/recipes.json')
    .then(res => res.json())
}

const showRecipes = async () => {
  await fetchData()
  const data = recipes.recipes

  data.forEach(i => {
    new DropdownUstensile(i)
  })

  mainHTML.innerHTML = (
    data.filter(x => {
      return x.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        x.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        x.ingredients.some(ingredient => { 
          return ingredient.ingredient.includes(searchTerm.toLowerCase())
        })
    }).map(recipe => (`
        <div class="container">
          <div class="empty"></div>
          <div class="content">
            <div class="title">
              <p>${recipe.name}</p>
              <p><i class="far fa-clock"></i> ${recipe.time}min</p>
            </div>
            <div class="recette">
            <div class="ingredient">
              ${recipe.ingredients.map(x => `
                <p><span class="bolder">${x.ingredient}:</span> ${x.quantity}${x.unit}</p>`).join('')}
            </div>
              <div class="ingredient">
            </div>
              <p class="main-para">${recipe.description}</p>
            </div>
          </div>
        </div>`
    ))
  ).join('')
}

// -----------APPLIANCE ---------------
let searchAppliance = ''

const applianceList = async () => {
  await fetchData()
  const data = recipes.recipes

  new DropdownAppliance(data.filter(x => x.appliance.toLowerCase().includes(searchAppliance.toLowerCase())))
}
applianceList()

applianceInput.addEventListener('input', e => {
  searchAppliance = e.target.value
})
// -----------FIN ---------------

// SEARCH INPUT
searchInput.addEventListener('input', e => {
  searchTerm = e.target.value
  showRecipes()
})

showRecipes()
new DropdownIngredient()

/*
let searchAppliance = ''

const applianceList = async () => {
  await fetchData()
  const data = recipes.recipes

  new DropdownAppliance(data.filter(x => x.appliance.toLocaleLowerCase().includes(searchAppliance.toLocaleLowerCase())))
}
searchInput.addEventListener('input', e => {
  searchTerm = e.target.value
  applianceList()
})
*/
