// Option 3: JavaScript Logical Connection
// This grabs the elements from our HTML document using their IDs
const themeButton = document.getElementById('theme-btn');
const bodyElement = document.body;

// Listen for a mouse click on the theme button
themeButton.addEventListener('click', () => {
    
    // Toggle the "dark-mode" CSS class on the body tag on or off
    bodyElement.classList.toggle('dark-mode');
    
    // Dynamically change the button text depending on what mode is active
    if (bodyElement.classList.contains('dark-mode')) {
        themeButton.textContent = '☀️ Light Mode';
    } else {
        themeButton.textContent = '✨ Switch Theme';
    }
});
