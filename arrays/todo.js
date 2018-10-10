const todos = [{
    text: 'Order cat food',
    completed: true
}, {
    text: 'Buy food',
    completed: false
}, {
    text: 'Do Work',
    completed: true
}, {
    text: 'Excercise',
    completed: false
}, {
    text: 'Do HW',
    completed: true
}]

// const deleteTodo = function (todos, todoText) {
//     const index = todos.findIndex(function (todo) {
//         return todo.text.toLowerCase() === todoText.toLowerCase()
//     })
//     if (index > -1) {
//         todos.splice(index, 1)
//     }
// }

// const getThingsToDo = function (todo, query) {
//     return todos.filter(function(todo, index) {
//        return todo.completed === false
//     })
// }

// console.log(getThingsToDo(todos));


// deleteTodo(todos, 'buy food')
// console.log(todos);

const sortTodos = function (todos) {
    todos.sort(function(a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos);
