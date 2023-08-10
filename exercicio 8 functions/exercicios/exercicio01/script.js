function guarda(){
    let get = document.getElementById("valor").value
    if (get > 0 && get <= 100 && !inlista(get, valores)){
        valores.push(Number(get))
        let show = document.getElementById("vet")
        let item = document.createElement('option')
        item.text = `Valor ${valores[valores.length - 1]} foi adicionado`
        item.value = `valor${valores.length}`
        show.appendChild(item)
    }
    else{
        alert("[ERRP] Valores apenas valores de 1 á 100 e que não esteja na lista")
    }
}

function inlista(num, l){
    if (l.indexOf(Number(num)) != -1){
        return true
    }
    else{
        return false
    }
}

function tudo(){
    final.innerHTML = ''
    if (valores.length == 0){
        final.innerHTML = "Nenhum numero encontrado"
    }else{
        final.innerHTML = `O vetor contem ${valores.length} valores`
        final.innerHTML += `<br>A soma dos valores é ${soma()}`
        final.innerHTML += `<br>A media dos valores é ${media()}`
        final.innerHTML += `<br>O maior valor do array é ${maior()}`
        final.innerHTML += `<br>O menor valor do array é ${menor()}`
    }
}

function soma(){
    let cont = 0
    for (let v in valores){
        cont += Number(valores[v])
    }
   return cont
}

function media(){
    return soma() / valores.length
}

function maior(){
    var maior = 1
    for (let c in valores){
        if(valores[c] > maior){
            maior = valores[c]
        }
    }
    return maior
}

function menor(){
    var menor = 101
    for (var c in valores){
        if(valores[c] < menor){
            menor = valores[c]
        }
    }
    return menor
}

var valores = []
let final = document.getElementById('all')