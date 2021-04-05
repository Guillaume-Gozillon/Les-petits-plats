/* eslint-disable no-new */
import { List } from './List.js'

export class Dropdown {
  constructor (data) {
    this.openBox = this.getIngredient(data)
  }

  getIngredient (data) {
    const btnIngredient = document.getElementById('btn-search')
    btnIngredient.addEventListener('click', () => {
      const arrowBtn = document.getElementById('arrow')
      arrowBtn.classList.add('open')
      new List(data)
    })
  }
}
