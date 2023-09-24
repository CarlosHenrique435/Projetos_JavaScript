function soma(...valores){
    let s = 0
    for (n of valores){
        s+=n
    }
    return s
}

console.log(soma(9,10,90))


//funções anonimas

const def = new Function("n1", "n2", "return n1+n2")
console.log(def(10,1))
