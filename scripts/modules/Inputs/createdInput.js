export let created = document.createElement('input')
created.classList.add('created__input');

let create = document.querySelector('.created__input');

const newInput = create.value;

const createdTask = {
        id: Date.now(),
        text: newInput,
    
    }

    let createdTaskHTML = `<li id=${createdTask.id}> ${createdTask.text} </li>`
