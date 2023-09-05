const soma=(a, b, c)=>{
    return a+b+c
}
let valores = [1,3,5]
console.log(soma(...valores))

const objs=document.getElementsByTagName("div")
const objs2=[...document.getElementsByTagName('div')]
console.log(objs)
console.log(objs2)
objs2.forEach(Element =>{
    console.log(Element)
})