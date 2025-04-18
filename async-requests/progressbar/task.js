const form = document.getElementById('form');
const progressBar = document.getElementById('progress')
const fileInput = document.getElementById('file')


form.addEventListener('submit', (event) =>{
    event.preventDefault();

if (!fileInput.files.length) return alert('Выберите файл!');

let formData = new FormData();
formData.append('file', fileInput.files[0]);

progressBar.value = 0;

try {
   const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.upload.onprogress = updateProgress;
    xhr.send(formData);

    function updateProgress(event) {
        if (event.lengthComputable) {
            const percentComplete = Math.round((event.loaded / event.total) * 100);
            progressBar.value = percentComplete;
        }
    };

    xhr.onload = () => {
        if (xhr.status === 200 || xhr.status === 201) {
            console.log('Файл успешно отправлен.');
        } else {
            console.log('Ошибка при отправке файла.');
        }
    };
}catch (err) {
    console.error(err);
}
})


