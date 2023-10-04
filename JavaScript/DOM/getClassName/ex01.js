//GetElementbyClassName pega elementos de classes especificas

const todos = [...document.getElementsByClassName('curso')]
const todosc1 = [...document.getElementsByClassName('c1')]
const todosc2 = [...document.getElementsByClassName('c2')]
const elementos = document.getElementsByClassName('curso')[0]
console.log(todos)
console.log(todosc1)
console.log(todosc2)
console.log(elementos)

todosc1.map((el)=>{
    el.classList.add('destaque')
})