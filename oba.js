class  Cadastro {
    constructor (nome, cpf, rg, endereço, renda) {
        this.nome = nome
        this.cpf = cpf
        this.rg = rg
        this.endereço = endereço
        this.renda = renda
    }
    info() {
        console.log ("Nome: " + this.nome)
        console.log ("CPF: " + this.cpf)
        console.log ("RG: " + this.rg)
        console.log ("Endereço: " + this.endereço)
        console.log ("Renda: " + this.renda)
    }
}

const cad = new Cadastro("Liedson", 12556232156, 10564126, "Cabo de santo agostinho", "R$ 500,00" )
//cad.info() - exemplo da chamada da função da superclasse.

class Login extends Cadastro {
    constructor (digital) {
        super("Liedson Alves", 12556232156, 10564126, "Cabo de santo agostinho", "R$ 500,00")
        this.digital = digital
    }
    mostrar() {
        super.info() 
    console.log("Digital cadastrada: " + (this.digital ? "Sim" : "Não" )) 
    }
    entrar() {
        // Falta implementação
    }
}
const c1 = new Login (true)
c1.mostrar()