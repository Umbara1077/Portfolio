const functions = require("firebase-functions");
const axios = require("axios");

exports.getWeatherByLocation = functions.https.onRequest(async (req, res) => {
    // Add CORS headers to allow requests from specific origins
    res.set("Access-Control-Allow-Origin", "*"); 
    res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.set("Access-Control-Allow-Headers", "Content-Type");

    // Handle preflight OPTIONS request
    if (req.method === "OPTIONS") {
        return res.status(204).send("");
    }

    const { lat, lon } = req.query;
    const API_KEY = "8c9035c701169307c15dd15570a1adf8"; // Your OpenWeatherMap API Key

    if (!lat || !lon) {
        return res.status(400).send("Latitude and longitude parameters are required.");
    }

    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`
        );
        res.status(200).json(response.data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        res.status(500).send("Failed to fetch weather data.");
    }
});
