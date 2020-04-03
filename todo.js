let todos = ["gaming", "sleep", "eat", "traveling"];

let loopingTodos = todo => {
    let todoResult = "";

    for (let index = 0; index < todo.length; index++) {
        todoResult += `${index + 1}.${todo[index]} \n`;
    }
    alert(todoResult);
};

let showTodos = todo => {
    loopingTodos(todo);

    let isAddTodo = confirm("do you want to add todo?");

    if (isAddTodo === true) {
        let newTodo = prompt("fill your todo here", "todo");

        todos.push(newTodo);

        loopingTodos(todo);
    } else if (isAddTodo === false) {
        editTodo(todo);
    }
};

let editTodo = todo => {
    let isEditTodo = confirm("do yo want to edit todo?");

    if (isEditTodo === true) {
        let indexTodo = prompt("select todos number");
        let editTodo = prompt("insert edit todo");

        todos.splice(indexTodo - 1, 1, editTodo);

        loopingTodos(todo);
    } else if (isEditTodo === false) {
        deleteTodo(todo);
    }
};

let deleteTodo = todo => {
    let isDeleteTodo = confirm("do you want to delete tod?");

    if (isDeleteTodo === true) {
      let indexTodo = prompt("select todos number");
        todos.shift(indexTodo-1, deleteTodo);

        loopingTodos(todo);
    }  else if (isDeleteTodo ===false){
        alert ("what do you want?");
        
        loopingTodos(todo);
    }
};

showTodos(todos);