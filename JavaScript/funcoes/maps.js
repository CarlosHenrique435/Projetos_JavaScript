const cursos = ['HTML', 'JavaScript', 'PHP', 'React']
let get = cursos.map((elemento, indice)=>{
    console.log(`Curso ${elemento} na posição ${indice}`)
    return `<div>${elemento}</div>`
})

//Podemos trabalhar com arrow functions dentro de maps
// * Usamos para percorrer valores/coleções
// * Podemos retornar valores


// let elementos = document.getElementsByTagName('div')
// elementos = [...elementos]
// elementos.map((element, indice)=>{
//     element.innerHTML = 'Ola Mundo'
//     console.log(element.innerHTML)
// })


//const elementos = document.getElementsByTagName('div')
//const val = Array.prototype.map.call(elementos, ({innerHTML})=>innerHTML)//Passa para a variavel "val" apenas o innerHTML de cada "elementos"



const converterInt = (e)=>parseInt(e)
let num = ['1', '2', '3', '4'].map(converterInt)
console.log(num)