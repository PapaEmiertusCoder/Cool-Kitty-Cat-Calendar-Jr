let tasks = [];
let mainGoal = "";
let goalDate = "";

// task list is updated to show that goal logic and the mascot  

function checkUserStatus() {
    // Check if a goal already exists in local storage
    mainGoal = localStorage.getItem("mainGoal");
    goalDate = localStorage.getItem("goalDate");

    const catMessage = document.getElementById("cat-message");
    const goalForm = document.getElementById("goal-form");
    const taskApp = document.getElementById("task-app"); // The container for your task list

    if (!mainGoal) {
        // First visit: Show the mascot asking for a goal
        catMessage.innerText = "Meowdy! I'm your mascot. What is your main goal, and when do you want to achieve it?";
        goalForm.classList.remove("hidden");
        
        // Hide the task list until they set a goal
        if(taskApp) taskApp.classList.add("hidden"); 
    } else {
        // Returning visit: Welcome them back
        catMessage.innerText = `Welcome back! Keep working towards: ${mainGoal}`;
        if(goalForm) goalForm.classList.add("hidden");
        if(taskApp) taskApp.classList.remove("hidden");
        
        // Check if today is the day to celebrate
        checkGoalDate(goalDate);
    }
}

function setGoal() {
    let goalInput = document.getElementById("mainGoalInput").value;
    let dateInput = document.getElementById("goalDateInput").value;

    if (goalInput === "" || dateInput === "") {
        alert("Please enter a goal and a target date!");
        return;
    }

    // Save the goal and date to local storage
    localStorage.setItem("mainGoal", goalInput);
    localStorage.setItem("goalDate", dateInput);
    localStorage.setItem("hasCelebrated", "false"); // Reset celebration flag
    
    mainGoal = goalInput;

    // Update the UI
    document.getElementById("cat-message").innerText = `Awesome! I've saved your goal: ${mainGoal}. Add your steps below!`;
    document.getElementById("goal-form").classList.add("hidden");
    document.getElementById("task-app").classList.remove("hidden");
}

function checkGoalDate(savedDate) {
    const hasCelebrated = localStorage.getItem('hasCelebrated');
    if (!savedDate) return;

    // Get today's date in YYYY-MM-DD format
    const today = new Date();
    const todayString = new Date(today.getTime() - (today.getTimezoneOffset() * 60000 ))
                        .toISOString()
                        .split("T")[0];

    // Trigger celebration if dates match and we haven't celebrated yet
    if (savedDate === todayString && hasCelebrated === 'false') {
        if (typeof confetti === "function") {
            confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        }
        document.getElementById("cat-message").innerText = `🎉 Congratulations! You reached your goal date for: ${mainGoal} 🎉`;
        localStorage.setItem('hasCelebrated', 'true');
    }
}




function displayTasks(){
    let html = "";
    for(let i = 0; i < tasks.length; i++){
        
        html += "<li>" + tasks[i] + " <button onclick='removeTask(" + i + ")'>x</button></li>";
    }
    
    if(document.getElementById("taskList")) {
        document.getElementById("taskList").innerHTML = html;  
    }
}

function addTask(){
    
    let taskInput = document.getElementById("task");
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
    localStorage.setItem("tasks", JSON.stringify(tasks)); 
}

function loadTasks() {
    let saved = localStorage.getItem("tasks");
    if (saved !== null) {
        tasks = JSON.parse(saved);
    }
}


loadTasks();
displayTasks();
checkUserStatus(); // Start the mascot check