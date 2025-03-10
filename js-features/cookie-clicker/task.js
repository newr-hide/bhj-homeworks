const counter = document.getElementById("clicker__counter")
const img = document.getElementById("cookie")
const speedClick = document.getElementById("speed__click")

let currentCount = counter.innerText;
let previousTime = Date.now();

img.onclick = ()=> {
    currentCount++;
    counter.innerText = currentCount;
    if (currentCount % 2 == 0) {
        
    img.width += 20
    img.height += 20
    }

    else {
        img.width -= 20
        img.height -= 20
    } 

    const currentTime = Date.now();
    const clickSpeed = (currentTime - previousTime) / 1000;
    speedClick.innerText =  clickSpeed.toFixed(2);
    previousTime = currentTime;
}