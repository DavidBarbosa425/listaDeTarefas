class Tasks {
    constructor() {
        this.tasks = document.querySelector('.tasks')
        this.inputTasks = document.querySelector('.inputTasks')
        this.events()
    }

    events() {
        document.addEventListener('click', e => {
            let el = e.target;
            if(el.classList.contains('add')) {
                this.inputTasks.focus()
                this.addTasks();
            } 
            if(el.classList.contains('delete')) this.delete(el);
        })

        document.addEventListener('keypress', e => {
            if(e.keyCode === 13) {
                this.inputTasks.focus()
                this.addTasks();
            }
        })
    }

    delete(el) {
        console.log(el)
        el.previousElementSibling.remove()
        el.remove()
    }

    addTasks() {
        let li = document.createElement('li');
        li.classList.add('taskList');
        li.innerText = this.inputTasks.value;
        this.inputTasks.value = ''
        this.tasks.appendChild(li);
        this.createBtnDelete(li);

    }

    createBtnDelete(li) {
        let btnDelete = document.createElement('button');
        btnDelete.classList.add('delete');
        btnDelete.classList.add('mt-2');
        btnDelete.classList.add('mb-2');
        btnDelete.innerText = 'Excluir'
        li.insertAdjacentElement('afterend' ,btnDelete);

    }
}

const tasks = new Tasks();