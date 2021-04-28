export class DropdownIngredient {
  constructor () {
    this.openIngredientList()
  }

  openIngredientList () {
    const arrowList = document.getElementById('arrowIngredient')

    arrowList.addEventListener('click', e => {
      if (e.target.classList == 'arrow') {
        this.openList()
      } else {
        this.closeList()
      }
    })
  }

  openList () {
    const listUL = document.getElementById('searchIngredient')
    document.getElementById('btn-search').addEventListener('click', () => {
      document.getElementById('arrowIngredient').classList.add('arrowRotate')
      listUL.classList.add('ajoute')
    })
  }

  closeList () {
    const int = document.getElementById('searchIngredient')
    document.getElementById('btn-search').addEventListener('click', () => {
      document.getElementById('arrowIngredient').classList.remove('arrowRotate')
      int.classList.remove('ajoute')
    })
  }
}
