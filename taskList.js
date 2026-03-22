let tasks = [];
let mainGoal = "";
let goalDate = "";

function checkUserStatus() {
    mainGoal = localStorage.getItem("mainGoal");
    goalDate = localStorage.getItem("goalDate");

    const catMessage = document.getElementById("cat-message");
    const goalForm = document.getElementById("goal-form");
    const taskApp = document.getElementById("task-app");

    if (!mainGoal) {
        catMessage.innerText = "Meowdy! I'm your kitty companion. What is your main goal, and when do you want to achieve it?";
        if(goalForm) goalForm.classList.remove("hidden");
        if(taskApp) taskApp.classList.add("hidden"); 
    } else {
        catMessage.innerText = `Welcome back! Keep working towards: ${mainGoal}`;
        if(goalForm) goalForm.classList.add("hidden");
        if(taskApp) taskApp.classList.remove("hidden");
        
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

    localStorage.setItem("mainGoal", goalInput);
    localStorage.setItem("goalDate", dateInput);
    localStorage.setItem("hasCelebrated", "false"); 
    
    mainGoal = goalInput;

    document.getElementById("cat-message").innerText = `Awesome! I've saved your goal: ${mainGoal}. Add your steps below!`;
    document.getElementById("goal-form").classList.add("hidden");
    document.getElementById("task-app").classList.remove("hidden");
}

function checkGoalDate(savedDate) {
    const hasCelebrated = localStorage.getItem('hasCelebrated');
    if (!savedDate) return;

    const todayString = getLocalTodayString();

    if (savedDate === todayString && hasCelebrated === 'false') {
        if (typeof confetti === "function") {
            confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        }
        document.getElementById("cat-message").innerText = `🎉 Congratulations! You reached your goal date for: ${mainGoal} 🎉`;
        localStorage.setItem('hasCelebrated', 'true');
    }
}



// Helper function to get today's date formatted as YYYY-MM-DD in the local timezone
function getLocalTodayString() {
    const today = new Date();
    return new Date(today.getTime() - (today.getTimezoneOffset() * 60000 ))
                        .toISOString()
                        .split("T")[0];
}

function checkDailyReset() {
    const savedDate = localStorage.getItem("lastVisitDate");
    const todayString = getLocalTodayString();

    // If there is no saved date, or the saved date is NOT today...
    if (savedDate !== todayString) {
        // It's a new day! Reset all tasks to not completed
        tasks.forEach(task => task.completed = false);
        saveTasks();
        
        // Update the last visit date to today
        localStorage.setItem("lastVisitDate", todayString);
    }
}

function displayTasks() {
    let html = "";
    for(let i = 0; i < tasks.length; i++) {
        // Check if the task is completed to add a strikethrough style
        let textStyle = tasks[i].completed ? "text-decoration: line-through; color: gray;" : "";
        let isChecked = tasks[i].completed ? "checked" : "";

        // Added a checkbox and applied the textStyle to the text
        html += `
            <li>
                <input type="checkbox" onchange="toggleTask(${i})" ${isChecked}>
                <span style="${textStyle}">${tasks[i].text}</span> 
                <button onclick='removeTask(${i})'>x</button>
            </li>`;
    }
    
    if(document.getElementById("taskList")) {
        document.getElementById("taskList").innerHTML = html;  
    }
}

function addTask() {
    let taskInput = document.getElementById("task");
    let text = taskInput.value;
    
    if (text === ""){
        return;
    }
    
    // Push an object instead of a string
    tasks.push({ text: text, completed: false });
    taskInput.value = "";
    saveTasks();
    displayTasks();
}

function removeTask(i) {
    tasks.splice(i, 1);
    saveTasks();
    displayTasks();
}

// New function to handle checking/unchecking a task
function toggleTask(i) {
    tasks[i].completed = !tasks[i].completed; // Flip the true/false status
    saveTasks();
    displayTasks(); // Re-render to update the strikethrough
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
yay;