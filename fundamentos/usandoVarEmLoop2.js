const funcs = [] // array vazio

for(var i =0; i < 10; i++) {
    funcs.push(function() { // push = adicionar novo elemento no array
        console.log(i)
    })
}

funcs[2] ()
funcs[8] ()

// no caso, não importa o índice, vai imprimir sempre 10. Erro histórico do var no js