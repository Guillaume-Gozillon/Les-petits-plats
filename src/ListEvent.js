export class ListEVENT {
  constructor () {
    this.searchbar = document.getElementById('searchbar')
    this.applianceNODE = document.getElementById('applianceInput')

    this.getInputSearchbar()
    this.getInputApplicance()

    // const testARR = [1, 1, 2, 2, 3, 4]
    // console.log(testARR.unique())
  }

  getInputSearchbar () {
    this.searchbar.addEventListener('input', e => {
      this.keywords = splitWords(e.target.value)
      dom.setKeywords(this.keywords.unique(), '4')
      // NE MARCHE PAS ?
      // console.log(dom.setKeywords(this.keywords.unique()))
    })
  }

  getInputApplicance () {
    this.applianceNODE.addEventListener('input', e => {
      this.secondKeywords = splitWords(e.target.value)
      // dom.setKeywords(this.keywords.unique())
    })
  }
}
