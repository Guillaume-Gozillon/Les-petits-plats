/* eslint-disable eqeqeq */
/* eslint-disable no-new */
export class DropdownIngredient {
  constructor (data) {
    this.openIngredientList(data)
  }

  openIngredientList (data) {
    const arrowList = document.getElementById('arrow')
    const listUL = document.getElementById('search-list')

    const listArr = data.ingredients[1].ingredient
    // const listArr = data.ingredients[1].ingredient
    console.log(listArr)

    listUL.insertAdjacentHTML('afterbegin', `<li>${listArr}</li>`)

    arrowList.addEventListener('click', e => {
      if (e.target.classList == 'arrow') {
        this.openArrow()
      } else {
        this.closeArrow()
      }
    })
  }

  openArrow () {
    const listUL = document.getElementById('search-list')
    document.getElementById('btn-search').addEventListener('click', () => {
      document.getElementById('arrow').classList.add('arrowRotate')
      listUL.classList.add('ajoute')
    })
  }

  closeArrow () {
    const int = document.getElementById('search-list')
    document.getElementById('btn-search').addEventListener('click', () => {
      document.getElementById('arrow').classList.remove('arrowRotate')
      int.classList.remove('ajoute')
    })
  }

  /*
  listenerInput () {
    const listUL = document.getElementById('inputIngredient')
    console.log(listUL);

    listUL.addEventListener('input', e => {
      console.log('SEARCH', e.target.value)
      if (e.key === 'Enter') {
        console.log('ENTER');
      }
    })
  }
  */
}
