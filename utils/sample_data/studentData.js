// utils/data/studentData.js

// Data arrays
const students = [];
const voldysArmy = [];

// Function to create unique ID for students
const createId = (array) => {
  if (array.length) {
    const idArray = array.map((el) => el.id);
    return Math.max(...idArray) + 1;
  }
  return 0;
};

// Function to add new student
const addStudent = (name, house, crest) => {
  const newStudent = {
    id: createId(students),
    name,
    house,
    crest
  };
  students.push(newStudent);
  return newStudent;
};

// Function to expel student
const expelStudent = (id) => {
  const index = students.findIndex((student) => student.id === Number(id));
  if (index !== -1) {
    const expelledStudent = students.splice(index, 1)[0];
    voldysArmy.push(expelledStudent);
    return {
      students,
      voldysArmy
    };
  }
  return null;
};

// Function to filter students by house
const filterStudentsByHouse = (houseParam) => {
  if (houseParam === 'all') return students;
  return students.filter((student) => student.house === houseParam);
};

// Export all necessary data and functions
export {
  students,
  voldysArmy,
  addStudent,
  expelStudent,
  filterStudentsByHouse
};
