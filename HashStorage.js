class HashStorage {
    constructor() {
        this.drinksCollection = {};
    }
    addValue(key, value) {
        this.drinksCollection[key] = value
    }
    getValue(key) {
        return this.drinksCollection[key]
    }
    deleteValue(key) {
        return delete this.drinksCollection[key]
    }
    getKeys() {
        return Object.keys(this.drinksCollection)
    }
}

function addBut(){
    let name = window.prompt('Напишите название коктейля')
    let alcoholism = window.prompt('Он алкогольный?')
    let list = window.prompt('Какие ингридиенты?')
    let description = window.prompt('Как его приготовить?')
    cocktailStorage.addValue(name, {name, alcoholism, list, description})
    let stringCocktailObj = JSON.stringify(cocktailStorage.getValue(name));
    stringCocktailObj = stringCocktailObj.replace(/,/g,'').replace(/""/g,'\n').replace(/{/g,'').replace(/}/g,'').replace(/"/g,' ')
    alert(`Вы добавили рецепт напитка\n${stringCocktailObj}`)
}

function deleteBut(){
    const name = window.prompt('Удалить коктейль');
    let stringCocktailObj = JSON.stringify(cocktailStorage.getValue(name));
    stringCocktailObj = stringCocktailObj.replace(/,/g,'').replace(/""/g,'\n').replace(/{/g,'').replace(/}/g,'').replace(/"/g,' ')
    alert(`Удален коктейль:\n${stringCocktailObj}`)
    cocktailStorage.deleteValue(name)
}

function recipeBut(){
    const name = window.prompt('Получить рецепт напитка...')
    let stringCocktailObj = JSON.stringify(cocktailStorage.getValue(name));
    stringCocktailObj = stringCocktailObj.replace(/,/g,'').replace(/""/g,'\n').replace(/{/g,'').replace(/}/g,'').replace(/"/g,' ')
    const recipe = document.getElementById("recipe");
    let strRecipe = document.createTextNode(`Рецепт напитка:\n${stringCocktailObj}`)
    recipe.appendChild(strRecipe)
}

function viewAllBut(){
    let stringCocktailObj = JSON.stringify(cocktailStorage.getKeys());
    stringCocktailObj = stringCocktailObj.replace(/,/g,'').replace(/""/g,'\n').replace(/{/g,'').replace(/[\[]/g,'').replace(/[\]]/g,'').replace(/}/g,'').replace(/"/g,' ')
    const allCocktails = document.getElementById("allCocktails");
    let strAllCocktails = document.createTextNode(`Список всех рецептов:\n${stringCocktailObj}`)
    allCocktails.appendChild(strAllCocktails)
}

const cocktailStorage = new HashStorage()
cocktailStorage.addValue('Маргарита', {name:'Маргарита', alcoholism: 'да', list:'Водка Finlandia 50мл; Кофейный ликер 25мл; Лед в кубиках 120 г', description: 'Наполни стакан кубиками льда доверху, затем налей кофейный ликер 25 мл, водку 50 мл и размешай коктейльной ложкой.'})
cocktailStorage.addValue('Пеликан', {name:'Пеликан', alcoholism: 'нет', list:'Гренадин Monin 10мл; Клубничный сироп Monin 10мл; Персиковый сок 150мл; Лимонный сок 15мл; Банан 110г; Клубника 50г; Дробленый лед 60г', description:'Положи в блендер очищенную и нарезанную половинку банана и клубнику 2 ягоды. Налей лимонный сок 15 мл, гренадин 10 мл, клубничный сироп 10 мл и персиковый сок 150 мл. Добавь в блендер совок дробленого льда и взбей. Перелей в хайбол. Укрась кружком банана и половинкой клубники на коктейльной шпажке.'})