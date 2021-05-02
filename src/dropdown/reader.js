/** *
 * @param {string} str
 * @returns Une chaine de caratère standart
 */
const normalizeString = (str) => {
  return str
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

/* Empeche la function passé en callBack
de se déclencher à chaque event dans un certain délai : se déclenche si délay
passé et supérieur entre deux event de même nature
*/

debounce = (callback, delay) => {
  let timer
  return function () {
    const args = arguments
    const context = this
    clearTimeout(timer)
    timer = setTimeout(function () {
      callback.apply(context, args)
    }, delay)
  }
}

class Init {
  constructor () {
    // On passe le JSON dans l'atelier pour obtenir le Bloc HTML
    // qui affiche toutes les recettes
    this.recipes = dataJSON
    this.globalOptions = [
      { context: 'name', fields: 'name', depth: 'root' },
      { context: 'ingredients', fields: 'ingredient', depth: 'lowerLevel' },
      { context: 'description', fields: 'description', depth: 'root' }
    ]
  }

  /**
   * Vire Tout les accents présent dans les champs de type string du fichier Json
   * @param {*} JSON
   * @returns newJson
   */

  normalizeJSON (JSON) {
    // console.log(JSON);

    const newJSON = []

    JSON.forEach((recipe, key) => {
      //  console.log(recipe);
      const thisKey = Object.keys(recipe)
      newJSON[key] = {}

      thisKey.forEach(fields => {
        switch (typeof (recipe[fields])) {
          case 'string':
            newJSON[key][fields] = normalizeString(recipe[fields])
            break

          case 'number':
            newJSON[key][fields] = recipe[fields]
            break

          case 'object':

            newJSON[key][fields] = []

            recipe[fields].forEach(lowerLevel => {
              switch (typeof (lowerLevel)) {
                case 'string':

                  newJSON[key][fields].push(normalizeString(lowerLevel))

                  break
                case 'object':

                  const newEntries = {}
                  const lowerLevelKeys = Object.keys(lowerLevel)

                  lowerLevelKeys.forEach(thisKeys => {
                    newEntries[thisKeys] = normalizeString(lowerLevel[thisKeys])
                  })

                  newJSON[key][fields].push(newEntries)

                  break
              }
            })
            break
        }
      })
    })
    return newJSON
  }
}

const init = new Init()

class GetData {
  constructor () {
    console.log(init.recipes)
    this.JSON = init.recipes // Si fetch {new getJSON(dataJSON)}
  }

  allDataType (options) {
    const result = []
    switch (options.depth) {
      case 'root':

        this.JSON.forEach(recipe => {
          if (!normalizeString(result).includes(recipe[options.fields])) {
            result.push(recipe[options.fields])
          }
        })

        break

      case 'lowerLevel':

        this.JSON.forEach(recipe => {
          recipe[options.context].forEach(el => {
            // Tableau associatif {else} tableau unidimensionelle [ternaire]
            options.context !== options.fields ? el = el[options.fields] : el
            if (!normalizeString(result).includes(el)) { result.push(el) }
          })
        })

        break
    }
    return result
  }

  specificData (options) {
    const result = []
    switch (options.depth) {
      case 'root':
        this.JSON.forEach((recipe) => {
          if (recipe[options.fields].includes(options.search)) {
            result.push({
              idRecipe: recipe.id,
              value: recipe[options.fields],
              context: options.context,
              fields: options.fields,
              depth: options.depth,
              search: options.search
            })
          }
        })

        break

      case 'lowerLevel':
        this.JSON.forEach(recipe => {
          const thisArray = recipe[options.context]

          thisArray.filter((el) => {
            if (options.fields !== options.context) { el = el[options.fields] }

            if (el.includes(options.search)) {
              result.push({
                idRecipe: recipe.id,
                value: el,
                context: options.context,
                fields: options.fields,
                depth: options.depth,
                search: options.search
              })
            }
          })
        })

        break
    }
    return result
  }

  getRecipeByID (data) {
    const result = []
    data.forEach((el) => {
      result.push(this.JSON.find(recipes => recipes.id === el))
    })
    return result
  }
}

const getData = new GetData()

/** */

/**
* Recheche les ID des recettes par mots clef
* Renvoie un Tableau d'object contenant les resultat obtenue
* sur les 3 champs de la recherche global
* {name , description, ingredients} *
* @param {string} keyWords
* @returns {array}
*/
const idByGlobalSearch = (keyWords) => {
  const idByGlobal = new Set()

  /*  const lengthKey = keyWords.length
   for(let i = 0 ; i < lengthKey ; i++){
      const search = keyWords[i]
      const lengthOptions = init.globalOptions.length
      for(let inc = 0 ; inc < lengthOptions ; inc++){
          options = init.globalOptions[inc]
          options.search = search
          const result  = getData.specificData(options)

          const hasValid = idByGlobal.has(result)
          if(!hasValid){
              idByGlobal.add(result)
          }
      }
   } */

  keyWords.forEach(search => {
    init.globalOptions.forEach(Options => {
      Options.search = search
      const result = getData.specificData(Options)

      const hasValid = idByGlobal.has(result)
      if (!hasValid) {
        idByGlobal.add(result)
      }
    })
  })

  return idByGlobal
}

/**
* Trie les ID des différents tableaux de resultat {idByGlobalSearch}
* pour ne conserver que les ID unique.
* @param {*} thisData
* @returns
*/
const getUniqueID = (thisData) => {
  uniqueID = new Set()

  thisData.forEach((data) => {
    if (data.length > 0) {
      data.forEach((value) => {
        const hasValid = uniqueID.has(value.idRecipe)
        if (!hasValid) {
          uniqueID.add(value.idRecipe)
        }
      })
    }
  })
  return uniqueID
}

/*
const algoBasique = (keyWords) => {
  //Nettoyage de tous les espaces comprit dans la chaîne de caractères
  const keyWordsArray = keyWords.trim().replace(/  +/g, ' ').split(' ')
  const idByGlobal = idByGlobalSearch(keyWordsArray)
  const uniqueID = getUniqueID(idByGlobal)
  return  getData.getRecipeByID(uniqueID);

} */

const algoBasique = (keyWords) => {
  const optionsLenght = init.globalOptions.length
  const keyWordsArray = keyWords.trim().replace(/  +/g, ' ').split(' ')
  const keyWordLength = keyWordsArray.length
  const finalResult = []

  // On boucle pour chaque mots saisie dans la barre de recherche
  for (let inc = 0; inc < keyWordLength; inc++) {
    for (let incOptions = 0; incOptions < optionsLenght; incOptions++) {
      const fields = init.globalOptions[incOptions].fields
      const context = init.globalOptions[incOptions].context
      const depth = init.globalOptions[incOptions].depth

      const search = normalizeString(keyWordsArray[inc])
      const regex = new RegExp(search, 'g')
      const jsonLength = init.recipes.length

      for (let incJson = 0; incJson < jsonLength; incJson++) {
        if (depth === 'root') {
          if (normalizeString(init.recipes[incJson][context]).match(regex)) {
            finalResult.push({
              idRecipe: dataJSON[incJson].id
            })
          }
        }

        if (depth === 'lowerLevel') {
          init.recipes[incJson][context].forEach(ing => {
            if (normalizeString(ing[fields]).match(regex)) {
              finalResult.push({
                idRecipe: dataJSON[incJson].id
              })
            }
          })
        }
      }
    }
  }

  // On boucle sur les tableau D'id pour ne conserver que les id uniques

  // console.log(finalResult);

  uniqueID = []

  finalResult.forEach((data) => {
    // console.log(data);

    if (!uniqueID.includes(data.idRecipe)) {
      uniqueID.push(data.idRecipe)
    }
  })

  const idRecipe = getData.getRecipeByID(uniqueID)
  return idRecipe
}
