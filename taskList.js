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

//adds a task to the lsit
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

function saveTasks(){

    let saved = localStorage.setItem("tasks", JSON.stringify(tasks));
} 
