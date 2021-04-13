/* eslint-disable no-new */
import { Card } from './Card.js'
import { DropdownIngredient } from './DropdownIngredient.js'

async function fetchData () {
  const response = await fetch('./data/recipes.json')
  const data = await response.json()
  return data
}

fetchData().then((data) => {
  console.log(data)
  const mediaRecipes = data.recipes
  mediaRecipes.forEach(el => {
    new Card(el)
    new DropdownIngredient(el)
  })
})
