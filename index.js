const arg = process.argv[2];
const request = require('request');


const trimError = e => String(e).split('\n')[0];


if (!arg) return;
request('https://api.thecatapi.com/v1/breeds/search?q=' + arg, (e, response, body) => {
  if (e) {
    console.log(trimError(e));
    return;
  }
  if (response.statusCode !== 200) {
    console.log('Server responded with:', response.statusCode);
    return;
  }

  let bodyJson = JSON.parse(body);
  if (!bodyJson.length) {
    console.log('Cat breed not found :(');
    return;
  }


  console.log('Breed: ' + bodyJson[0].name);
  console.log(bodyJson[0].description);
});

