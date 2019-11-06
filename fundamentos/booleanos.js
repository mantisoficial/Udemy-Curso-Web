let isAtivo = false
console.log(isAtivo)

isAtivo = true 
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // !! para saber se o valor 1 é verdadeiro

console.log('os verdadeiros...') // exemplos de valores verdadeiros
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log('texto')
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // verdadeiro se for possível a atribuição

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) // falso se a atribuição for igual a zero ou false

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = ''
console.log(nome || 'Desconhecido')
