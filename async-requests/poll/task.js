document.addEventListener("DOMContentLoaded", () => {
    fetchPoll();
});

async function fetchPoll() {
    try {
        const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll');
        
        if (!response.ok) throw new Error(`Ошибка при получении данных (${response.status})`);

        // Получаем JSON-данные
        const data = await response.json();

        // Заполняем название опроса
        document.getElementById('poll__title').innerText = data.data.title;

        // Создаем кнопки для каждого варианта ответа
        const answersContainer = document.getElementById('poll__answers');
        data.data.answers.forEach(answer => {
            let button = document.createElement('button');
            button.classList.add('poll__answer');
            button.innerText = answer;
            
            // Обработчик клика по кнопке
            button.onclick = () => alert('Спасибо, ваш голос засчитан!');

            answersContainer.appendChild(button);
        });
    } catch (err) {
        console.error(err.message);
        alert('Возникла ошибка при загрузке опроса.');
    }
}