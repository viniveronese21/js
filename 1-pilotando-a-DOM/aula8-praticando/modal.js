const button = document.getElementById('openModal');
const modalWrapper = document.querySelector('.modal-wrapper');


button.onclick =  () => {
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', (e) => {

    const isEscKey = e.key === 'Escape'

    if(isEscKey) {
        modalWrapper.classList.add('invisible')
    }
})