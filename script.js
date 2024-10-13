// Get references to DOM elements
const usernameInput = document.getElementById('username');
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');
const displayName = document.getElementById('display-name');
const welcomeMessage = document.createElement('h2');

// Function to determine the time of day
function getTimeOfDay() {
  const hour = new Date().getHours();
  if (hour < 12) {
    return "Good Morning";
  } else if (hour < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

// Function to save name to localStorage and display welcome message
function saveName() {
  const name = usernameInput.value;
  localStorage.setItem('savedName', name);
  const greeting = getTimeOfDay();
  welcomeMessage.textContent = `${greeting}, ${name}!`;
  displayName.textContent = `Saved name: ${name}`;
}

// Function to clear name from localStorage and display
function clearName() {
  localStorage.removeItem('savedName');
  displayName.textContent = '';
  welcomeMessage.textContent = '';
}

// Check if name is saved in localStorage on page load
const savedName = localStorage.getItem('savedName');
if (savedName) {
  const greeting = getTimeOfDay();
  welcomeMessage.textContent = `${greeting}, ${savedName}!`;
  displayName.textContent = `Saved name: ${savedName}`;
}

// Add welcome message to the DOM
document.body.insertBefore(welcomeMessage, displayName);

// Add event listeners to buttons
saveBtn.addEventListener('click', saveName);
clearBtn.addEventListener('click', clearName);