// components/sortingForm.js
import renderToDom from '../utils/renderToDom';
import { addStudent, students } from '../utils/sample_data/studentData';
import { getRandomHouse } from '../utils/sample_data/housesData';
import { studentsOnDom } from '../utils/domStructure';

// Initial sorting button
const startSortingBtn = () => {
  const domString = '<button type="button" class="btn btn-info" id="start-sorting">Start the Sorting Ceremony!</button>';
  renderToDom('#form-container', domString);
};

// Sort student function
const sortStudent = (e) => {
  e.preventDefault();
  const sortingHat = getRandomHouse();
  const studentInput = document.querySelector('#student-name');

  // create the new student
  addStudent(studentInput.value, sortingHat.house, sortingHat.crest);

  studentInput.value = ''; // reset value of input
  studentsOnDom('#students', students);
};
// Create the sorting form
const form = () => {
  const domString = `
    <form id="sorting" class="d-flex flex-column form-floating">
      <input
        type="text"
        class="form-control mb-1"
        id="student-name"
        placeholder="Enter a name"
        required
      />
      <label for="student-name">Name to be sorted</label>
      <button type="submit" class="btn btn-success">Get Sorted!</button>
    </form>`;

  renderToDom('#form-container', domString);

  // Event listener for form submission
  document.querySelector('#sorting').addEventListener('submit', sortStudent);
};

export {
  startSortingBtn,
  form
};
