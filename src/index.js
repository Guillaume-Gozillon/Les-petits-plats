import { DropdownIngredient } from './dropdown/DropdownIngredient.js'
import { DropdownAppliance } from './dropdown/DropdownAppliance.js'
import { DropdownUstensile } from './dropdown/DropdownUstensile.js'

const mainHTML = document.querySelector('main')
const searchInput = document.getElementById('searchbar')

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
    data
      .filter(x => {
        return (x.name).toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        (x.description).toLowerCase().includes(searchTerm.toLocaleLowerCase())
      })
      .map(recipe => (`
        <div class="container">
          <div class="empty"></div>
          <div class="content">
            <div class="title">
              <p>${recipe.name}</p>
              <p><i class="far fa-clock"></i> ${recipe.time}min</p>
            </div>
            <div class="recette">
            <div class="ingredient">
            </div>
              <p class="main-para">${recipe.description}</p>
            </div>
          </div>
        </div>`
      ))
  ).join('')
}

// SEARCH INPUT
searchInput.addEventListener('input', e => {
  searchTerm = e.target.value
  showRecipes()
})

document.getElementById('searchIngredient').addEventListener('click', e => {
  console.log(e.target.textContent)
})

showRecipes()
new DropdownIngredient()
new DropdownAppliance()
