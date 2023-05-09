
class Todo {
    #task = [];

    // Getter 
    get todos() {
        return this.#task
    }
    // setters
    set todos(todo) {
        this.#task = todo
    }

    addTodo() {
        const todoDataEle = document.getElementById('user_task');
        const text = todoDataEle.value.trim();
        // console.log(text);
        const todo = {
            task: text, completed: false
        };
        this.#task.push(todo);
        this.renderTodo()
        todoDataEle.value = ""
    }
    removeTodo() {

    }

    toggleStatus() {

    }

    renderTodo() {
        let container = document.querySelector('.appendTask');
        // console.log(container);
        container.innerHTML = null;
        this.#task.forEach((item,index) => {
            let list = document.createElement('li');
            let text = document.createElement('span')
            text.innerText = item.task;
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox'
            checkbox.checked = item.completed
            // for toggle checkbox
            checkbox.addEventListener('change',()=>{
                this.#task[index].completed=!this.#task[index].completed
            });

            list.append(text,checkbox);
            container.append(list);
      })
    }

};


let todo = new Todo();
const todoButton = document.querySelector('#add_todo')
todoButton.addEventListener('click', () => {
    todo.addTodo()
})