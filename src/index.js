/* eslint-disable no-new */
// import { Card } from './Card.js'
import { DropdownIngredient } from './DropdownIngredient.js'

const inputEl = document.querySelector('#searchbar')
const inputIngredient = document.querySelector('#inputIngredient')
const mainHTML = document.querySelector('main')

let recettes
const searchTerm = ''

async function fetchData () {
  const response = await fetch('./data/recipes.json')
  const data = await response.json()
  return data
}

fetchData().then((data) => {
  console.log(data.recipes[1].ingredients.map(x => x.ingredient))
  const toTeste = data.recipes
  console.log('INSERT', toTeste)

  mainHTML.innerHTML = (

    console.log('MAIN', toTeste.filter(el => el.ingredients))

  )

  // --------------- TRY NEW THINGS --------------------

  // data.recipes.forEach(el => {
  //   new Card(el)
  // })

  const getMainInput = () => {
    inputEl.addEventListener('input', e => {
      console.log('main', e.target.value)
    })
  }

  const getIngredientInput = () => {
    inputIngredient.addEventListener('input', e => {
      console.log('ingredient', e.target.value)
    })
  }

  getIngredientInput()
  getMainInput()
})

new DropdownIngredient()
