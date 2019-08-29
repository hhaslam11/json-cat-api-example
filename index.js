const arg = process.argv[2];
const request = require('request');


const trimError = e => String(e).split('\n')[0];




const fetchBreedDescription = (breed, cb) => {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + arg, (e, response, body) => {
    if (e) {
      cb(e);
      return;
    }
    if (response.statusCode !== 200) {
      cb('Server responded with:' + response.statusCode);
      return;
    }
    
    let bodyJson = JSON.parse(body);
    if (!bodyJson.length) {
      cb('Cat breed not found :(');
      return;
    }
    
    cb(null, bodyJson[0].description);
  });
};


if (!arg) return;
fetchBreedDescription(arg, (e, description) => {
  if (e) {
    console.log(trimError(e));
    return;
  }
  console.log(description);
});