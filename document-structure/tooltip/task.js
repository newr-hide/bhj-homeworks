const hint = document.querySelectorAll('.has-tooltip')



hint.forEach(elem => {
    
    elem.addEventListener('click', (event)=> {
        event.preventDefault();
        const tooltipShow = document.querySelector('.tooltip')
        if (tooltipShow) {
            tooltipShow.remove();}
        else{
            let hintText = elem.getAttribute('title');
        
        let tooltipDiv = document.createElement('div');
        tooltipDiv.className = 'tooltip';
        tooltipDiv.textContent = hintText;
        
        
        tooltipDiv.classList.add("tooltip_active")
        tooltipDiv.classList.add("has-tooltip")
        
        let rect = elem.getBoundingClientRect();
        tooltipDiv.style.top = `${rect.bottom + window.scrollY}px`;
        tooltipDiv.style.left = `${rect.left + window.scrollX}px`;
        elem.after(tooltipDiv);
        } 
    })
})

