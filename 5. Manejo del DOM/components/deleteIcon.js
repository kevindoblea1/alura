const deleteIcon = () => {
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    icon.addEventListener('click', deleteTask);
    
    return icon;
}

const deleteTask = (event) => { 
  event.target.parentElement.remove();
}
export default deleteIcon;