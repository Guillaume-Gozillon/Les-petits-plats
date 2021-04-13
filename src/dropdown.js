/* eslint-disable eqeqeq */
/* eslint-disable no-new */

export class Dropdown {
  constructor (data) {
    this.openIngredientList(data)
    this.rotateArrow()
    // this.closeIngredientList()
  }

  openIngredientList (data) {
    const arrowList = document.getElementById('arrow')
    const btnIngredient = document.getElementById('btn-search')
    const int = document.getElementById('interieur')

    int.insertAdjacentHTML('afterbegin', `<li>${data.ingredients[1].ingredient}</li>`)

    btnIngredient.classList.add('biggerList')
    int.style.display = 'grid'

    arrowList.addEventListener('click', () => {
      this.rotateArrow()
    })
  }

  rotateArrow () {
    document.getElementById('btn-search').addEventListener('click', () => {
      document.getElementById('arrow').classList.add('arrowRotate')
    })
  }

  closeIngredientList () {
    console.log('CLOSE')
  }
}
