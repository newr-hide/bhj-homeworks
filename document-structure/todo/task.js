const taskList = document.getElementById('tasks__list')
const form = document.querySelector('form')
const taskInput = document.getElementById('task__input')

form.addEventListener('submit', event => {
    event.preventDefault();
    const createTask = document.createElement('div');
    createTask.className = 'task';
    const createTaskTitle = document.createElement('div');
    createTaskTitle.className = 'task__title';
    createTaskTitle.textContent = taskInput.value;
    const createTaskRemove = document.createElement('a');
    createTaskRemove.className = 'task__remove';
    createTaskRemove.textContent = '×';
    
    taskList.appendChild(createTask);
    createTask.appendChild(createTaskTitle);

    createTask.appendChild(createTaskRemove);
    taskInput.value = '';
    const tasks = taskList.querySelectorAll('.task')
    tasks.forEach((elem) => {
        const taskRemove = elem.querySelector('.task__remove')
        if (taskRemove) {
            taskRemove.addEventListener('click', (event) => {
                elem.remove();
            })
        }
        
    })
});
