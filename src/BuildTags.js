class BuildTags {
  constructor (data) {
    this.recipes = data

    this.buildAppliance(this.recipes)
    this.buildUstensils(this.recipes)
    this.buildIngredient(this.recipes)

    this.ingredientTag()
    this.applianceTag()
    this.ustensilsTag()

    this.removeTags()
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

  applianceTag () {
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

  removeTags () {
    document.addEventListener('click', e => {
      const tagsNode = e.target.classList[2]
      if (tagsNode === 'closeTag') {
        e.target.parentNode.remove()
      }
    })
  }
}

export { BuildTags }
