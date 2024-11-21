// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');

// Check if dark mode preference exists in local storage
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

// Apply dark mode if previously enabled
if (isDarkMode) {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = "🌞";  // Change to sun icon in dark mode
} else {
    darkModeToggle.textContent = "🌙";  // Change to moon icon in light mode
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
    const isDarkModeActive = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkModeActive ? 'enabled' : 'disabled');
    darkModeToggle.textContent = isDarkModeActive ? "🌞" : "🌙";
});

// Shrink header on scroll
window.onscroll = function () {
    const header = document.querySelector("header");
    header.style.padding = window.scrollY > 50 ? "10px 0" : "15px 0";  // Shrink header's padding
};

// Fetch weather data from OpenWeatherMap API
const apiKey = '90d792d019c852587b67d08dca9333c9';  // Replace with your actual API key
const city = 'Manila'; // You can change this to any city
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// Fetch weather data
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const { temp } = data.main;
        const { description } = data.weather[0];
        const { humidity } = data.main;
        const { speed } = data.wind;

        // Create weather data HTML
        const weatherHtml = `
            <h3>Weather in ${data.name}</h3>
            <p><strong>Temperature:</strong> ${temp}°C</p>
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>Humidity:</strong> ${humidity}%</p>
            <p><strong>Wind Speed:</strong> ${speed} m/s</p>
        `;

        // Insert weather data into the page
        document.getElementById('weatherData').innerHTML = weatherHtml;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('weatherData').innerHTML = '<p>Could not fetch weather data. Please try again later.</p>';
    });
