let num = [9 , 8, 1, 2]
num.sort()
for(let pos in num){
    console.log(num[pos])
}
let pos = num.indexOf(8)
console.log(`Posição ${pos}`)