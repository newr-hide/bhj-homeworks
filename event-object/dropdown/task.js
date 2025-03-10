const valueActiv = document.querySelector(".dropdown__value");
const listActiv = document.querySelector(".dropdown__list");
const itemsActiv = document.querySelectorAll(".dropdown__link")

valueActiv.addEventListener('click', () => {
    
   listActiv.classList.toggle("dropdown__list_active")});
   
   itemsActiv.forEach(item => {
      item.addEventListener('click', event => {
          event.preventDefault();
          valueActiv.textContent = event.target.textContent;
          listActiv.classList.remove("dropdown__list_active");
      });
  });
