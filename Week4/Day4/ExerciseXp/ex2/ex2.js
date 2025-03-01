// let firstName=prompt(document.body.children[0].getElementsByTagName("firstname"))
// console.log(firstName);

// let form= document.body.children[0].firstChild;
let form = document.querySelector("form");
console.log(form);
let userFirstName = document.getElementById("fname");
console.log(userFirstName);
let userLastName = document.getElementById("lname");
console.log(userLastName);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  inputTextF = userFirstName.value.trim();
  inputTextL = userLastName.value.trim();
  console.log(inputTextL);
  console.log(inputTextF);
  if (inputTextF == "" && inputTextL == "") {
    console.log("empty");
  } else {
    let newLi1 = document.createElement("li");
    newLi1.textContent = inputTextF;
    let newLi2 = document.createElement("li");
    newLi2.textContent = inputTextL;
    let ulElement = document.querySelector("ul");
    ulElement.appendChild(newLi1);
    ulElement.appendChild(newLi2);
  }
});
