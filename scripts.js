const container = document.querySelector('.container');
const button = document.getElementById('resizeGrid');

function createGrid(size) {
  // Clear the existing grid
  container.innerHTML = '';

  // Set the dimensions of the squares dynamically
  const squareSize = 960 / size; // Adjust square size to fit within 960px
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Add hover effect
    square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = '#3498db';
    });

    container.appendChild(square);
  }
}

// Event listener for the button
button.addEventListener('click', () => {
  const size = parseInt(prompt('Enter the number of squares per side (max 100):'), 10);

  // Validate the input
  if (size && size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert('Please enter a valid number between 1 and 100.');
  }
});

// Create the default grid on page load
createGrid(16);