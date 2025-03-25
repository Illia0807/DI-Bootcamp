const axios = require("axios");

const API_KEY = "db9ffada24ce8f621e922560d1940d48";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const getWeather = async (req, res) => {
  try {
    const { city } = req.params;
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
        lang: "en",
      },
    });
    const weatherData = response.data;
    console.log(weatherData);
    
    // получаю коордтнаты города
    const { lat, lon } = weatherData.coord;
    // полуачаю иконки для оттображения погоды
    const iconCode = weatherData.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    res.json({
      city: weatherData.name,
      temperature: weatherData.main.temp,
      description: weatherData.weather[0].description,
      latitude: lat,
      longitude: lon,
      icon: iconUrl,
      pressure: weatherData.main.pressure
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve weather data" });
  }
};

module.exports = { getWeather };
