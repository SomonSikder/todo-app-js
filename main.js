const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".addToDo");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector('.filter-todo');

todoButton.addEventListener('click',addToDo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

function addToDo(event){
    event.preventDefault();
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add("todo");

    const newToDo = document.createElement('li');
    newToDo.innerText= todoInput.value;  
    newToDo.classList.add('toDo-item');
    if(todoInput.value.trim()==""){
        return
        
    }else if( todoInput.value !==''){
        toDoDiv.appendChild(newToDo);
    }
    

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    toDoDiv.appendChild(completedButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('trash-btn');
    toDoDiv.appendChild(deleteButton);

    todoList.appendChild(toDoDiv)

    todoInput.value = ''
}

function deleteCheck(e){
    const item = e.target;
    if(item.classList[0] == 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall')
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })
    }
    if(item.classList[0] == 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }

}
function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex';
                break
            case 'success':
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none'
                }
                break
            case 'pending':
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none'
                }
                break
        }
    })
}