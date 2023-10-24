const caixa1 =  document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')

console.log(c1_2.parentElement.parentElement.parentElement.children[4])


console.log(caixa1.hasChildNodes())

console.log(caixa1.children.length > 1 ? 'Possui filhos' : 'Não possui filhos')


console.log(caixa1.children[1].innerHTML = 'Teste')

// console.log(caixa1.children[0])
// console.log(caixa1.lastElementChild)
// console.log(document.getRootNode())