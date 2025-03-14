const bookControl = document.querySelectorAll(".font-size")
const bookContent = document.querySelector('.book__content')
bookControl.forEach((item) => {
    const fontSize = item.dataset.size
    item.addEventListener('click', (event) => {
        
        event.preventDefault();
        bookControl.forEach((elem) => {
            if (elem !== item) {
            elem.classList.remove('font-size_active')}
        });
        bookContent.classList.remove('font-size_small', 'font-size_big');

        if (fontSize == 'small') {
            bookContent.classList.add('font-size_small') 
            item.classList.add('font-size_active')
        }
        else if (fontSize == 'big') {
            bookContent.classList.add('font-size_big') 
            item.classList.add('font-size_active')
        }
        else{
            item.classList.add('font-size_active')
        }
        
        
    })
})






// const color = elem.dataset.color
// rotator[currentIndex].style.color = color


console.log(bookControl)