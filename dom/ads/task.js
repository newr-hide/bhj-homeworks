const rotator = document.querySelectorAll(".rotator__case")
let currentIndex = 0;

rotator.forEach((elem) => {
const speed = elem.dataset.speed
const color = elem.dataset.color

const iterElement = () => {

    if (currentIndex > 0) {
        rotator[currentIndex -1].classList.remove("rotator__case_active")
    }
    if (currentIndex === rotator.length) {
        rotator[currentIndex-1].classList.remove("rotator__case_active")
        currentIndex = 0;  
    }

    rotator[currentIndex].classList.add("rotator__case_active")
    rotator[currentIndex].style.color = color
    currentIndex++;   
}

setInterval(iterElement, speed)
})

   
  

// const rotator = document.querySelectorAll(".rotator__case")
// let currentIndex = 0;


// const iterElement = () => {

//     if (currentIndex > 0) {
//         rotator[currentIndex -1].classList.remove("rotator__case_active")
//     }
//     if (currentIndex === rotator.length) {
//         rotator[currentIndex-1].classList.remove("rotator__case_active")
//         currentIndex = 0;
        
//     }

//     rotator[currentIndex].classList.add("rotator__case_active")
//     currentIndex++;

// }

// setInterval(iterElement, 2000)


   
  
