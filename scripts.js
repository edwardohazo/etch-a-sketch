const container = document.querySelector('.container');
const button = document.getElementById('resizeGrid');

// Function to create the grid
function createGrid(size) {
  // Clear the existing grid
  container.innerHTML = '';

  // Set the size of each square based on the grid size
  const squareSize = 960 / size; // Adjust square size to fit within 960px width/height
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Add hover effect to change the color when mouse enters
    square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = '#3498db'; // Color when hovered
    });

    container.appendChild(square);
  }
}

// Event listener for the "Resize Grid" button
button.addEventListener('click', () => {
  const size = parseInt(prompt('Enter the number of squares per side (max 100):'), 10);

  // Validate the input
  if (size && size > 0 && size <= 100) {
    createGrid(size); // Create a new grid with the specified size
  } else {
    alert('Please enter a valid number between 1 and 100.');
  }
});

// Create the default 16x16 grid on page load
createGrid(16);