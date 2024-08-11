// Toggle Dark/Light Mode
function toggleTheme() {
    const body = document.body;
    const themeToggleButton = document.querySelector('.theme-toggle');
    
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        themeToggleButton.textContent = '🌙'; // Moon icon for light mode
    } else {
        body.classList.add('dark-mode');
        themeToggleButton.textContent = '☀️'; // Sun icon for dark mode
    }
}
