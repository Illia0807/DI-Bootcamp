const form = document.getElementById("form");
const jsonOutput = document.getElementById("jsonOutput");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastname").value;
  const data = {
    name: name,
    lastName: lastName,
  };
  const jsonString = JSON.stringify(data, null, 2);
  let newDiv = document.createElement("div");
  newDiv.textContent = jsonString;
  jsonOutput.innerHTML = "";
  jsonOutput.appendChild(newDiv);
});


