const request = require('request');
response = request('https://api.ipgeolocation.io/astronomy?apiKey=d859301d2c984a2d81224eaf0f614a82', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received.
    body_json = JSON.parse(body)
    city = body_json.location.district;
    sunrise = body_json.sunrise;
    sunset = body_json.sunset;
    console.log("\nIn " + city + " the sun rises at " + sunrise + " and sets at " + sunset + " today."); 
});