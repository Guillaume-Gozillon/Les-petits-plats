String.prototype.splitWords = function () {
  return this
    .trim()
    .replace(/  +/g, ' ')
    .split(' ')
}

const normalizeString = str => {
  return str
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

Array.prototype.unique = function () {
  return this.filter(function (value, index, self) {
    return self.indexOf(value) === index
  })
}
