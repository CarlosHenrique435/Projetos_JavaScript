//para geradores precisamos usar function

function* perguntas(){
    const name = yield 'Qual é o seu nome?: '
    const esport = yield 'Qual seu esporte favorito?: '
    return `Seu nome é ${name} e seu esporte favorito é ${esport}`
}

const itr = perguntas()
console.log(itr.next().value)
console.log(itr.next('carlos henrique').value)
console.log(itr.next('Futebol').value)


function* contador(){
    let i = 0
    while(true){
        yield i++
        if (i > 50){
            break
        }
    }
}

const itc = contador()

for(c of itc){
    console.log(c)
}
