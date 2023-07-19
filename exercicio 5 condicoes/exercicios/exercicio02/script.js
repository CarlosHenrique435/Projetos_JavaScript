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
        var img = document.createElement("img")
        img.setAttribute('id', 'foto')
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
            if (calc < 10){
                img.setAttribute('src', 'midia/menino-crianca.png')
                document.body.style.background = '#0192ce'
            }
            else if(calc >= 10 && calc <= 18){
                img.setAttribute('src', 'midia/menino-jovem.png')
                document.body.style.background = "#121324"
            }
            else if(calc > 18 && calc < 55){
                img.setAttribute('src', 'midia/homem.png')
                document.body.style.background = '#9a684b'
            }
            else{
                img.setAttribute('src', 'midia/homem-velho.png')
                document.body.style.background = '#a0adb7'
            }
        }
        else{
            genero = 'Mulher'
            if(calc < 10){
                img.setAttribute('src', 'midia/menina-crianca.png')
                document.body.style.background = '#ae67a3'
            }
            else if(calc >= 10 && calc <= 18){
                img.setAttribute('src', 'midia/menina-jovem.png')
                document.body.style.background = '#9c9d9f'
            }
            else if(calc > 18 && calc < 55){
                img.setAttribute('src', 'midia/mulher.png')
                document.body.style.background = '#89a3a0'
            }
            else{
                img.setAttribute('src', 'midia/mulher-velha.png')
                document.body.style.background = '#014c5c'
            }
        }

        result.innerHTML = `Detectamos ${genero} com ${calc} anos `
        result.appendChild(img)
    }
}