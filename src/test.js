/* eslint-disable no-new */
// import { Card } from './Card.js'
import { DropdownIngredient } from './DropdownIngredient.js'

const mainHTML = document.querySelector('main')
const searchInput = document.getElementById('searchbar')

let recettes
let searchTerm = ''

const fetchRecettes = async () => {
  recettes = await fetch('./data/recipes.json')
    .then(res => res.json())
}

const showRecette = async () => {
  await fetchRecettes()
  console.log(recettes)
  const toTest = recettes.recipes
  mainHTML.innerHTML = (
    toTest.filter(x => x.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())).map(y => (
        `
        <div class="container">
            <div class="empty"></div>
            <div class="content">
                <div class="title">
                    <p>${y.name}</p>
                    <p><i class="far fa-clock"></i> ${y.time}min</p>
                </div>
                <div class="recette">
                <div class="ingredient">
                    
                </div>
                    <p class="main-para">${y.description}</p>
                </div>
            </div>
        </div>
        `
    ))
  ).join('')
}

// SEARCH INPUT
searchInput.addEventListener('input', e => {
  searchTerm = e.target.value
  showRecette()
})

showRecette()
new DropdownIngredient()
