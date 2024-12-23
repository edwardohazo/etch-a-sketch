# Interactive Grid Sketch Pad

This project is a simple web-based sketch pad where you can draw by hovering over a grid of square divs. The grid is initially set to a 16x16 layout but can be resized dynamically based on user input. The grid uses Flexbox to arrange the squares, and a hover effect changes the color of the squares, leaving a pixelated trail as you move your mouse across the grid.

## Features
- **Dynamic Grid Creation**: The grid is created using JavaScript, and you can specify the number of squares per side.
- **Hover Effect**: As you hover over the grid squares, their background color changes, creating a pen-like trail.
- **Resizable Grid**: Users can resize the grid by clicking the "Resize Grid" button and inputting a new size (up to 100x100 squares).
- **Responsive Layout**: The grid is contained within a 960px x 960px area, which automatically adjusts the size of the individual squares based on the grid size.

## Technologies Used
- **HTML**: For the basic structure of the webpage.
- **CSS**: Flexbox is used to create the grid layout. Styles are applied to buttons, squares, and the container.
- **JavaScript**: Dynamically creates and updates the grid, handles hover events, and processes user input for resizing.

## How to Use

1. **Load the Webpage**: Open the HTML file in any modern web browser.
2. **Resize the Grid**: Click the "Resize Grid" button at the top of the page. A prompt will appear asking for the number of squares per side.
   - You can input a number between 1 and 100 (e.g., 64 for a 64x64 grid).
   - The new grid will be generated within a fixed 960px x 960px container, ensuring the total area remains constant.
3. **Draw on the Grid**: Move your mouse over the grid, and the squares will change color, creating a pixelated trail.

## Setup and Installation

If you want to run this project locally, follow these steps:

1. **Clone the Repository**: (optional)
   ```bash
   git clone https://github.com/yourusername/interactive-grid-sketch-pad.git
