export class Card {
    constructor(data) {
        const mainHTML = document.querySelector('main')

        this.recipesDOM = this.buildRecipeDOM(data)
        mainHTML.append(this.recipesDOM)
    }

    buildRecipeDOM(data) {
        const recipeContent = document.createElement('div')
        recipeContent.classList.add('container')
        recipeContent.insertAdjacentHTML('afterbegin', `
        <div class="empty"></div>
        <div class="content">
            <div class="title">
                <p>${data.name}</p>
                <p>${data.time}min</p>
            </div>
            <div class="recette">
                ${this.listIngredient(data.ingredients)}
                <p class="main-para">${data.description}</p>
            </div>
        </div>`)
        return recipeContent
    }

    listIngredient(data) {
        return `
        <div class="ingredient">
            ${data.map(function (items) {
                return `
                <p><span class="bolder">${items.ingredient}:</span> ${items.quantity}${items.unit}</p>`
            }).join('')}
        </div>`
    }
}
