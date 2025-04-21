document.addEventListener('DOMContentLoaded', () => {
const subModal = document.getElementById('subscribe-modal');
if (!localStorage.getItem('isClose')) {
    subModal.classList.add('modal_active');
const closeModal = document.querySelector('.modal__close');

closeModal.addEventListener('click', () => {
    subModal.classList.remove('modal_active');
    localStorage.setItem('isClose', 'close' )
})
}else {
    console.log("Модальное окно уже закрыто ранее.");
}

})