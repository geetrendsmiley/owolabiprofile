// Select the toggle switch
const themeToggle = document.getElementById('themeToggle');

// Function to toggle the theme
themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    // Apply dark theme
    document.body.style.backgroundColor = '#121212'; // Dark background
    document.body.style.color = '#87ceeb'; // Light text 

    // Update the profile card styles
    const profileCard = document.querySelector('.profile-card');
    profileCard.style.backgroundColor = '#444'; // Dark card background
    profileCard.style.color = '#fff'; // Light text for the card

    // Update all <p> tags to white color
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
      p.style.color = '#fff'; // Set text color to white
    });
  } else {
    // Apply light theme
    document.body.style.backgroundColor = '#87ceeb'; // Light background
    document.body.style.color = '#000000'; // Dark text

    // Update the profile card styles
    const profileCard = document.querySelector('.profile-card');
    profileCard.style.backgroundColor = '#fff'; // Light card background
    profileCard.style.color = '#333'; // Dark text for the card

    // Update all <p> tags to dark color
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
      p.style.color = '#000'; // Set text color to black
    });
  }
});
