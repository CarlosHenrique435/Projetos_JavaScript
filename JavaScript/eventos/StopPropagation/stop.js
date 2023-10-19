const caixa1 = document.querySelector('#caixa1')
const btn_c1 = document.querySelector('#c1')
const all = [...document.querySelectorAll('.curso')]

caixa1.addEventListener('click', (evt)=>{
    console.log('clicou')
})


all.map((el)=>{
    el.addEventListener('click', (evt)=>{
        evt.stopPropagation()
    })
})

