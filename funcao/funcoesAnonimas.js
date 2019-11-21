const soma = function (x, y) {
    return x + y
}

const ImprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

ImprimirResultado(3, 4, soma)
ImprimirResultado(3, 4, function(x, y) {
    return x - y
})
ImprimirResultado(3, 4, (x, y) => x * y) // funcao arrow já é anonima

const pessoa = {
    falar: function() {
        console.log('Opa')
    }
}

pessoa.falar()