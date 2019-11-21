const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao() // a funçao carrega consigo o local onde foi definido (ela procura no escopo onde foi definida)
}

exec()