// components/filterButtons.js
import renderToDom from '../utils/renderToDom';
import { filterStudentsByHouse } from '../utils/sample_data/studentData';
import { studentsOnDom } from '../utils/domStructure';

const filterBtnRow = () => {
  const domString = `
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" id="filter--hufflepuff" class="btn btn-warning btn-sm">Hufflepuff</button>
      <button type="button" class="btn btn-primary btn-sm" id="filter--ravenclaw">Ravenclaw</button>
      <button type="button" class="btn btn-success btn-sm" id="filter--slytherin">Slytherin</button>
      <button type="button" class="btn btn-danger btn-sm" id="filter--gryffindor">Gryffindor</button>
      <button type="button" class="btn btn-secondary btn-sm" id="filter--all">All</button>
    </div>`;

  renderToDom('#filter-container', domString);
};

// Filter event handler
const handleFilterEvents = (e) => {
  if (e.target.id.includes('filter')) {
    const [, house] = e.target.id.split('--');
    const filteredStudents = filterStudentsByHouse(house);
    studentsOnDom('#students', filteredStudents, house);
  }
};

export {
  filterBtnRow,
  handleFilterEvents
};
