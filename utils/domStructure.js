// utils/domStructure.js
import renderToDom from './renderToDom';

/**
 * Creates the initial HTML structure for the application
 */
const htmlStructure = () => {
  const domString = `
    <div id="header-container" class="header mb-3"></div>
    <div id="form-container" class="container mb-3 text-center"></div>
    <div id="filter-container" class="container mb-3"></div>
    <div id="student-container" class="container d-flex"></div>
  `;

  renderToDom('#app', domString);
};

/**
 * Renders the initial student areas
 */
const studentAreas = () => {
  const domString = `
    <div id="students">No Students</div>
    <div id="voldy">No Death Eaters</div>
  `;

  renderToDom('#student-container', domString);
};

/**
 * Renders students to the DOM
 * @param {string} divId - The ID of the element to render to
 * @param {Array} array - Array of students to render
 * @param {string} house - House name for filtering (optional)
 */
const studentsOnDom = (divId, array, house = 'Hogwarts') => {
  let domString = '';
  if (!array.length) {
    domString += `NO ${house.toUpperCase()} STUDENTS`;
  }

  array.forEach((student) => {
    domString += `
      <div class="card bg-dark text-white">
        <img src="${
  divId === '#voldy'
    ? 'https://carboncostume.com/wordpress/wp-content/uploads/2019/10/deatheater-harrypotter.jpg'
    : student.crest
}"
          class="card-img" alt="${student.house} crest">
        <div class="card-img-overlay">
          <h5 class="card-title">${student.name}</h5>
          ${
  divId === '#voldy'
    ? '<p class="card-text">Death Eater</p>'
    : `<p class="card-text">${student.house}</p>
                 <button type="button" id="expel--${student.id}" class="btn btn-danger btn-sm">Expel</button>`
}
        </div>
      </div>
    `;
  });
  renderToDom(divId, domString);
};

/**
 * Creates the filter button row
 */
const filterBtnRow = () => {
  const domString = `
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" id="filter--hufflepuff" class="btn btn-warning btn-sm">Hufflepuff</button>
      <button type="button" class="btn btn-primary btn-sm" id="filter--ravenclaw">Ravenclaw</button>
      <button type="button" class="btn btn-success btn-sm" id="filter--slytherin">Slytherin</button>
      <button type="button" class="btn btn-danger btn-sm" id="filter--gryffindor">Gryffindor</button>
      <button type="button" class="btn btn-secondary btn-sm" id="filter--all">All</button>
    </div>
  `;

  renderToDom('#filter-container', domString);
};

export {
  htmlStructure,
  studentAreas,
  studentsOnDom,
  filterBtnRow
};
