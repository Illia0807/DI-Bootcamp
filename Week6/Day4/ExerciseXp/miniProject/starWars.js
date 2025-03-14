const baseURL = "https://www.swapi.tech/api/people/";
const peopleUrl = "people/1";

document.getElementById("btn").addEventListener("click", fetchData);
//version 2
async function fetchData() {
  const infoContainer = document.querySelector(".info-container");
  const randomId = Math.floor(Math.random() * 83) + 1;
  const loadingNode = `
        <div class="fa-3x">
            <i class="fa-solid fa-spinner fa-spin-pulse fa-spin-reverse"></i>
        </div>`;
  const errorNode = `
        <div> 
            <h1>Something goes wrong</h1> 
        </div>`;

  infoContainer.innerHTML = loadingNode;
  try {
    const response = await fetch(`${baseURL}${randomId}`);
    if (!response.ok) throw new Error("Errors problem with person!");

    const { result } = await response.json();
    const { name, height, gender, birth_year, homeworld } = result.properties;

    const planetResponse = await fetch(homeworld);
    if (!planetResponse.ok) throw new Error("Errors problem with planet!");

    const planetData = await planetResponse.json();
    const planetName = planetData.result.properties.name;

    infoContainer.innerHTML = `
        <h1 id="name">${name}</h1>
        <p id="height">Height: ${height}</p>
        <p id="gender">Gender: ${gender}</p>
        <p id="birth-year">Birth Year: ${birth_year}</p>
        <p id="home-world">Home World: ${planetName}</p> 
    `;
  } catch (error) {
    infoContainer.innerHTML = errorNode;
    console.error(error);
  }
}

//version 1
//   fetch(`${baseURL}${randomId}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Ошибка запроса!");
//       }
//       return response.json();
//     })

//     .then(({ result }) => {
//       const { properties } = result;
//       const { name, height, gender, birth_year, homeworld } = properties;

//       return fetch(homeworld) // Делаем второй запрос по URL планеты
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error("Ошибка запроса планеты!");
//           }
//           return response.json();
//         })
//         .then(({ result }) => {
//           const planetName = result.properties.name; // Получаем название планеты

//           infoContainer.innerHTML = `
//                 <h1 id="name">${name}</h1>
//                 <p id="height">Height: ${height}</p>
//                 <p id="gender">Gender: ${gender}</p>
//                 <p id="birth-year">Birth Year: ${birth_year}</p>
//                 <p id="home-world">Home World: ${planetName}</p>
//               `;
//         });
//     })
//     .catch(() => {
//       // Если ошибка — показываем сообщение
//       infoContainer.innerHTML = errorNode;
//     });
