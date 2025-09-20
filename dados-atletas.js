//Criação da classe Atleta
class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil"
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil"
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário"
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto"
        } else {
            return "Sem categoria"
        }
    }

    calculaIMC() {
        return this.peso / (this.altura * this.altura)
    }

    calculaMediaValida() {
        let notas = this.notas.sort(function(a, b){
            return a - b;
        });

        let notasValidas = notas.slice(1, 4);

        let media = notasValidas.reduce(function(total, nota) {
            return total + nota;
        }, 0) / notasValidas.length;

        return media;
    }

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemNotasAtleta() {
        return this.notas;
    }

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return this.calculaIMC();
    }

    obtemMediaValida() {
        return this.calculaMediaValida();
    }
};

let atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log(`Nome: ${atleta.obtemNomeAtleta()} \nIdade: ${atleta.obtemIdadeAtleta()} anos \nPeso: ${atleta.obtemPesoAtleta()}Kg \nAltura: ${atleta.altura}m \nNotas: ${atleta.obtemNotasAtleta()} \nCategoria: ${atleta.obtemCategoria()} \nIMC: ${atleta.obtemIMC()} \nMédia válida: ${atleta.obtemMediaValida()}`)