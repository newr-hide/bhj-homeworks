const hint = document.querySelectorAll('.has-tooltip')



hint.forEach(elem => {
    
    elem.addEventListener('click', (event)=> {
        event.preventDefault();
        let hintText = elem.getAttribute('title');
        const tooltipShow = document.querySelector('.tooltip')
        if (tooltipShow && tooltipShow.textContent === hintText) {
            tooltipShow.classList.toggle('tooltip_active');
            return;
        }
        if (tooltipShow) {
            tooltipShow.remove();}
        
        let tooltipDiv = document.createElement('div');
        tooltipDiv.className = 'tooltip tooltip_active';
        tooltipDiv.textContent = hintText;
        
        let rect = elem.getBoundingClientRect();
        tooltipDiv.style.top = `${rect.bottom + 4}px`;
        tooltipDiv.style.left = `${rect.left + 4}px`

        elem.after(tooltipDiv);
         
    })
})

