// components/studentDisplay.js
import '../styles/main.scss';
import renderToDom from '../utils/renderToDom';
import { expelStudent } from '../utils/sample_data/studentData';
import { studentsOnDom } from '../utils/domStructure';

const initializeStudentAreas = () => {
  const domString = `
    <div id="students">No Students</div>
    <div id="voldy">No Death Eaters</div>`;

  renderToDom('#student-container', domString);
};

// Handle expel events
const handleExpelEvents = (e) => {
  if (e.target.id.includes('expel')) {
    const [, id] = e.target.id.split('--');
    const { students, voldysArmy } = expelStudent(id);

    // Update both areas
    studentsOnDom('#students', students);
    studentsOnDom('#voldy', voldysArmy);
  }
};

export {
  initializeStudentAreas,
  handleExpelEvents
};
