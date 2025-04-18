const tasksList = document.getElementById('tasks__list')
const form = document.querySelector('form')
const taskInput = document.getElementById('task__input')

form.addEventListener('submit', event => {
    event.preventDefault();
    let inputValue = taskInput.value.trim();
    if(!inputValue) return;
    
  const title = inputValue;
   const task = tasksList.querySelector('.task')
    
    taskInput.value = '';
    tasksList.insertAdjacentHTML('afterbegin', `
        <div class="task">
          <div class="task__title">
            ${title}
          </div>
          <a href="#" class="task__remove">&times;</a>
        </div>
        `);
     
    tasksList.addEventListener('click', (event) => {
        const target = event.target;
        if(target.classList.contains('task__remove')) {
            const taskToRemove = target.closest('.task');
            taskToRemove.remove();
        }
        
    })
});
