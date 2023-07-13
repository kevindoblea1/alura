const btn = document.querySelector('[data-form-btn]');

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';
    const content = `<div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt transIcon icon"></i>`;
    console.log(content);
    
    list.appendChild(task);
    
    task.innerHTML = content;

};

console.log(btn);
btn.addEventListener('click', createTask);