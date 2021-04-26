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
        x.ingredients.some(y => {
          return y.ingredient.toLowerCase().includes(searchTerm.toLowerCase())
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
              ${recipe.ingredients
                .map(x => `<p><span class="bolder">${x.ingredient}:</span> ${x.quantity}${x.unit}</p>`).join('')}
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

searchInput.addEventListener('input', e => {
  searchTerm = e.target.value
  showRecipes()
})

// -----------APPLIANCE -------------------------------
let searchAppliance = ''
const listUL = document.getElementById('searchAppliance')

const applianceList = async () => {
  await fetchData()
  const data = recipes.recipes

  listUL.innerHTML = (
    data.filter(x => {
      return x.name.toLowerCase().includes(searchAppliance.toLowerCase()) ||
        x.description.toLowerCase().includes(searchAppliance.toLowerCase()) ||
        x.ingredients.some(y => {
          return y.ingredient.toLowerCase().includes(searchAppliance.toLowerCase())
        })
    })
      .map(el => `<li>${el.appliance}</li>`)
  ).join('')
}

// SEARCH INPUT
applianceInput.addEventListener('input', e => {
  searchAppliance = e.target.value
  applianceList()

  if (e.key === 'ArrowRight') {
    console.log('IT WORKS')
  }
})

// EVENEMENT AU CLICK DU FILTRE
document.getElementById('searchAppliance').addEventListener('click', e => {
  document.getElementById('tags')
    .insertAdjacentHTML('afterbegin', `<p class="tagAdd">${e.target.textContent}</p>`)
  const leTest = document.querySelectorAll('.tagAdd')

  const newArr = []
  for (let i = 0; i < leTest.length; i++) {
    const element = leTest[i].textContent
    newArr.push(element)
  }
  console.log('element', newArr)
})

// -----------FIN ---------------
showRecipes()
applianceList()
new DropdownIngredient()
new DropdownAppliance()
