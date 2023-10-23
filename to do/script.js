const addBtn = document.getElementById("add");
const taskTitleInput = document.getElementById("taskTitle");
const taskDescriptionInput = document.getElementById("taskDescription");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
    const taskTitleText = taskTitleInput.value.trim();
    const taskDescriptionText = taskDescriptionInput.value.trim();
    if (taskTitleText !== "" && taskDescriptionText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="task-info">
                <h2>${taskTitleText}</h2>
                <p>Description: ${taskDescriptionText}</p>
            </div>
            <div class="task-actions">
                <button class="complete">Complete</button>
                <button class="delete">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
        taskTitleInput.value = "";
        taskDescriptionInput.value = "";

        const deleteBtn = li.querySelector(".delete");
        deleteBtn.addEventListener("click", function () {
            li.remove();
        });

        const completeBtn = li.querySelector(".complete");
        completeBtn.addEventListener("click", function () {
            li.classList.toggle("completed");
        });
    }
});
