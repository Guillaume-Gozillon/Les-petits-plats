export class Card {
    constructor(data) {
        const mainHTML = document.querySelector('main')

        this.toInsert = this.buildRecipeDOM(data)
        console.log(this.toInsert);

        mainHTML.append(this.toInsert)
    }

    buildRecipeDOM(data) {
        console.log(data);
        const recipeContent = document.createElement('div')
        recipeContent.classList.add('container')
        recipeContent.insertAdjacentHTML('afterbegin', `
        <div class="empty"></div>
        <div class="content">
            <div class="title">
                <p>Poulet coco réunionnais</p>
                <p>80min</p>
            </div>
            <div class="recette">
                <div class="ingredient">
                    <p>Poulet: 1</p> 
                    <p>Lait de coco: 400ml</p> 
                    <p>Coulis de tomate: 25cl</p> 
                    <p>Oignon: 1</p> 
                    <p>Poivron rouge: 1</p> 
                    <p>Huile d'olive</p> 
                </div>
                <p>TEST + ${data.name}</p>
            </div>
        </div>`)
        return recipeContent
    }
}
