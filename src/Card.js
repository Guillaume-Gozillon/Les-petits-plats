export class Card {
  constructor (data) {
    const mainHTML = document.querySelector('main')

    this.recipesDOM = this.buildDOM(data)
    mainHTML.append(this.recipesDOM)

    this.filterData(data)
  }

  filterData(data) {
    //console.log(data.ingredients[1].ingredient);
    console.log(data.ingredients)
  }

  buildDOM (data) {
    const recipeContent = document.createElement('div')
    recipeContent.classList.add('container')
    recipeContent.insertAdjacentHTML('afterbegin', `
        <div class="empty"></div>
        <div class="content">
            <div class="title">
                <p>${data.name}</p>
                <p><i class="far fa-clock"></i> ${data.time}min</p>
            </div>
            <div class="recette">
                ${this.listIngredient(data.ingredients)}
                <p class="main-para">${data.description}</p>
            </div>
        </div>`)
    return recipeContent
  }

  listIngredient (data) {
    return `
        <div class="ingredient">
            ${data.map(function (items) {
                return `
                <p><span class="bolder">${items.ingredient}:</span> ${items.quantity}${items.unit}</p>`
            }).join('')}
        </div>`
  }
}

/*
  mainHTML.innerHTML = dataFiltered.map(recipe => (`
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
  /*