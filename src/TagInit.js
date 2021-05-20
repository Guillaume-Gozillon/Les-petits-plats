/* eslint-disable no-extend-native */
const ingredientNode = document.getElementById('inputIngredient')
const applianceNode = document.getElementById('applianceInput')
let ingredientKeyword = ''
let applianceKeyword = ''

const tagInit = {
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
      ingredientKeyword = e.target.value.toLocaleLowerCase()

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
      applianceKeyword = e.target.value.toLocaleLowerCase()

      const applianceSorted = applianceTagsDom.filter(item =>
        item.toLocaleLowerCase()
          .includes(applianceKeyword))

      document.querySelector('#searchAppliance').innerHTML =
      applianceSorted.map(item => `<li>${item}</li>`).join('')
    })
  }
}

Array.prototype.unique = function () {
  return this.filter(function (value, index, self) {
    return self.indexOf(value) === index
  })
}

export { tagInit }
