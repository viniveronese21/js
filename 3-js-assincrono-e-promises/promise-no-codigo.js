/**
* Promisse
* 
* A promessa de que algo ira acontecer 
* Poderá dar certo ou errado, mas irá acontecer
**/

let aceitar = true

console.log('perdir uber')
const promessa = new Promise((resolve, reject) => {
    if(aceitar) {
        return resolve('Pedido Aceito')
    }
    return reject('Pedido negado')
})

console.log('aguardando')

promessa.then(result => console.log(result)).catch(erro => console.log(erro)).finally(()=> console.log('Finalizada'))
