export class DropdownIngredient {
  constructor () {
    this.openIngredientList()
  }

  openIngredientList () {
    const arrowList = document.getElementById('arrowIngredient')
    const listUL = document.getElementById('searchIngredient')

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
    <li>${'Coulis'}</li>
    <li>${'Oignon'}</li>
    <li>${'Poivron rouge'}</li>
    <li>${'Huile d\'olive'}</li>
    <li>${'Riz blanc'}</li>
    <li>${'Thon en miettes'}</li>
    <li>${'Oeuf dur'}</li>
    <li>${'Maïs'}</li>
    <li>${'Vinaigrette'}</li>
    <li>${'Pâte feuilletée'}</li>
    <li>${'Crème fraiche'}</li>
    <li>${'Gruyère râpé'}</li>
    <li>${'Moutarde'}</li>
    <li>${'Pomme'}</li>
    <li>${'Oeuf'}</li>
    <li>${'Sucre en poudre'}</li>
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
    const listUL = document.getElementById('searchIngredient')
    document.getElementById('btn-search').addEventListener('click', () => {
      document.getElementById('arrowIngredient').classList.add('arrowRotate')
      listUL.classList.add('ajoute')
    })
  }

  closeArrow () {
    const int = document.getElementById('searchIngredient')
    document.getElementById('btn-search').addEventListener('click', () => {
      document.getElementById('arrowIngredient').classList.remove('arrowRotate')
      int.classList.remove('ajoute')
    })
  }
}
