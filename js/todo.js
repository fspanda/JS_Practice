const toDoFrom = document.querySelector("#todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.querySelector("#todo-list")

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
}

toDoFrom.addEventListener("submit", handleToDoSubmit)