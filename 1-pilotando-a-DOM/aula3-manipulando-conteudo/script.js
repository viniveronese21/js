// Manipulando conteudo

// textContent
// innerHTML
// innerText
// value


// const element = document.querySelector('input');

// console.log(element.value)
// element.value = "Valor que eu quiser"

// element.innerHTML = "Olá Devs! <small>!!!!</small>"
// element.innerText = "Olá Devs!"
// element.textContent = "Olá Devs!"

// Manipulando elementos 

// Atributos

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerId = document.querySelector('#header')

console.log(headerId.getAttribute('class'))

header.removeAttribute('id')

header.setAttribute('class', 'bg-header')