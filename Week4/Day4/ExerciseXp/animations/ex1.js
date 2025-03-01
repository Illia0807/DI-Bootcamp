// let timeId=setTimeout(()=>console.log("Hello word"),2000);
// clearTimeout(timerId);

// setTimeout(() => {
//         let p= document.createElement("p");
//         p.textContent="Hello World";
//         document.getElementById("container").appendChild(p)
//     }, 2000);

// setInterval(()=>{
//         let p= document.createElement("p");
//         p.textContent="Hello World";
//         let newP=document.getElementById("container").appendChild(p);
//         cler

// },10000)

// let interval= setInterval(()=>{
//         let p= document.createElement("p");
//         p.textContent="Hello World";
//         let newP=document.getElementById("container").appendChild(p);

// },1000)
// document.getElementById("clear").addEventListener("click",function(){
//         clearInterval(interval);
// })

let interval = setInterval(() => {
  let p = document.createElement("p");
  p.textContent = "Hello World";
  document.getElementById("container").appendChild(p);
  let paragraphs = document
    .getElementById("container")
    .getElementsByTagName("p");
  if (paragraphs.length >= 5) {
    clearInterval(interval);
    console.log("Stop");
  }
}, 1000);
