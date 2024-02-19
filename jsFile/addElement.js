// Get all buttons by their ids
const buttons = document.querySelectorAll('.btn');

// Function to handle button click
function handleButtonClick() {
    // Remove bg-lime-600 and text-white classes from all buttons
    buttons.forEach(button => {
        button.classList.remove('bg-stone-100');
    });

    // Add bg-lime-600 and text-white classes to the clicked button
    this.classList.add('bg-lime-600', 'text-white');
}

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
