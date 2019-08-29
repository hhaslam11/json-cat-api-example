const request = require('request');

const fetchBreedDescription = (breed, cb) => {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (e, response, body) => {
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

module.exports = fetchBreedDescription;