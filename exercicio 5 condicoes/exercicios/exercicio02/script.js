function verificar(){
    var now = new Date()
    var ano = now.getFullYear()
    var nasc = document.getElementById("txtano").value
    var result = document.getElementById("res")
    if (nasc.length == 0 || nasc > ano){
        window.alert('Didite uma ano de nascimento valido!')
    }
    else{
        var calc = ano - nasc
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var pic = document.getElementById("picture")
        if (fsex[0].checked){
            genero = 'Homem'
        }
        else{
            genero = 'Mulher'
        }
        result.innerHTML = `Detectamos ${genero} com ${calc} anos `
        if (calc <= 14 && genero == "Homem"){
            pic.src = 'midia/menina-jovem.png'
        }

    }
}