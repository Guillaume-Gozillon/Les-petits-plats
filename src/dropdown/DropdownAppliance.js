export class DropdownAppliance {
  constructor (data) {
    this.openIngredientList(data)
  }

  openIngredientList (data) {
    const arrowList = document.getElementById('arrowAppliance')

    arrowList.addEventListener('click', e => {
      if (e.target.classList == 'arrow') {
        this.openList()
      } else {
        this.closeList()
      }
    })
  }

  openList () {
    const listUL = document.getElementById('searchAppliance')
    document.getElementById('btn-appliance').addEventListener('click', () => {
      document.getElementById('arrowAppliance').classList.add('arrowRotate')
      listUL.classList.add('ajoute')
    })
  }

  closeList () {
    const int = document.getElementById('searchAppliance')
    document.getElementById('btn-appliance').addEventListener('click', () => {
      document.getElementById('arrowAppliance').classList.remove('arrowRotate')
      int.classList.remove('ajoute')
    })
  }
}
