const xhr = new XMLHttpRequest()
xhr.addEventListener('readystatechange', event => {
    if (xhr.readyState === xhr.DONE) {
        console.log(xhr.responseText)
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send()


fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Ошибка:', error));