const addForm = document.querySelector('.add');

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.addEventListener.value.trim();
    console.log(todo);
    
})