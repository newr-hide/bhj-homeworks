const getId = document.getElementById("timer")

const interval = setInterval(()=>{
    let timer = getId.textContent
    timer--;
    getId.textContent = timer;

        if (timer === 0) {
            clearInterval(interval)
            alert("Вы победили в конкурсе!")
        }
    }, 1000);