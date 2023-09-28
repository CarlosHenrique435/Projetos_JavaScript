//this -> referencia da função

function Aluno(nome, nota){
    this.nome = nome
    this.nota = nota

    this.dados_anonimos = function(){
        setTimeout(()=>{//com arrow function não perdemos o this da instancia da função acima
            this.nome = 'carlos'//nova instancia de this para o setTimeout

            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }
}

const al1= new Aluno('Carlos', 90)
al1.dados_anonimos()

//a função setTimeout cria uma nova instancia do this por isso
//não conseguimos ter acesso ao this/referencia da função anterior