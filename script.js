// Get the necessary elements
const firstScreen = document.getElementById('first-screen');
const secondScreen = document.getElementById('second-screen');
const goToSecondScreenButton = document.getElementById('go-to-second-screen');
const goToFirstScreenButton = document.getElementById('go-to-first-screen');

// Add a click event listener to the "Go to Second Screen" button
goToSecondScreenButton.addEventListener('click', function() {
  // Hide the first screen
  firstScreen.style.display = 'none';
  
  // Show the second screen
  secondScreen.style.display = 'block';
});

// Add a click event listener to the "Go to First Screen" button
goToFirstScreenButton.addEventListener('click', function() {
  // Hide the second screen
  secondScreen.style.display = 'none';
  
  // Show the first screen
  firstScreen.style.display = 'block';
});




//overlay

document.querySelector('.icon img[alt="Shop"]').addEventListener('click', function() {
    document.querySelector('#shop-overlay').classList.remove('hidden');
  });
  
  document.querySelector('#close-overlay').addEventListener('click', function() {
    document.querySelector('#shop-overlay').classList.add('hidden');
  });
  
