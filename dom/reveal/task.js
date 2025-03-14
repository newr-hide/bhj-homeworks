const reverals = document.querySelectorAll(".reveal")

reverals.forEach((item) => {
    document.addEventListener('scroll', () => {
    const {top, bottom} = item.getBoundingClientRect()
    if (top >= 0 && top <= 815) {
        item.classList.add("reveal_active")
    }else if (top < 0) {
        item.classList.remove("reveal_active") 
    }
    console.log(top, bottom)
})
})








