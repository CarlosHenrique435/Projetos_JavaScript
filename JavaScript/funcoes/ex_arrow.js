//const soma=function(v1,v2){return v1+v2}

const soma = (...valores)=>{//arrow
    let res = 0 
    for (let n of valores){
        res+=n
    }
    return res
}

console.log(soma(12,23,15,12))

const add = n => n + 50

console.log(add(5))
