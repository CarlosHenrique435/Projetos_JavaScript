const soma = (...valores)=>{
    const somar = val => {
        let s = 0
        for (let n of val){
            s+=n
        }
        return s
    }
    return somar(valores)
}

console.log(soma(1,2,3,4,10))
