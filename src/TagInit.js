/* eslint-disable no-extend-native */
const domIngredient = document.getElementById('inputIngredient')
let ingredientKeyword = ''

const tagInit = {
  ingredientsTag: function (data) {
    const ingredientArr = []

    data.forEach(x => {
      const dataTag = x.ingredients
      dataTag.forEach(y => ingredientArr.push(y.ingredient))
    })

    const dataDom = ingredientArr.unique()

    domIngredient.addEventListener('click', () => {
      document.querySelector('#searchIngredient').innerHTML =
      dataDom.map(item => `<li>${item}</li>`).join('')
    })

    domIngredient.addEventListener('input', e => {
      ingredientKeyword = e.target.value.toLocaleLowerCase()

      const IngredientsSorted = dataDom.filter(x =>
        x.toLocaleLowerCase().includes(ingredientKeyword))

      document.querySelector('#searchIngredient').innerHTML =
      IngredientsSorted.map(item => `<li>${item}</li>`).join('')
    })
  }
}

Array.prototype.unique = function () {
  return this.filter(function (value, index, self) {
    return self.indexOf(value) === index
  })
}

export { tagInit }
