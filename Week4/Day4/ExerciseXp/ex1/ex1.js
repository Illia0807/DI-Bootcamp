

// let headOne=document.querySelector('h1');
// console.log(headOne.textContent)

// const article = document.firstChild
console.log(document.body);
console.log(document.body.children);
// Array.from(document.body.children).forEach((el, index) => {
//         console.log(`Элемент #${index}:`, el.tagName);
//       });

//variation1
// let article = document.body.children[0]
// article.removeChild(article.lastElementChild);

//v2
// document.body.children[0].removeChild(document.body.children[0].lastElementChild)

//variation3
// document.body.children[0].lastElementChild.remove()

// let firstChild = document.body.children[0].querySelector("h1");
// firstChild.addEventListener("click",function(){
//         firstChild.style.backgroundColor= "red"
// })

// let elementH3= document.body.children[0].querySelector("h3");
// elementH3.addEventListener("click",function(){
//         elementH3.style.display="none";
// })

//BUTTON
let button= document.body.children[0];
let allParagr=document.body.children[1].querySelectorAll("p");

button.addEventListener("click",function(){
       allParagr.forEach(element => {
        element.style = "font-weight: bolder";
       });
})


//BONUS
let h1ForWork=document.body.children[1].querySelector("h1");

h1ForWork.addEventListener("mouseover", function(){
        let randNumb=Math.floor(Math.random() * 100);
        h1ForWork.style.fontSize=`${randNumb}px`;
})

// let h2ForWork=document.body.children[1].querySelector("h2");
let h2ForWork=h1ForWork.nextElementSibling;
h2ForWork.addEventListener("mouseover",function(){
        h2ForWork.classList.add("w3-animate-right");
})







