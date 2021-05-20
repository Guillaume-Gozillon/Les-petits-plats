/* eslint-disable no-extend-native */
const ingredientNode = document.getElementById('inputIngredient')
let ingredientKeyword = ''

const tagInit = {
  ingredientsTags: function (data) {
    const ingredientArr = []

    data.forEach(obj => {
      const dataTag = obj.ingredients
      dataTag.forEach(item => ingredientArr.push(item.ingredient))
    })

    const tagsDom = ingredientArr.unique()

    ingredientNode.addEventListener('click', () => {
      document.querySelector('#searchIngredient').innerHTML =
      tagsDom.map(item => `<li>${item}</li>`).join('')
    })

    ingredientNode.addEventListener('input', e => {
      ingredientKeyword = e.target.value.toLocaleLowerCase()

      const ingredientsSorted = tagsDom.filter(item =>
        item.toLocaleLowerCase()
          .includes(ingredientKeyword))

      document.querySelector('#searchIngredient').innerHTML =
      ingredientsSorted.map(item => `<li>${item}</li>`).join('')
    })
  }
}

Array.prototype.unique = function () {
  return this.filter(function (value, index, self) {
    return self.indexOf(value) === index
  })
}

export { tagInit }
