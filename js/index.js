const input = document.getElementById("myInput");
const addBtn = document.getElementsByClassName("addBtn");
const todolist = document.getElementsByClassName("todo-list");

input.addEventListener('click',inputClick);
todolist[0].addEventListener("click",todolistEvent);
addBtn[0].addEventListener('click',addBtnClick)


function inputClick() {
    console.log('inputclick');
}
function todolistEvent() {
    console.log('todolistEvent');
}
// 这里函数内部的this是 触发该事件的标签
function addBtnClick(e) {
    // 新建todolist-div
    // console.log(inputData);
    e.preventDefault();
    const newtododiv = document.createElement('div');
    newtododiv.classList.add('newtododiv');
    const newtodoli = document.createElement('li');
    newtodoli.innerHTML = this.inputData;
    newtodoli.classList.add('newtodoli');
    newtododiv.appendChild(newtodoli);
}
function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}
function removeLocalTodos(todo) {
    let todos;
    if (localStorage.setItem('todos') === null) {
        todo = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    const todoindex = todo.child[0].innerHTML;
    todos.splice(todos.)
}