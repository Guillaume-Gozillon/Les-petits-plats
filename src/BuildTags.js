import { BuildMain } from './BuildMain.js'
import { dataFetch } from './Fetch.js'
import { SearchMain } from './Search.js'

class BuildTags {
  constructor () {
    this.ingredientTag()
    this.applianceTag()
    this.ustensilsTag()

    this.removeTags()
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
        SearchMain.reset()
        new BuildMain(dataFetch.recipes)
        e.target.parentNode.remove()
      }
    })
  }
}

export { BuildTags }
