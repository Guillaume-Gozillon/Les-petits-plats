/* eslint-disable no-new */
// import { Card } from './Card.js'
import { DropdownIngredient } from './DropdownIngredient.js'
import { Card } from './Card.js'

const inputEl = document.querySelector('#searchbar')
const inputIngredient = document.querySelector('#inputIngredient')
const mainHTML = document.querySelector('main')

let recettes
const searchTerm = 'poulet'

/*
async function fetchData () {
  const response = await fetch('./data/recipes.json')
  const data = await response.json()
  return data
}

fetchData().then((data) => {
  data.recipes.forEach(el => {
    new Card(el)
  })
})
*/

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
showRecette()

new DropdownIngredient()
