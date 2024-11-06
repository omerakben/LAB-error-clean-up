// Import styles
import '../styles/main.scss';

// Import Components
import header from '../components/header';
import { startSortingBtn, form } from '../components/sortingForm';
import { filterBtnRow, handleFilterEvents } from '../components/filterButtons';
import { initializeStudentAreas, handleExpelEvents } from '../components/studentDisplay';

// Import DOM Structure
import { htmlStructure } from '../utils/domStructure';

// Main Events Handler
const events = () => {
  // Event listener for starting the sorting ceremony
  document.querySelector('#start-sorting').addEventListener('click', () => {
    form(); // Display the sorting form
    filterBtnRow(); // Display filter buttons
    initializeStudentAreas(); // Initialize student display areas
  });

  // Event delegation for student container (expel actions)
  document
    .querySelector('#student-container')
    .addEventListener('click', handleExpelEvents);

  // Event delegation for filter buttons
  document
    .querySelector('#filter-container')
    .addEventListener('click', handleFilterEvents);
};

// Initialize App
const startApp = () => {
  htmlStructure(); // Create initial DOM structure
  header(); // Load header
  startSortingBtn(); // Show start sorting button
  events(); // Add event listeners
};

startApp();
