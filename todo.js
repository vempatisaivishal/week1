class Todo {
    constructor() {
        this.todos = [];
    }//always call constructor to initialize

    add(todo) {
        this.todos.push(todo);
    }

    remove(indexOfTodo) {
        if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
            this.todos.splice(indexOfTodo, 1);
        }//splice is used to remove the value at that index and one value
    }

    update(index, updatedTodo) {
        if (index >= 0 && index < this.todos.length) {
            this.todos[index] = updatedTodo;
        }
    }

    getAll() {
        return this.todos;
    }

    get(indexOfTodo) {
        if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
            return this.todos[indexOfTodo];
        }
        return null;
    }

    clear() {
        this.todos = [];
    }
}

module.exports = Todo;

const todoList = new Todo();
todoList.add('Task 1');
todoList.add('Task 2');
todoList.add('Task 3');

console.log(todoList.getAll()); // Output: ['Task 1', 'Task 2', 'Task 3']

todoList.remove(1);
console.log(todoList.getAll()); // Output: ['Task 1', 'Task 3']

todoList.update(0, 'Updated Task 1');
console.log(todoList.getAll()); // Output: ['Updated Task 1', 'Task 3']

console.log(todoList.get(1)); // Output: 'Task 3'

todoList.clear();
console.log(todoList.getAll()); // Output: []