// Создаем карту и центрируем ее на Тель-Авив

async function changeCity() {
  const cityName = document.getElementById("cityInput").value.trim();
  if (cityName === "") {
    alert("Please enter the name of the city.");
    return;
  }
  try {
    const response = await fetch(
      `http://localhost:4000/api/weather/${cityName}`
    );
    if (!response.ok) {
      throw new Error(`Error with data response: ${response.statusText}`);
    }

    const data = await response.json();
    updateWeatherHTML(data);

    const { latitude, longitude } = data;

    if (latitude && longitude) {
      map.setView([latitude, longitude], 13);

      L.marker([latitude, longitude])
        .addTo(map)
        .bindPopup(`<b>${cityName}</b>`)
        .openPopup();

      console.log(
        `Coordinates for ${cityName}: Latitude: ${latitude}, Longitude: ${longitude}`
      );
    } else {
      alert("Unable to obtain coordinates for this city.");
    }
  } catch (error) {
    console.error("Error:", error.message);
    alert("There was an error loading data. Please try again.");
  }
}

function updateWeatherHTML(data) {
  document.querySelector("#weather-info h2").textContent = data.city;

  document.querySelector(".temperature").textContent = `${Math.round(
    data.temperature
  )}°C`;

  const iconUrl = `${data.icon}`;
  document.querySelector(".weather-icon").src = iconUrl;

  document.querySelector(
    ".pressure-value"
  ).textContent = `${data.pressure} hPa`;
}

const map = L.map("map"); 
map.setView([32.0833, 34.8], 13);

// Добавляем слой с OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

changeCity();
