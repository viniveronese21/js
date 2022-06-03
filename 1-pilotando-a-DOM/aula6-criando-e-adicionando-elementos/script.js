// Criando e Adicionando elementos 

//createElement
const div = document.createElement('div');
div.innerText = "Olá Devs!"


//insertBefore

const body = document.querySelector('body')
const script = body.querySelector('script')
// const header = body.querySelector('header') simulando insertAfter pois não existe 
// body.insertBefore(div, header.nextSibling)
body.insertBefore(div, script)

/*
append prepend

const body = document.querySelector('body')

body.prepend(div)
*/

/*
    insertBfore

*/