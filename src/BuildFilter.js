/* eslint-disable no-extend-native */
const ingredientNode = document.getElementById('inputIngredient')
const applianceNode = document.getElementById('applianceInput')
const ustensileNode = document.getElementById('ustensileInput')

let ingredientKeyword = ''
let applianceKeyword = ''
let ustensileKeyword = ''

const BuildFilter = {
  ingredientsTags: function (data) {
    const ingredientArr = []

    data.forEach(obj => {
      const dataTag = obj.ingredients
      dataTag.forEach(item => ingredientArr.push(item.ingredient))
    })

    const ingTagsDom = ingredientArr.unique()

    ingredientNode.addEventListener('click', () => {
      document.querySelector('#searchIngredient').innerHTML =
      ingTagsDom.map(item => `<li>${item}</li>`).join('')
    })

    ingredientNode.addEventListener('input', e => {
      ingredientKeyword = e.target.value

      const ingredientsSorted = ingTagsDom.filter(item =>
        item.toLocaleLowerCase()
          .includes(ingredientKeyword))

      document.querySelector('#searchIngredient').innerHTML =
      ingredientsSorted.map(item => `<li>${item}</li>`).join('')
    })
  },
  applianceTags: function (data) {
    const appliancetArr = []

    data.forEach(obj => appliancetArr.push(obj.appliance))

    const applianceTagsDom = appliancetArr.unique()

    applianceNode.addEventListener('click', () => {
      document.querySelector('#searchAppliance').innerHTML =
      applianceTagsDom.map(item => `<li>${item}</li>`).join('')
    })

    applianceNode.addEventListener('input', e => {
      applianceKeyword = e.target.value

      const applianceSorted = applianceTagsDom.filter(item =>
        item.toLocaleLowerCase()
          .includes(applianceKeyword))

      document.querySelector('#searchAppliance').innerHTML =
      applianceSorted.map(item => `<li>${item}</li>`).join('')
    })
  },
  ustensileTags: function (data) {
    const ustensileArr = []

    data.forEach(obj => {
      const dataTag = obj.ustensils
      dataTag.forEach(item => ustensileArr.push(item))
    })

    const ustensilesTagsDom = ustensileArr.unique()

    ustensileNode.addEventListener('click', () => {
      document.querySelector('#searchUstensile').innerHTML =
      ustensilesTagsDom.map(item => `<li>${item}</li>`).join('')
    })

    ustensileNode.addEventListener('input', e => {
      ustensileKeyword = e.target.value

      const ustensileSorted = ustensilesTagsDom.filter(item =>
        item.toLocaleLowerCase()
          .includes(ustensileKeyword))

      document.querySelector('#searchUstensile').innerHTML =
      ustensileSorted.map(item => `<li>${item}</li>`).join('')
    })
  }
}

Array.prototype.unique = function () {
  return this.filter(function (value, index, self) {
    return self.indexOf(value) === index
  })
}

export { BuildFilter }
