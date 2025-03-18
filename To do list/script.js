
const form = document.querySelector('form');
const inputText = document.querySelector('input[type="text"]');
const ul = document.querySelector('ul');

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    ul.innerHTML = '';
    tasks.forEach((task) => {
        const li = document.createElement('li');
        const inputCheckbox = document.createElement('input');
        inputCheckbox.setAttribute('type', 'checkbox');
        inputCheckbox.checked = task.done;
        inputCheckbox.addEventListener('change', (event) => {
            const liToogle = (event.target.parentElement);
            const spanToogle = liToogle.querySelector('span');
            const done = event.target.checked;
            if (!done) {
                spanToogle.style.textDecoration = 'none';
            } else {
                spanToogle.style.textDecoration = 'line-through';
            }
        })
        const span = document.createElement('span');
        span.textContent = taskTitle;
        const button = document.createElement('button');
        button.textContent = 'Remover';
        button.addEventListener('click', (event) => {
            ul.removeChild(event.target.parentElement)
        })
        li.appendChild(inputCheckbox);
        li.appendChild(span);
        li.appendChild(button);
        ul.appendChild(li);
        inputText.value = '';

    })
}
function saveTasks() { }
function removeTask(taskRemove) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updateTasks = tasks.filter(task => task.text !== taskRemove.text);//filtra a tarefa a ser removida
    localStorage.setItem('task', JSON.stringify(updateTasks));//atualiza o localStorage e o stringfy converte JSON para string
    localTasks();
}
function saveTasks() {
    const tasks = [];
    const liElements = document.querySelectorAll('ul li');//seleciona todas ul li
    liElements.forEach(li => {
        const span = li.querySelector('span')
        const checkbox = li.querySelector('input[type:"checkbox"]');
        tasks.push({
            text: span.textContent,
            done: checkbox.checked
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//isso permite capturar quando clicar em adicionar ou aperta enter

form.addEventListener('submit', (event) => {
    event.preventDefault();//impede da página ser recarregada e perde tudo
    const taskTitle = inputText.value;// taskTitle recebe o que é digitado no input
    if (taskTitle.length < 3) {
        alert('Sua tarefa precisa ter ao menos 3 letras');
        return;
    }

})