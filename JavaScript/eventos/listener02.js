// const caixa1 = document.querySelector('#caixa1')
// const caixa2 = document.querySelector('#caixa2')
// const btn = document.querySelector('#btn_copiar')

// const todos = [...document.querySelectorAll('.curso')]

// todos.map((elemento)=>{
//     elemento.addEventListener('click', (evt)=>{
//         const curso = evt.target
//         curso.classList.toggle('selecionar')
//         console.log(curso)
//     })
// })

// btn.addEventListener('click', ()=>{
//     const selecionados =[... document.querySelectorAll('.selecionar')]

//     selecionados.map((elm)=>{
//         if (elm.parentNode == caixa1){
//             caixa2.appendChild(elm)
//             console.log(elm)
//         }
//         else{
//             caixa1.appendChild(elm)
//         }
//         console.log(elm.parentNode)
        
//     })
// })


// * toggle -> se tiver o elemento ele remove/ se não tiver ele adiciona

// SEGUNDA OPÇÃO, POREM AGORA TODOS SELECIONADOS PERTENCEM AO
//CAIXA02 E OS NÃO SELECIONADOS AO CAIXA01


const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn = document.querySelector('#btn_copiar')

const todos = [...document.querySelectorAll('.curso')]

todos.map((elemento)=>{
    elemento.addEventListener('click', (evt)=>{
        const curso = evt.target
        curso.classList.toggle('selecionar')
        console.log(curso)
    })
})

btn.addEventListener('click', ()=>{
    const selecionados =[... document.querySelectorAll('.selecionar')]

    const notSelecionados = [...document.querySelectorAll('.curso:not(.selecionar)')]

    console.log(notSelecionados)

    selecionados.map((elm)=>{
        caixa2.appendChild(elm)
    })
    notSelecionados.map((elm)=>{
        caixa1.appendChild(elm)
    })
})

//A variavel notSelecionados contem um querrySelectorAll
// usamos o :not(classe ou id) --> Caso seja falso pegue

