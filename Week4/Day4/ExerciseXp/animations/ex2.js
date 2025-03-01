

function myMove() {
  let i = 0;
  let id = setInterval(() => {
    i += 10;
    addMarg(i);
    // let varCont=document.getElementById('container').style.width;
    const elem1 = document.querySelector("#animate");
    const elemWidth1 = parseInt(
      window.getComputedStyle(elem1).width.split("px")
    );

    const elem2 = document.querySelector("#container");
    const elemWidth2 = parseInt(
      window.getComputedStyle(elem2).width.split("px")
    );

   

    if (i == elemWidth2 - elemWidth1) {
      clearInterval(id);
    }
  }, 100);
}

function addMarg(i) {
  document.getElementById("animate").style.marginLeft = `${i}px`;
}
console.log(document.body.children[0].firstChild);
document.body.children[0].firstChild.addEventListener("click", function () {
  myMove();
});
