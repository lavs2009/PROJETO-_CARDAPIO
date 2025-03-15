
const form = document.querySelector('form');
const inputText = document.querySelector('input[type="text"]');
const ul = document.querySelector('ul');
//isso permite capturar quando clicar em adicionar ou aperta enter
form.addEventListener('submit', (event) => {
    event.preventDefault();//impede da página ser recarregada e perde tudo
    const taskTitle = inputText.value;// taskTitle recebe o que é digitado no input
    if (taskTitle.length < 3) {
        alert('Sua tarefa precisa ter ao menos 3 letras');
        return;
    }
    const li = document.createElement('li');
    const inputCheckbox = document.createElement('input');
    inputCheckbox.setAttribute('type', 'checkbox');
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