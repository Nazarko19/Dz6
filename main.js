
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
// let contents = document.getElementById('content')
// console.log(contents)
// contents.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, voluptatum.'
// // змініть кожному елементу колір фону на червоний
// contents.style.background = 'red';
// // -- змініть кожному елементу колір тексту на синій
// contents.style.color = 'blue'
// // -- отримує текст з блоку з id "rules"
// let divs = document.getElementsByTagName('div')
// console.log(divs)
// let div = divs[0]
// div.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, cupiditate!'
// // змініть кожному елементу колір фону на червоний
// div.style.background = 'red'
// // -- змініть кожному елементу колір тексту на синій
// div.style.color = 'blue'
// // отримати весь список класів елемента з id=rules і вивести їх в console.log
// let rules = document.getElementById('rules')
// console.log(rules);
//
// // -- поміняти колір тексту у всіх елементів fc_rules на червоний
// // отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довіль
// let fc_rules = document.getElementsByClassName('fc_rules')
// console.log(fc_rules)
// for (const fcrule of fc_rules) {
//     console.log(fcrule)
//     fcrule.style.color = 'red'
//     fcrule.onclick = function (){
//         console.log(`clik on fc_rules`)
//         console.log(`${fc_rules.text}`)
//
//     }
// }
//


// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// b) робить шириниу елементу ul 400px
// c) робить шириниу всіх елементів з класом linkList шириною 50%
// d) отримує текст який зберігається в елементі з класом listElement2
// e) отримує всі елементи li та змінює ім колір фону на сірий
// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// l) отримати елементи p та змінити їм padding на 20px
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)


// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let main_header = document.getElementById('main_header')
main_header.innerText = 'june-2021'

// робить шириниу елементу ul 400px
let uls = document.getElementsByTagName("ul")
for (const ul of uls){
    console.log(ul);
    ul.style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// e) отримує всі елементи li та змінює ім колір фону на сірий
let linklists = document.getElementsByClassName('linkList')
for (let linklist of linklists){
    // console.log(linklist)
    linklist.style.width = `50%`
    linklist.style.background = 'silver'
}
// d) отримує текст який зберігається в елементі з класом listElement2
let linklist = linklists[1]
console.log(linklist);



// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let aa = document.getElementsByTagName('a')
console.log(aa)
for (const a of aa) {
    a.classList.add(`anchor`);
    if (a === aa[2]){
        a.style.width = '40px'
    }
    a.classList.add(`element_${a}`)
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()


let sub_heards = document.getElementsByClassName('sub-header')
for ( const sub_heard of sub_heards){
    sub_heard.style.background = prompt('pls enter color')
    if (sub_heard === sub_heards[1]){
        sub_heard.innerHTML = prompt('enter text')
    }

}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let content_1s = document.getElementsByClassName('content_1')
for (const content_1 of content_1s){
    content_1.innerHTML = prompt('enter text')
}
// l) отримати елементи p та змінити їм padding на 20px
let ps = document.getElementsByClassName('p')
for (const p of ps){
    p.style.padding = '20px'
}


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

let text2s = document.getElementsByClassName('text2')
 for (const text2 of text2s){
     text2.innerHTML = 'july-2021'
 }







