const arg = process.argv[2];
const fetchBreedDescription = require('./fetchBreedDescription');

fetchBreedDescription(arg, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});