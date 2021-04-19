export class DropdownAppliance {
  constructor () {
    this.openIngredientList()
  }

  openIngredientList () {
    const arrowList = document.getElementById('arrowAppliance')
    const listUL = document.getElementById('searchAppliance')

    listUL.insertAdjacentHTML('afterbegin', `
    <li>${'Lait de coco'}</li>
    <li>${'Jus de citron'}</li>
    <li>${'Crème de coco'}</li>
    <li>${'Sucre'}</li>
    <li>${'Glaçons'}</li>
    <li>${'Thon rouge'}</li>
    <li>${'Concombre'}</li>
    <li>${'Tomate'}</li>
    <li>${'Carotte'}</li>
    <li>${'Citron vert'}</li>
    <li>${'Poulet'}</li>
    <li>${'Chocolat au lait'}</li>
    <li>${'Crème liquide'}</li>
    <li>${'Beurre'}</li>`)

    arrowList.addEventListener('click', e => {
      if (e.target.classList == 'arrow') {
        this.openArrow()
      } else {
        this.closeArrow()
      }
    })
  }

  openArrow () {
    const listUL = document.getElementById('searchAppliance')
    document.getElementById('btn-appliance').addEventListener('click', () => {
      document.getElementById('arrowAppliance').classList.add('arrowRotate')
      listUL.classList.add('ajoute')
    })
  }

  closeArrow () {
    const int = document.getElementById('searchAppliance')
    document.getElementById('btn-appliance').addEventListener('click', () => {
      document.getElementById('arrowAppliance').classList.remove('arrowRotate')
      int.classList.remove('ajoute')
    })
  }
}
