class BuildMain {
  constructor (data) {
    this.buildRecipes(data)
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

export { BuildMain }
