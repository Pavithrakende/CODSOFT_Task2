document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(listItem);

            taskInput.value = "";

            // Attach event listeners for edit and delete buttons
            const editButton = listItem.querySelector(".edit");
            const deleteButton = listItem.querySelector(".delete");

            editButton.addEventListener("click", function () {
                const newText = prompt("Edit task:", taskText);
                if (newText !== null) {
                    listItem.querySelector("span").textContent = newText;
                }
            });

            deleteButton.addEventListener("click", function () {
                listItem.remove();
            });
        }
    });
});
