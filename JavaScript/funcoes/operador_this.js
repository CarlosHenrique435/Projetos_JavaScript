//this -> referencia da função

function Aluno(nome, nota){
    this.nome = nome
    this.nota = nota

    this.dados_anonimos = function(){
        setTimeout(function(){
            this.nome = 'carlos'

            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }
}

const al1= new Aluno('Carlos', 90)
al1.dados_anonimos()