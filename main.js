   const container = document.querySelector('.tasks__block');
   const out = document.querySelector('.out');


   let tasks = [];
   let inputs = [];



document.querySelector('.subtasks__block-button').addEventListener('click', (event) => {
   event.preventDefault();
//добавление блока




   const taskHTML = `<div id=${Date.now()} class="created__block flex">

      <label class="description__label label"> Description
         <input class="created__block-inp input" type="text" placeholder="newValue" value="">
         </label>

         <label class="time__label label"> Time
         <input class="created__num-block" type="text" placeholder="0" value="">   
         </label>

         <label class="button__label"> Button 
         <button class="newtask__block btn"  data-action="delete"> <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
         <mask id="path-1-outside-1_1_48" maskUnits="userSpaceOnUse" x="-4.1066" y="-4.1066" width="21.2132" height="21.2132" fill="black">
         <rect fill="white" x="-4.1066" y="-4.1066" width="21.2132" height="21.2132"/>
         <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4497 2.25736L10.7426 1.55026L6.5 5.7929L2.25736 1.55026L1.55025 2.25736L5.79289 6.50001L1.55025 10.7426L2.25736 11.4498L6.5 7.20711L10.7426 11.4498L11.4497 10.7426L7.20711 6.50001L11.4497 2.25736Z"/>
         </mask>
         <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4497 2.25736L10.7426 1.55026L6.5 5.7929L2.25736 1.55026L1.55025 2.25736L5.79289 6.50001L1.55025 10.7426L2.25736 11.4498L6.5 7.20711L10.7426 11.4498L11.4497 10.7426L7.20711 6.50001L11.4497 2.25736Z" fill="black"/>
         <path d="M10.7426 1.55026L11.4497 0.843151L10.7426 0.136044L10.0355 0.843151L10.7426 1.55026ZM11.4497 2.25736L12.1569 2.96447L12.864 2.25736L12.1569 1.55026L11.4497 2.25736ZM6.5 5.7929L5.79289 6.50001L6.5 7.20711L7.20711 6.50001L6.5 5.7929ZM2.25736 1.55026L2.96447 0.843151L2.25736 0.136044L1.55025 0.843151L2.25736 1.55026ZM1.55025 2.25736L0.843146 1.55026L0.136039 2.25736L0.843146 2.96447L1.55025 2.25736ZM5.79289 6.50001L6.5 7.20711L7.20711 6.50001L6.5 5.7929L5.79289 6.50001ZM1.55025 10.7426L0.843146 10.0355L0.136039 10.7426L0.843146 11.4498L1.55025 10.7426ZM2.25736 11.4498L1.55025 12.1569L2.25736 12.864L2.96447 12.1569L2.25736 11.4498ZM6.5 7.20711L7.20711 6.50001L6.5 5.7929L5.79289 6.50001L6.5 7.20711ZM10.7426 11.4498L10.0355 12.1569L10.7426 12.864L11.4497 12.1569L10.7426 11.4498ZM11.4497 10.7426L12.1569 11.4498L12.864 10.7426L12.1569 10.0355L11.4497 10.7426ZM7.20711 6.50001L6.5 5.7929L5.79289 6.50001L6.5 7.20711L7.20711 6.50001ZM10.0355 2.25736L10.7426 2.96447L12.1569 1.55026L11.4497 0.843151L10.0355 2.25736ZM7.20711 6.50001L11.4497 2.25736L10.0355 0.843151L5.79289 5.08579L7.20711 6.50001ZM1.55025 2.25736L5.79289 6.50001L7.20711 5.08579L2.96447 0.843151L1.55025 2.25736ZM2.25736 2.96447L2.96447 2.25736L1.55025 0.843151L0.843146 1.55026L2.25736 2.96447ZM6.5 5.7929L2.25736 1.55026L0.843146 2.96447L5.08579 7.20711L6.5 5.7929ZM2.25736 11.4498L6.5 7.20711L5.08579 5.7929L0.843146 10.0355L2.25736 11.4498ZM2.96447 10.7426L2.25736 10.0355L0.843146 11.4498L1.55025 12.1569L2.96447 10.7426ZM5.79289 6.50001L1.55025 10.7426L2.96447 12.1569L7.20711 7.91422L5.79289 6.50001ZM11.4497 10.7426L7.20711 6.50001L5.79289 7.91422L10.0355 12.1569L11.4497 10.7426ZM10.7426 10.0355L10.0355 10.7426L11.4497 12.1569L12.1569 11.4498L10.7426 10.0355ZM6.5 7.20711L10.7426 11.4498L12.1569 10.0355L7.91421 5.7929L6.5 7.20711ZM10.7426 1.55026L6.5 5.7929L7.91421 7.20711L12.1569 2.96447L10.7426 1.55026Z" fill="black" mask="url(#path-1-outside-1_1_48)"/>
         </svg>
         </button>
         </label>
   </div>`;


   container.insertAdjacentHTML('afterBegin', taskHTML);
})

container.addEventListener('click', deleteTask);




// Удаление задачи
function deleteTask(event) {
   if (event.target.dataset.action === 'delete') {
      const parentNode = event.target.closest('div');

           //ID задачи
         const id = Number(parentNode.id);

      const index = inputs.findIndex( (task) => {
      task.id === id 
   });

      inputs.splice(index, 1)


      parentNode.remove()
   }
}



document.querySelector('.save__btn').addEventListener('click', (saveToLocalStorage));

function saveToLocalStorage() {
   localStorage.setItem('tasks', JSON.stringify(tasks));
}



document.querySelector('.create__btn').addEventListener('click', (event) => {
   event.preventDefault();


   if(document.readyState == 'complete') {


   const todoDiv = document.createElement('div');
   todoDiv.classList.add('todo__list-div');
   out.append(todoDiv);


function createLoadButton(point) {
      const load = document.createElement('button');
      load.classList.add('load');
      load.setAttribute('type', 'submit');
      load.innerText = 'Load';
      load.getAttribute('class');
      point.append(load);
}
   
createLoadButton(todoDiv);


function createImg(divname) {
   const img = document.createElement('img');
   img.classList.add('ellipse');
   img.setAttribute('src', './img/svg/Ellipse.png');
   divname.prepend(img);
}

   let taskname = document.querySelector('.taskname__input');
   let newtask = document.querySelector('.newtask__block input');
   let oldtask = document.querySelector('.oldtask__block input');
   let newtime = document.querySelector('.newtask__block-num');
   let oldtime = document.querySelector('.oldtask__block-num');


   let taskName = taskname.value;
   let newTask = newtask?.value;
   let newTaskTimer = newtime?.value;
   let oldTask = oldtask?.value;
   let oldTaskTimer = oldtime?.value;


   const objTaskName = {
      id: Date.now() + 2,
      text: taskName
   }

   const objNewTask = {
      id: Date.now() + 3,
      name: 'New Task',
      text: newTask,
      time: newTaskTimer
   }

   const objOldTask = {
      id: Date.now() + 4,
      name: 'old Task',
      text: oldTask,
      time: oldTaskTimer
   }

   if (objTaskName.name !== undefined) {
      tasks.push(objTaskName);
   }
   
   tasks.push(objNewTask);
   tasks.push(objOldTask);

   const ul = document.createElement('ul');
   ul.classList.add('todo__ul');
   ul.style.flexGrow = '2';
   ul.style.marginLeft = '16px';
   ul.innerText = `${objTaskName.text}`;
   todoDiv.prepend(ul);





   // const loadButtonElem = `<button id=${objLoadButton.id} class=${objLoadButton.class} dataset-action="submit"> Load </button>`
   

   const newTaskHTML = ` <li style="margin-left: 18px; font-size: 13px; font-weight: 400" id=${objNewTask.id}> ${objNewTask.name}: ${objNewTask.text} - ${objNewTask.time + 'h'} </li> `;

   const oldTasksHTML = `<li style="margin-left: 18px; font-size: 13px; font-weight: 400" id=${objOldTask.id}> ${objOldTask.name}: ${objOldTask.text} - ${objOldTask.time + 'h'} </li>`;

   const createdTimer = document.querySelectorAll('.created__num-block');
   const createdBlock = document.querySelectorAll('.created__block-inp');
   createdBlock.forEach((num1, index) => {
      const timer = createdTimer[index];

      const createdBlockValue = num1.value;
      const timerValue = timer.value;


      const objCreatedTask = {
         id: Date.now() + 5,
         name: 'New Task',
         text: createdBlockValue,
         time: timerValue
      };

      const createdTaskHTML =  `<li style="margin-left: 18px; font-size: 13px; font-weight: 400" id=${objCreatedTask.id}> ${objCreatedTask.name}: ${objCreatedTask.text} - ${objCreatedTask.time + 'h'} </li> `;
      ul.insertAdjacentHTML('beforeend', createdTaskHTML);

      tasks.push(objCreatedTask);

      num1.value = '';
      timer.value = '';
   })
   

   if(newTask === undefined) {
      ul.insertAdjacentHTML('beforeend', oldTasksHTML);
   createImg(todoDiv);
   } else {  
      ul.insertAdjacentHTML('beforeend', newTaskHTML);
   console.log(newTaskHTML)
      ul.insertAdjacentHTML('beforeend', oldTasksHTML);
   createImg(todoDiv);
   }

   taskname.value = '';
   oldtask.value = '';
   oldtime.value = '';
   newtask.value = '';
   newtime.value = '';

saveToLocalStorage();

document.querySelector('.load').addEventListener('click', getLocalStorageTasks)

function getLocalStorageTasks() {
   if (localStorage.getItem('tasks')) {
      tasks = JSON.parse(localStorage.getItem('tasks'));
   }

   const todoDivNew = document.createElement('div');
   todoDivNew.classList.add('todo__list-div');
   out.append(todoDivNew);

  
   const ul = document.createElement('ul');
   ul.classList.add('todo__ul-new');
   ul.innerText = `${objTaskName.text}`;
   todoDivNew.prepend(ul);

   createLoadButton(todoDivNew);
   createImg(todoDivNew);
   


   tasks.forEach(function (task) {
         const localTaskHTML = `<li style="margin-left: 18px; font-size: 13px; font-weight: 400" id=${task.id}>${task.name} ${task.text} - ${task.time}`;
      ul.insertAdjacentHTML('beforeend', localTaskHTML);
   })
   
}

   }
}
);