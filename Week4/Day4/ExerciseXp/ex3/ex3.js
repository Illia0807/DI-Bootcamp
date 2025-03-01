// let test=document.body.children[0].getElementsByTagName('strong');
// let test=document.getElementsByTagName

let allBoldItems = [];
function getBoldItems() {
  let test1 = document.body.children[0].getElementsByTagName("strong");
  for (let i = 0; i < test1.length; i++) {
    allBoldItems.push(test1[i]);
  }
}


function highlight(){
       document.querySelectorAll('strong').forEach(element=>{
        element.style.color="blue";
       })
}


function returnItemsToDefault(){
        document.querySelectorAll('strong').forEach(element=>{
                element.style.color="red";
               })
}
function mouseOver() {
        highlight();
}
function mouseOut(){
        returnItemsToDefault();
        
}
document.querySelectorAll('strong').forEach(element => {
        element.addEventListener('mouseover', mouseOver);
        element.addEventListener('mouseout', mouseOut);
      });
