function contar(){
    var inicio = document.getElementById("ini")
    var pass = document.getElementById('pass')
    var fim = document.getElementById('fim')
    var res = document.getElementById('res')
    if (pass.value.length == 0 || inicio.value.length == 0 || fim.value.length == 0){
        window.alert("[ERRO] falta dados")
    }
    else{
        res.innerHTML = "Contando... "
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        if (i < f){
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F600}`
            }
        }
        else{
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F600}`
            }
        }
    }
    
}