const main = document.getElementById("main");
let isLeftMouseDown = false;
document.addEventListener("mousedown", function (event) {
        if (event.button === 0) {
          isLeftMouseDown = true;
        }
      });
      document.addEventListener("mouseup", function () {
        isLeftMouseDown = false;
      });


for (let i = 0; i < 1020; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.backgroundColor = "white";
  square.style.height = "35px";
  square.style.width = "15px";
  square.style.border = "1px solid black";
  square.style.margin = "0";
  square.style.padding = "0";
  
  square.addEventListener("click",function(){
        this.style.backgroundColor = chosenColor;
  })
  square.addEventListener("mousemove", function () {
        if (isLeftMouseDown) {
          this.style.backgroundColor = chosenColor;
        }
      });
      main.appendChild(square);
}
const colors = [
  "red",
  "orangered",
  "orange",
  "yellow",
  "yellowgreen",
  "lightgreen",
  "green",
  "turquoise",
  "cyan",
  "lightskyblue",
  "dodgerblue",
  "blue",
  "darkblue",
  "indigo",
  "darkmagenta",
  "violet",
  "lightpink",
  "lightgray",
  "gray",
  "black",
  "white",
];
const sidebar=document.getElementById("sidebar");
let chosenColor="white";
for (let i = 0; i < colors.length; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.backgroundColor = colors[i];
  sidebar.appendChild(square);
  square.addEventListener("click",function(){
        chosenColor=window.getComputedStyle(this).backgroundColor
        console.log(chosenColor);
        
  })
}


document.getElementById("btn").addEventListener("click",function(){
        
        let mainCells = document.getElementById("main").getElementsByTagName("div");
    
    for (let cell of mainCells) {
        cell.style.backgroundColor = "white";
    }
})


