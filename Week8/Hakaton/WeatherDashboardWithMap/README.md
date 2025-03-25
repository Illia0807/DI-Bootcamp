# Weather Dashboard

## Description
This project is a **Weather Dashboard** that allows users to search for a city and view its weather details, including temperature, pressure, and an icon representing the current weather conditions. The project utilizes **OpenWeather API** and **OpenStreetMap** to display location-based weather data on an interactive map.

## Features
- Fetch real-time weather data for any city
- Display temperature, pressure, and weather icons
- Show city coordinates on an interactive OpenStreetMap
- Update weather details dynamically based on user input

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript, Leaflet.js
- **Backend:** Node.js, Express.js
- **API:** OpenWeatherMap API
- **Database:** None (Data is fetched dynamically from the API)

## Installation & Setup

### Prerequisites
Ensure you have **Node.js** installed on your machine.

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a **.env** file in the root directory and add your OpenWeather API key:
   ```env
   OPENWEATHER_API_KEY=your_api_key_here
   ```
4. Start the server:
   ```sh
   npm start
   ```
5. Open your browser and go to:
   ```
   http://localhost:4000
   ```

## API Configuration
The backend fetches weather data using the OpenWeatherMap API. Ensure you replace `your_api_key_here` with a valid API key from [OpenWeather](https://openweathermap.org/).

## Project Structure
```
weather-dashboard/
│── public/                # Frontend files (HTML, CSS, JS)
│── routes/                # API routes
│── controllers/           # API logic
│── configuration/         # Configuration files
│── server.js              # Main server file
│── .env                   # Environment variables (not pushed to GitHub)
│── package.json           # Dependencies and scripts
```

## Deployment
To deploy the project, consider using **Heroku**, **Vercel**, or **Railway** for hosting the backend.

## Notes
- Do **not** commit your `.env` file to GitHub to keep your API key private. You can add it to `.gitignore`:
  ```
  .env
  ```

## License
This project is licensed under the MIT License.

## Author
Developed by Illia Andriienko. Feel free to contribute!

