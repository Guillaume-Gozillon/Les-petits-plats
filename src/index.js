import { Card } from './Card.js'

async function fetchData () {
  const response = await fetch('./data/recipes.json')
  const data = await response.json()
  return data
}

fetchData().then((data) => {
    const mediaRecipes = data.recipes
    console.log(mediaRecipes);
    mediaRecipes.forEach(el => {
        new Card(el)
    });
})