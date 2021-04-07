/* eslint-disable no-new */
import { List } from './List.js'

export class Dropdown {
  constructor (data) {
    this.openBox = this.openIngredientList(data)
    this.openInput()
  }

  openIngredientList (data) {
    const arrowList = document.getElementById('arrow')
    arrowList.addEventListener('click', () => {
      // test ouverture via l'arrow

      const arrowBtn = document.getElementById('arrow')
      arrowBtn.classList.add('arrowRotate')
      new List(data)
    })
  }

  openInput () {
    const btnIngredient = document.getElementById('btn-search')
    btnIngredient.addEventListener('click', () => {
      // test ouverture via l'input

      const arrowBtn = document.getElementById('arrow')
      arrowBtn.classList.add('arrowRotate')
      btnIngredient.classList.add('biggerInput')
    })
  }
}
