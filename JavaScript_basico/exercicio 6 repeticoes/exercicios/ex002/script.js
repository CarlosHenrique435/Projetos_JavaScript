function multiplicar(){
    let num = document.getElementById('num').value
    let res = document.getElementById('res')
    if (num.length == 0){
        window.alert("Digite valores nulos")
    }
    else{
        let n = Number(num)
        let c = 1
        res.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${n*c}`
            item.value = `tab${c}`
            res.appendChild(item)
            c++
        }
    }
}