let form = document.querySelector("form");
let userRadius = document.getElementById("radius");
console.log(userRadius);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Форма отправлена!");
  let userRadius = document.getElementById("radius").value;
  let radius = parseFloat(userRadius);

  console.log(calculateSphereVolume(radius));
  resultRadius = calculateSphereVolume(radius);
  document.getElementById("volume").value = resultRadius.toFixed(2);
});

function calculateSphereVolume(r) {
  return (4 / 3) * Math.PI * Math.pow(r, 3);
}
