let tasks = [];
//loads tasks to achive goals!
function displayTasks(){

    let html = "";
    for(let i = 0; i < tasks.length; i++){
        html += "<li>" + tasks[i] + "<button onclick = 'removeTask("
         + i + ") />x</button></li>";
    }
    document.getElementById("taskList").innerHTML = html;  
}

//adds a task to the list
function addTask(){
    let tastInput = document.getElementById("task");
    let text = taskInput.value;
    if (text === ""){
        return;
    }
    tasks.push(text);
    taskInput.value = "";
    saveTasks();
    displayTasks();
}

function removeTask(i){

    tasks.splice(i, 1);
    saveTasks();
    displayTasks();
}



function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks)); 
}

function loadTasks() {
    let saved = localStorage.getItem("tasks");
    if (saved !== null) {
        let parsedTasks = JSON.parse(saved);
        
        // Convert any old string tasks to the new object format so it doesn't break
        tasks = parsedTasks.map(task => {
            if (typeof task === 'string') {
                return { text: task, completed: false };
            }
            return task;
        });
    }
}


loadTasks();
checkDailyReset(); 
displayTasks();
checkUserStatus();

