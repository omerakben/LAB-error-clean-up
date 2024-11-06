// utils/sample_data/housesData.js
const houses = [
  {
    house: 'gryffindor',
    crest:
      'https://static.wikia.nocookie.net/pottermore/images/1/16/Gryffindor_crest.png',
  },
  {
    house: 'slytherin',
    crest:
      'https://static.wikia.nocookie.net/pottermore/images/4/45/Slytherin_Crest.png',
  },
  {
    house: 'hufflepuff',
    crest:
      'https://static.wikia.nocookie.net/pottermore/images/5/5e/Hufflepuff_crest.png',
  },
  {
    house: 'ravenclaw',
    crest:
      'https://static.wikia.nocookie.net/pottermore/images/4/4f/Ravenclaw_crest.png',
  },
];

// Function to get a random house
const getRandomHouse = () => houses[Math.floor(Math.random() * houses.length)];

// Function to get house crest by house name
const getHouseCrest = (houseName) => {
  const house = houses.find((h) => h.house === houseName.toLowerCase());
  return house ? house.crest : null;
};

// Function to get all houses
const getAllHouses = () => houses;

export {
  houses,
  getRandomHouse,
  getHouseCrest,
  getAllHouses
};
