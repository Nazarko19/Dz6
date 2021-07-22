
// Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
// -- отримує текст з блоку з id "rules"
// -- замініть текст параграфа з id 'content' на будь-який інший
// -- замініть текст параграфа з id 'rules' на будь-який інший
// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
//

// -- отримує текст з параграфа з id "content"
let contents = document.getElementById('content')
console.log(contents)
contents.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, voluptatum.'
// змініть кожному елементу колір фону на червоний
contents.style.background = 'red';
// -- змініть кожному елементу колір тексту на синій
contents.style.color = 'blue'
// -- отримує текст з блоку з id "rules"
let divs = document.getElementsByTagName('div')
console.log(divs)
let div = divs[0]
div.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, cupiditate!'
// змініть кожному елементу колір фону на червоний
div.style.background = 'red'
// -- змініть кожному елементу колір тексту на синій
div.style.color = 'blue'
// отримати весь список класів елемента з id=rules і вивести їх в console.log
let rules = document.getElementById('rules')
console.log(rules);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
// отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довіль
let fc_rules = document.getElementsByClassName('fc_rules')
console.log(fc_rules)
for (const fcrule of fc_rules) {
    console.log(fcrule)
    fcrule.style.color = 'red'
    fcrule.onclick = function (){
        console.log(`clik on fc_rules`)
        console.log(`${fc_rules.text}`)

    }
}

