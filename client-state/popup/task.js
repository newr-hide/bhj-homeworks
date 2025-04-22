document.addEventListener('DOMContentLoaded', () => {
const subModal = document.getElementById('subscribe-modal');
if (!getCookie('isClose')) {
    subModal.classList.add('modal_active');
const closeModal = document.querySelector('.modal__close');

closeModal.addEventListener('click', () => {
    subModal.classList.remove('modal_active');
    setCookie('isClose', 'close')
})
}else {
    console.log("Модальное окно уже закрыто ранее.");
}
})

function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value);
};

function getCookie(name) {
    const pairs = document.cookie.split('; ')
    const cookie = pairs.find(p=>p.startsWith(name + '='))
    if (cookie === undefined) {
        return null;
      }
    return cookie.substring(name.length + 1)
}