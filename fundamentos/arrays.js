const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // indíce que não existe undefined

valores[4] = 10
console.log(valores)
console.log(valores.length) // quantidade de elemntos do array

valores.push({id: 3}, false, null, 'teste') // arrays são heterogêneos 
console.log(valores)

console.log(valores.pop()) // retira o último valore do array e retorna
delete valores[0]
console.log(valores)

console.log(typeof valores)

 