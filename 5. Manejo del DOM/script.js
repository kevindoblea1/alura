const boton = document.querySelector('[data-form-btn]');
const createTask = (evento) => {
    evento.preventDefault();
    const getInput = document.querySelector('[data-form-input]');
    console.log(getInput.value);
}   


boton.addEventListener('click', createTask);