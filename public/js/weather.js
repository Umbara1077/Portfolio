document.getElementById('getWeatherBtn').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showWeather, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

function showWeather(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            const weatherData = data.current_weather;
            const temperatureF = (weatherData.temperature * 9/5) + 32;

            const geoUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;

            fetch(geoUrl)
                .then(response => response.json())
                .then(geoData => {
                    console.log('GeoData:', geoData);
                    if (geoData && geoData.address) {
                        const location = geoData.address.city || geoData.address.town || geoData.address.village || geoData.address.hamlet || "Unknown location";
                        const weatherDiv = document.getElementById('weather');
                        weatherDiv.innerHTML = `
                            <p>Temperature: ${temperatureF.toFixed(2)}°F, Location: ${location}</p>
                        `;
                    } else {
                        const weatherDiv = document.getElementById('weather');
                        weatherDiv.innerHTML = `
                            <p>Temperature: ${temperatureF.toFixed(2)}°F, Location data not available.</p>
                        `;
                    }
                })
                .catch(error => {
                    alert("Error fetching location data.");
                    console.error('Geolocation fetch error:', error);
                });
        })
        .catch(error => {
            alert("Error fetching weather data.");
            console.error('Weather fetch error:', error);
        });
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}





