/* eslint-disable eqeqeq */
/* eslint-disable no-new */
export class DropdownUstensile {
  constructor () {
    this.openIngredientList()
  }

  openIngredientList () {
    const arrowList = document.getElementById('arrowUstensile')
    const listUL = document.getElementById('searchUstensile')

    listUL.insertAdjacentHTML('afterbegin', `
    <li>${'Lait de coco'}</li>
    <li>${'Jus de citron'}</li>
    <li>${'Crème de coco'}</li>
    <li>${'Sucre'}</li>
    <li>${'Glaçons'}</li>
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
    const listUL = document.getElementById('searchUstensile')
    document.getElementById('btn-ustensile').addEventListener('click', () => {
      document.getElementById('arrowUstensile').classList.add('arrowRotate')
      listUL.classList.add('ajoute')
    })
  }

  closeArrow () {
    const int = document.getElementById('searchUstensile')
    document.getElementById('btn-ustensile').addEventListener('click', () => {
      document.getElementById('arrowUstensile').classList.remove('arrowRotate')
      int.classList.remove('ajoute')
    })
  }
}
