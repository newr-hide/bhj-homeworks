const rotator = document.querySelectorAll(".rotator__case")

const iterElement = (elem) => {
    const speed = elem.dataset.speed
    const color = elem.dataset.color
    document.querySelector(".rotator__case_active").classList.remove("rotator__case_active");
    elem.style.color = color
    if (!elem.nextElementSibling) {
        elem = rotator[0];
      } else {
        elem = elem.nextElementSibling;
      }
      
      elem.classList.add("rotator__case_active")

setTimeout(() => iterElement(elem), speed)
}

iterElement(rotator[0]);


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




   
  
