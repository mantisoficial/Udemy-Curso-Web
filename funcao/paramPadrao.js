// estrategia 1 para gerar valor padrao
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) // soma de zero nao funciona 

// estrategia 2, 3, e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 
    // a é diferente de undefined? Se sim, pegue o valor de a, se não pegue o valor 1
    b = 1 in arguments ? b : 1 
    // dentro de arguments existe o indice 1? Sem sim pegue o valor de b, se não pegue o valor de 1
    c = isNaN(c) ? 1 : c
    // c é um NaN? Se sim, pegue o valor de 1, se não pegue o valor de c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrão de es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))