const task = [];

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  addTask();
});

function addTask() {
  userInfo = document.getElementById("inputText").value;
  console.log(userInfo);

  if (userInfo.trim() === "") {
    alert("Enter task");
    return;
  }
  task.push(userInfo);
  console.log(task);

  let taskDiv = document.createElement("div");
  taskDiv.textContent = userInfo;

  document.getElementById("idListTask").appendChild(taskDiv);

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  taskDiv.appendChild(checkbox);



  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "X";
  deleteButton.classList.add("deleteButton");
  deleteButton.addEventListener("click", function () {
    taskDiv.remove(); // У
  });

  taskDiv.appendChild(checkbox);

  taskDiv.appendChild(deleteButton);

  

  document.getElementById("inputText").value = "";

  //   document.getElementById("idListTask").appendChild(taskElement);
}
