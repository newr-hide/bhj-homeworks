const xhr = new XMLHttpRequest()
const items = document.getElementById('items')
const loader = document.getElementById('loader')
xhr.addEventListener('readystatechange', event => {
    if (xhr.readyState === xhr.DONE) {
        responseJson(xhr.responseText)
    }

})
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send()

function responseJson(response) {
    try {
        const data = JSON.parse(response);
        if (data && data.response && data.response.Valute) {
            const valuteData = Object.entries(data.response.Valute);
            insertData(valuteData);}
    }
    catch (err) {
            console.error("Ошибка  JSON:", err.message);
    }
}

function insertData(valuteData) {
    valuteData.forEach(([key, elem]) => {
        let template = `<div class="item"><div class="item__code">${elem.CharCode}</div>
                <div class="item__value">${elem.Value}</div>
                <div class="item__currency">руб.</div></div>`;
        
        items.insertAdjacentHTML('beforeend', template)
        loader.remove()
        //или можно удалить класс loader_active
        // loader.classList.remove('loader_active')
    });
}