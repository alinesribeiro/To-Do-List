document.getElementById("todoForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let task = document.getElementById("taskInput").value;
    let li = document.createElement("li");
    li.textContent = task;
    

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.addEventListener("click", function () {
      li.remove();
    });
    li.appendChild(deleteButton);

    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";
  });
