let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(this) // this == module.exports

comparaComThisArrow = comparaComThisArrow.bind(obj) // arrow function tem prioridade sobre bind
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
