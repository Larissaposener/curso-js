const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
    {
		nome: 'Miguel',
		nota: 3,
		turma: '2C',
	}
];


function alunosAprovados(arr,media){
    let aprovados = []
    for(i=0; i<arr.length; i++){
      const {nota, nome} = arr[i]
        if(nota >= media){
            aprovados.push(nome)
        }
    }
    return aprovados
}

//alunosAprovados(alunos,5)

const pessoa1 = {
    nome:'Maria',
    idade:30
}

const pessoa2 = {
    nome:'Carla',
    idade:26
}

const animal = {
    nome: 'Fiona',
    idade: 5,
    raca: 'Pug'
}
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

//console.log(calculaIdade.call(pessoa2,30))
console.log(calculaIdade.apply(animal,[4]))