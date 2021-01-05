const todolist = () => {
    const list = document.querySelector('.works__list-item-todo-list-tasks');
    const taskName = document.querySelector('.works__list-item-todo-list-task-name');
    const btn = document.querySelector('.works__list-item-todo-list-btn');

    let tasks = [];

    if (localStorage.getItem('tasks')) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
        createTasks();
    }

    btn.addEventListener('click', addTask);
    window.addEventListener('keydown', e => {
        if (e.keyCode === 13) addTask();
    });

    function addTask() {
        const name = taskName.value;

        if (name.length > 2) {
            if (tasks.every(item => item.name !== name)) {
                list.innerHTML = '';

                const task = {
                    name,
                    id: Date.now()
                }

                tasks.unshift(task);

                localStorage.setItem('tasks', JSON.stringify(tasks));

                createTasks();
                removeTasks();
            }
            taskName.value = '';
        }
    }

    function createTasks() {
        tasks.map(item => {
            const task = `
            <li class="works__list-item-todo-list-tasks-item">
              <span>
                ${item.name}
              </span>
              <button class="works__list-item-todo-list-delete"></button>
            </li>
          `;

            list.innerHTML += task;
        });
    }

    function removeTasks() {
        const btns = document.querySelectorAll('.works__list-item-todo-list-delete');
        const items = document.querySelectorAll('.works__list-item-todo-list-tasks-item span');

        if (btns) {
            btns.forEach((btn, index) => {
                btn.addEventListener('click', () => {
                    const id = tasks[index].id;

                    items[index].classList.add('remove-task');

                    setTimeout(() => {
                        tasks = tasks.filter(item => item.id !== id);
                        localStorage.setItem('tasks', JSON.stringify(tasks));

                        list.innerHTML = '';

                        createTasks();
                        removeTasks();
                    }, 300);
                });
            });
        }
    }

    removeTasks();
}

todolist();