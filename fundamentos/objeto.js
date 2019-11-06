// objetos são um conjunto de pares chave-valor
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)

// JSON não é a mesma coisa do que objeto. JASON é um formato textual
'{ "nome": "Camisa Polo", "preco": 79.90}' // exemplo de JASON válido

