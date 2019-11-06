const escola = "Cod3r"

console.log(escola.charAt(4)) // função para pegar um determinado caractere dentro da string
console.log(escola.charAt(5)) // não da erro, retorna vazio
console.log(escola.charCodeAt(3)) // função para pegar o código correspondente ao caractere
console.log(escola.indexOf('3')) // pegar um índice a partir de um caractere da string

console.log(escola.substring(1)) // imprimir o string a partir de um índice até o final
console.log(escola.substring(0, 3)) // imprimir o string a partir de um índice até outro
console.log('Escola '.concat(escola).concat("!")) // concatenar strings
console.log('Escola ' + (escola) + ("!"))

console.log(escola.replace(3, 'e')) // substitui um caractere específico da string

console.log('Ana,Maria,Pedro'.split(',')) // quebra a string em array