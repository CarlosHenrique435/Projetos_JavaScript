function fatorial(n){
    let pos = 1;
    for(let cont = n; cont > 1; cont--){
        pos *= cont
    }
    return pos
}
console.log(fatorial(5))