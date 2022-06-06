// Funções aceitam qualquer tipo de dado como argumento
function imprimirDado(dado) {
    console.log('Outras tarefas')
    console.log(dado())
}

imprimirDado(function () {
    return "Olá Mundo"
})

// imprimirDado(1)
// imprimirDado('text')
// imprimirDado(true)
// imprimirDado({nome: 'João'})
// imprimirDado([1, 2, 3])