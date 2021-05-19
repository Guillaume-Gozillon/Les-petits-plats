import { Search } from './Search.js'

class BuildFilter {
  constructor (data) {
    this.recipes = data

    this.buildAppliance(this.recipes)
    this.buildUstensils(this.recipes)
    this.buildIngredient(this.recipes)
    this.buildRecipes(this.recipes)

    this.ingredientTag()
    this.applianceTag()
    this.ustensilsTag()

    this.closeTags()

    this.buildTags()

    this.tag = document.querySelectorAll('.tagAdd')
    console.log(this.tag);
  }

  buildTags () {
    return this.tag
  }

  buildIngredient (data) {
    const ingredientArr = []

    data.forEach(multiArrIngredients => {
      const ingredient = multiArrIngredients.ingredients
      ingredient.forEach(arrIngredient =>
        ingredientArr.push(arrIngredient.ingredient))
    })

    const ingredientsDom = [...new Set(ingredientArr)].slice(0, 30)
    document.querySelector('#searchIngredient').innerHTML =
      ingredientsDom.map(item => `<li>${item}</li>`).join('')
  }

  buildAppliance (data) {
    const dataAppliance = data.map(x => x.appliance)
    const applianceArray = [...new Set(dataAppliance)]

    document.querySelector('#searchAppliance').innerHTML =
    applianceArray.map(item => `<li class="liTargeted">${item}</li>`).join('')
  }

  buildUstensils (data) {
    const ustensilArr = []

    data.forEach(multiArrUstensils => {
      const ustensil = multiArrUstensils.ustensils
      ustensil.forEach(ArrUstensils => ustensilArr.push(ArrUstensils))
    })

    const ustensilsDom = [...new Set(ustensilArr)]
    document.querySelector('#searchUstensile').innerHTML =
      ustensilsDom.map(item => `<li>${item}</li>`).join('')
  }

  ingredientTag () {
    document.querySelector('#searchIngredient').addEventListener('click', e => {
      document.querySelector('#tags')
        .insertAdjacentHTML('afterbegin', `
      <div class="tagContainer ingredientTag">
        <p class="tagAdd">${e.target.textContent}</p>
        <i class="far fa-times-circle closeTag"></i>
      </div>`)
    })
  }

  applianceTag (test) {
    document.querySelector('#searchAppliance').addEventListener('click', e => {
      document.querySelector('#tags')
        .insertAdjacentHTML('afterbegin', `
      <div class="tagContainer appliance">
        <p class="tagAdd">${e.target.textContent}</p>
        <i class="far fa-times-circle closeTag"></i>
      </div>`)
    })
  }

  ustensilsTag () {
    document.querySelector('#searchUstensile').addEventListener('click', e => {
      document.querySelector('#tags')
        .insertAdjacentHTML('afterbegin', `
      <div class="tagContainer ustensils">
        <p class="tagAdd">${e.target.textContent}</p>
        <i class="far fa-times-circle closeTag"></i>
      </div>`)
    })
  }

  closeTags () {
    document.addEventListener('click', e => {
      const tagsNode = e.target.classList[2]
      if (tagsNode === 'closeTag') {
        e.target.parentNode.remove()
      }
    })
  }

  buildRecipes (data) {
    document.querySelector('main').innerHTML = data.map(recipe => (`
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
  }
}

export { BuildFilter }
