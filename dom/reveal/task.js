const reverals = document.querySelectorAll(".reveal")
const { innerHeight } = window;

reverals.forEach((item) => {
    document.addEventListener('scroll', () => {
    const {top, bottom} = item.getBoundingClientRect()
    top < innerHeight && top > 0 ?
    item.classList.add("reveal_active"):
    item.classList.remove("reveal_active") 
    
    console.log(top)
})
})








