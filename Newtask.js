const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const checklist = document.getElementById('checklist');

// Create task function
function createTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const uniqueId = 'task-' + Date.now();

        const li = document.createElement('li');

        //  use backticks 
        li.innerHTML = `
            <input type="checkbox" id="${uniqueId}">
            <label for="${uniqueId}">${taskText}</label>
        `;

        checklist.appendChild(li);

        taskInput.value = "";
        taskInput.focus();
    }
}

addBtn.addEventListener('click', createTask);

// Enter key
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        createTask();
    }
});
