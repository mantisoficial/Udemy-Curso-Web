// variáveis definidas com a palavra var tem escopo global e de função
{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123 // var crida dentro de uma função só é visível em seu escopo (dentro da funcao)
    console.log(local)
}

teste()
console.log(local)
