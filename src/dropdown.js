/* eslint-disable eqeqeq */
/* eslint-disable no-new */
import { List } from './List.js'

export class Dropdown {
  constructor (data) {
    this.openBox = this.openIngredientList(data)
    this.rotateArrow()
    this.closeIngredientList()
  }

  openIngredientList (data) {
    const arrowList = document.getElementById('arrow')
    const btnIngredient = document.getElementById('btn-search')
    const int = document.getElementById('interieur')

    arrowList.addEventListener('click', () => {
      btnIngredient.classList.add('biggerList')
      int.style.display = 'grid'
      this.rotateArrow()
      new List(data)
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

/*
  closeIngredientList () {
    document.addEventListener('click', e => {
      const elementToDelet = document.getElementsByClassName('biggerList')[0]
      console.log('classe', e.target.classList[0])
      if (e.target.classList == 'btn-section') {
        console.log('OK')
        this.openBox.remove(elementToDelet)
      }
    })
  } */
