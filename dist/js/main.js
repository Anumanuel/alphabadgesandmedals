// Set the current year in the footer dynamically.
document.getElementById('current-year').textContent = new Date().getFullYear();

// Simple number counter effect for the hero year to add a micro-interaction.
// Counts down from 1900 to 1856 for a historical "established since" feel
// while the page acts as a placeholder.
const yearElement = document.getElementById('dynamic-year');
const targetYear = 1856;
let currentCount = 1900;

const updateCounter = () => {
  const increment = -2; // Counting down to 1856 for a historical effect.
  if (currentCount > targetYear) {
    currentCount += increment;
    yearElement.innerText = currentCount;
    setTimeout(updateCounter, 20);
  } else {
    yearElement.innerText = targetYear;
  }
};

// Start animation after a short delay.
setTimeout(updateCounter, 500);
