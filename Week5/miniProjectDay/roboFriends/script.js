const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
];
function displayRobots(robots) {
  const main = document.getElementById("robotsTbl");
  main.innerHTML = "";
  robots.map((user) => {
    let newDiv = document.createElement("div");
    let newImg = document.createElement("img");
    newImg.setAttribute("src", user.image);
    newImg.setAttribute("alt", user.username);
    let newH2 = document.createElement("h2");
    newH2.textContent = user.name;
    let newP = document.createElement("p");
    newP.textContent = user.email;
    newDiv.appendChild(newImg);
    newDiv.appendChild(newH2);
    newDiv.appendChild(newP);
    newDiv.setAttribute("class", "userBox");
    let main = document.getElementById("robotsTbl");
    return main.appendChild(newDiv);
  });
}

displayRobots(robots);

document.getElementById("userInfo").addEventListener("input", function (event) {
  const query = event.target.value.toLowerCase();
  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(query)
  );

  displayRobots(filteredRobots);
});
