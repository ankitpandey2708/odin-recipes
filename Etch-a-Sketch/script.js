const gridBox = document.querySelector('.grid-box');
const paintButton = document.querySelector('.paint');
const eraserButton = document.querySelector('.eraser');
const cleanButton = document.querySelector('.clean');
const colorPicker = document.getElementById('colorPicker');

let isPainting = true; // Default mode
let pickedColor = '#000000'

// Function to generate the grid
function generateGrid(size) {
    gridBox.innerHTML = ''; // Clear existing grid
    gridBox.style.display = 'grid';
    gridBox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridBox.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Loop to create grid items
    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.addEventListener('mouseover', paintGridItem);
        gridBox.appendChild(gridItem);
    }
}

// Function to paint or erase grid items
function paintGridItem(e) {
    if (isPainting) {
        e.target.style.backgroundColor = pickedColor;
    } else {
        e.target.style.backgroundColor = 'white';
    }
}

// Event listener for the paint button
paintButton.addEventListener('click', () => {
    isPainting = true; // Set painting mode
});

// Event listener for the eraser button
eraserButton.addEventListener('click', () => {
    isPainting = false; // Set erasing mode
});

// Event listener for the clean button
cleanButton.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => item.style.backgroundColor = 'white'); // Clear grid
});

// Event listener for color picker
colorPicker.addEventListener('change', function() {
    pickedColor = this.value; // Update picked color
});

generateGrid(16); // Initialize a 16x16 grid replace the magic number