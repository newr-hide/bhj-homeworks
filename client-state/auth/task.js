document.addEventListener('DOMContentLoaded', () => {
    const signin = document.getElementById('signin')
    const form = document.getElementById('signin__form');
    const login = document.querySelector('input[name="login"]')
    const password = document.querySelector('input[name="password"]')
    const welcome = document.getElementById('welcome')

    if (localStorage.getItem('user_id')) {
        signin.classList.remove('signin_active') 
        welcome.classList.add('welcome_active')
        welcome.textContent += localStorage.getItem('user_id')
    }
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!login.value.length) return alert('Введите логин!');
        if (!password.value.length) return alert('Введите пароль!');
        const xhr = new XMLHttpRequest();
        
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
        xhr.setRequestHeader('Content-Type', 'application/json');
        
        const data = JSON.stringify({
            login: login.value,
            password: password.value
        });
        xhr.responseType = 'json';
        xhr.send(data);

        xhr.onload = () => {
            const responseJSON = xhr.response;
                if (!responseJSON.success) {
                    alert('Неверный логин/пароль')
                }else{
                welcome.classList.add('welcome_active')
                welcome.textContent += responseJSON.user_id
                signin.classList.remove('signin_active')
                localStorage.setItem('user_id',responseJSON.user_id)
            console.log(xhr.responseText);}
            }
}) 
})