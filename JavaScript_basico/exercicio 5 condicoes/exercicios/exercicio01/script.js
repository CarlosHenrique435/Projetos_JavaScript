var now = new Date()
        var hora = now.getHours()
        var min = now.getMinutes()
        var escreva = document.getElementById('hour')
        var image = document.getElementById("picture")
        escreva.innerHTML = `Agora são ${hora}:${min}`
        if(hora >= 0 && hora < 12){
            image.src = 'midia/manha.jpg'
            document.body.style.background = "#326d59"
        }
        else if (hora < 18){
            image.src = 'midia/tarde.jpg'
            document.body.style.background = "#835057"
        }
        else{
            image.src = 'midia/noite.jpg'
            document.body.style.background = "#39304f"
        }