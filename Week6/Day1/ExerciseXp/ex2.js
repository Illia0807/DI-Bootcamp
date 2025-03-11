
function succesLog(){
return new Promise((resolve) => {
  setTimeout(() => {
    resolve("sucess");
  }, 4000);
});
}

succesLog()
        .then(result=>console.log(result));
