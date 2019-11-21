const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sem callback
let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i]) // adicionar elementos no array
    }
}

console.log(notasBaixas1)

// com callback
const notasBaixas2 = notas.filter(function (notas) {
    return notas < 7
})

console.log(notasBaixas2)

// callback com funcao arrow
const notasBaixas3 = notas.filter (nota => nota < 7)
console.log(notasBaixas3)