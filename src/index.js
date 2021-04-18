/* eslint-disable no-new */
// import { Card } from './Card.js'
import { DropdownIngredient } from './dropdown/DropdownIngredient.js'
import { DropdownAppliance } from './dropdown/DropdownAppliance.js'
import { DropdownUstensile } from './dropdown/DropdownUstensile.js'

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
  const recetteDOM = recettes.recipes

  recetteDOM.forEach(i => {
    new DropdownUstensile(i)
  });

  mainHTML.innerHTML = (
    recetteDOM
      .filter(x => {
        return (x.name).toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        (x.description).toLowerCase().includes(searchTerm.toLocaleLowerCase())
      })
      .map(y => (`
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
        </div>`
      ))
  ).join('')
}

// SEARCH INPUT
searchInput.addEventListener('input', e => {
  searchTerm = e.target.value
  showRecette()
})

document.getElementById('searchIngredient').addEventListener('click', e => {
  console.log(e.target.textContent)
})

showRecette()
new DropdownIngredient()
new DropdownAppliance()
