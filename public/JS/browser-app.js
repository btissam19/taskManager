const tasksDOM = document.querySelector('.tasks')
const loadingDOM = document.querySelector('.loading-text')
const formDOM = document.querySelector('.task-form')
const taskInputDOM = document.querySelector('.task-input')
const formAlertDOM = document.querySelector('.form-alert')
// Load tasks from /api/tasks
// const showTasks = async () => {
//   loadingDOM.style.visibility = 'visible'
//   try {
//     const {
//       data: { tasks },
//     } = await axios.get('/task')
//     if (tasks.length < 1) {
//       tasksDOM.innerHTML = '<h5 class="empty-list">No tasks in your list</h5>'
//       loadingDOM.style.visibility = 'hidden'
//       return
//     }
//     const allTasks = tasks
//       .map((task) => {
//         const { completed, _id: taskID, name } = task
//         return `<div class="single-task ${completed && 'task-completed'}">
// <h5><span><i class="far fa-check-circle"></i></span>${name}</h5>
// <div class="task-links">



// <!-- edit link -->
// <a href="task.html?id=${taskID}"  class="edit-link">
// <i class="fas fa-edit"></i>
// </a>
// <!-- delete btn -->
// <button type="button" class="delete-btn" data-id="${taskID}">
// <i class="fas fa-trash"></i>
// </button>
// </div>
// </div>`
//       })
//       .join('')
//     tasksDOM.innerHTML = allTasks
//   } catch (error) {
//     tasksDOM.innerHTML =
//       '<h5 class="empty-list">There was an error, please try later....</h5>'
//   }
//   loadingDOM.style.visibility = 'hidden'
// }

// showTasks()

// delete task /api/tasks/:id

// tasksDOM.addEventListener('click', async (e) => {
//   const el = e.target
//   if (el.parentElement.classList.contains('delete-btn')) {
//     loadingDOM.style.visibility = 'visible'
//     const id = el.parentElement.dataset.id
//     try {
//       await axios.delete(`/task/${id}`)
//       showTasks()
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   loadingDOM.style.visibility = 'hidden'
// })
tasksDOM.addEventListener('click', async (e) => {
  const el = e.target;

  // If the clicked element or its parent has the 'delete-btn' class
  if (el.classList.contains('delete-btn') || el.parentElement.classList.contains('delete-btn')) {
      loadingDOM.style.visibility = 'visible';

      // If the icon was clicked instead of the button, get the button element
      const deleteButton = el.classList.contains('delete-btn') ? el : el.parentElement;
      const id = deleteButton.dataset.id;

      try {
          await axios.delete(`/task/${id}`);
          
          // Remove the task from the frontend
          deleteButton.closest('.single-task').remove();

          loadingDOM.style.visibility = 'hidden';
      } catch (error) {
          console.log(error);
          loadingDOM.style.visibility = 'hidden';
      }
  }
});



formDOM.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = taskInputDOM.value;
  
  try {
      const response = await axios.post('/task', { name });
      const newTask = response.data.task;
      
      const taskElement = document.createElement('div');
      taskElement.className = `single-task ${newTask.completed ? 'task-completed' : ''}`;
      taskElement.innerHTML = `
          <h5><span><i class="far fa-check-circle"></i></span>${newTask.name}</h5>
          <div class="task-links">
              <a href="task.html?id=${newTask._id}" class="edit-link">
                  <i class="fas fa-edit"></i>
              </a>
              <button type="button" class="delete-btn" data-id="${newTask._id}">
                  <i class="fas fa-trash"></i>
              </button>
          </div>`;
      
      tasksDOM.appendChild(taskElement);
      taskInputDOM.value = '';

      formAlertDOM.style.display = 'block';
      formAlertDOM.textContent = 'Success, task added';
      formAlertDOM.classList.add('text-success');
  } catch (error) {
      formAlertDOM.style.display = 'block';
      formAlertDOM.textContent = 'Error, please try again';
  }

  setTimeout(() => {
      formAlertDOM.style.display = 'none';
      formAlertDOM.classList.remove('text-success');
  }, 3000);
});


