console.log('a =', a)
var a = 2
console.log('a =', a)

// outro exemplo de hoisting com var
function teste() {
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}

teste()
console.log('a =', a)

/*hoisting não funciona com variável let
*console.log('b =', b)
*let b = 2
*console.log('b =', b)
*/