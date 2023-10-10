const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn = document.querySelector('#btn_copiar')

const todos = [...document.querySelectorAll('.curso')]

todos.map((elemento)=>{
    elemento.addEventListener('click', (evt)=>{
        const curso = evt.target
        curso.classList.toggle('selecionar')
    })
})

btn.addEventListener('click', ()=>{
    const selecionados =[... document.querySelectorAll('.selecionar')]

    selecionados.map((elm)=>{
        caixa2.appendChild(elm)
        console.log(elm)
    })
})


// * toggle -> se tiver o elemento ele remove/ se não tiver ele adiciona
