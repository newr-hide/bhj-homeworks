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

        try {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
            xhr.setRequestHeader('Content-Type', 'application/json');
            
            const data = JSON.stringify({
                login: login.value,
                password: password.value
            });

            xhr.send(data);

            xhr.onload = () => {
                if (xhr.status === 200 || xhr.status === 201) {
                    let responseParse = JSON.parse(xhr.responseText)
                    if (responseParse.success ===false) {
                        alert('Неверный логин/пароль')
                    }else{
                    welcome.classList.add('welcome_active')
                    welcome.textContent += responseParse.user_id
                    signin.classList.remove('signin_active')
                    localStorage.setItem('user_id',responseParse.user_id)
                console.log(xhr.responseText);}
                } else {
                    console.error('Ошибка:', xhr.status, xhr.responseText);
                }
            }}catch (err) {
                console.error(err);
            }
}) 
})