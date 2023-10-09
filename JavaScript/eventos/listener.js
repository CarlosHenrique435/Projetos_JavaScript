const cursos = [...document.querySelectorAll('.curso')]

const msg = () =>{
    alert('ola')
}


//Pedemos colocar uma função pronta dentro do evento.
cursos.map((elm)=>{
    elm.addEventListener('click', (evt)=>{
        evt.target.classList.add('destaque')
    })
})
