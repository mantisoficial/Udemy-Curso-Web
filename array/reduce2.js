const alunos = [
    { nome: 'João', nota: 7.3, bolsista: true },
    { nome: 'Maria', nota: 9.2, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: true },
    { nome: 'Ana', nota: 8.7, bolsista: false }
]

// desafio 1: todos os alunos são bolsistas?
const resultado1 = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(resultado1))

// desafio 2: algum aluno é bolsista?
const resultado2 = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(resultado2))