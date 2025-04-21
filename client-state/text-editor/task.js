document.addEventListener('DOMContentLoaded', ()=>{
const editor = document.getElementById('editor');
const btnCard = document.querySelector('.btn__card')

const savedText = localStorage.getItem('text');
if (savedText) {
    editor.value = savedText;
}
editor.addEventListener('input', () => {
    localStorage.setItem('text', editor.value);
})
btnCard.addEventListener('click', () => {
    editor.value = "";
    localStorage.removeItem('text');
})
})



