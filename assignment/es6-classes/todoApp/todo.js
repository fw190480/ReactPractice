
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
    removeTodo(index) {
        this.#task.splice(index,1);
        this.renderTodo()
    }

    toggleStatus(index) {
        this.#task[index].completed = !this.#task[index].completed;
        this.renderTodo()
    }

    renderTodo() {
        let container = document.querySelector('.appendTask');
        // console.log(container);
        container.innerHTML = null;
        this.#task.forEach((item,index) => {
            let list = document.createElement('li');
            let text = document.createElement('span')
            text.innerText = `${index+1}:) ${item.task}`;
            if(item.completed){
                list.style.background = "green";
                // list.classList.add('checked')
            }
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox'
            checkbox.checked = item.completed
            // for toggle checkbox
            checkbox.addEventListener('change',()=>{
                this.toggleStatus(index)
            });
            // Remove button
            let removeBtn = document.createElement('button');
            removeBtn.innerText = "Remove";
            removeBtn.addEventListener('click',()=>{
                this.removeTodo(index)
            })
            list.append(text,checkbox,removeBtn);
            container.append(list);
      })
    }

};


let todo = new Todo();
const todoButton = document.querySelector('#add_todo')
todoButton.addEventListener('click', () => {
    todo.addTodo()
})