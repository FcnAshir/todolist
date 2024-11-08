document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task-btn');
  
    // Add task function
    function addTask() {
      const taskText = newTaskInput.value.trim();
      if (taskText) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
  
        taskItem.innerHTML = `
          <input type="checkbox" class="task-checkbox">
          <span class="task-text">${taskText}</span>
          <button class="delete-btn">✖</button>
        `;
  
        // Mark task as complete
        taskItem.querySelector('.task-checkbox').addEventListener('change', (e) => {
          taskItem.classList.toggle('completed', e.target.checked);
        });
  
        // Delete task
        taskItem.querySelector('.delete-btn').addEventListener('click', () => {
          taskItem.remove();
        });
  
        taskList.appendChild(taskItem);
        newTaskInput.value = '';
      }
    }
  
    // Add task on button click
    addTaskBtn.addEventListener('click', addTask);
  
    // Add task on Enter key press
    newTaskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addTask();
      }
    });
  });
  