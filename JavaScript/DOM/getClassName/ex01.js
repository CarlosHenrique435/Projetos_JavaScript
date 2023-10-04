//GetElementbyClassName pega elementos de classes especificas

const divs = [...document.getElementsByTagName('div')]
const todos = [...document.getElementsByClassName('curso')]
const todosc1 = [...document.getElementsByClassName('c1')]
const todosc2 = [...document.getElementsByClassName('c2')]
const elementos = document.getElementsByClassName('curso')[0]

const first_query = document.querySelector("div")
const all_query = [...document.querySelectorAll('div')]
const all_cursos = [...document.querySelectorAll('.curso')]

console.log(first_query)//retorna o primeiro encontrado
console.log(all_query)
console.log(all_cursos)

// console.log(divs)
// console.log(todos)
// console.log(todosc1)
// console.log(todosc2)
// console.log(elementos)

todosc1.map((el)=>{
    el.classList.add('destaque')
})