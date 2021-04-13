export class List {
  constructor (data) {
    const labelHTML = document.getElementById('interieur')

    this.listDOM = this.buildLI(data)
    labelHTML.append(this.listDOM)
  }

  buildLI (data) {
    const listContent = document.createElement('li')
    listContent.insertAdjacentHTML('afterbegin', data.ingredients[1].ingredient)
    return listContent
  }
}
