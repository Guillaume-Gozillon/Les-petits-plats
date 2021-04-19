export class DropdownUstensile {
  constructor (data) {
    this.openIngredientList(data)
  }

  openIngredientList (data) {
    const arrowList = document.getElementById('arrowUstensile')
    const listUL = document.getElementById('searchUstensile')

    listUL.insertAdjacentHTML('afterbegin', `
    <li>${data.ustensils[2]}</li>
`)

    arrowList.addEventListener('click', e => {
      if (e.target.classList == 'arrow') {
        this.openList()
      } else {
        this.closeList()
      }
    })
  }

  openList () {
    const listUL = document.getElementById('searchUstensile')
    document.getElementById('btn-ustensile').addEventListener('click', () => {
      document.getElementById('arrowUstensile').classList.add('arrowRotate')
      listUL.classList.add('ajoute')
    })
  }

  closeList () {
    const int = document.getElementById('searchUstensile')
    document.getElementById('btn-ustensile').addEventListener('click', () => {
      document.getElementById('arrowUstensile').classList.remove('arrowRotate')
      int.classList.remove('ajoute')
    })
  }
}
