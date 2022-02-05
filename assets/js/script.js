
var locationTest = 'https://api.weatherapi.com/v1/current.json?key=f3315e9121504e948af175459220502&q=miami&aqi=yes'
var locationData = [];
var locationDataTitle = ['Temperature:', 'Wind Speed:', 'UV Index:', 'Date:', 'Condition Image:', 'Condition:'];




var currentSearchHandler = function (citySearch) {          // receves city name as string ('miami') -> outputs the full API URL based search input
  var baseUrl = 'https://api.weatherapi.com/v1';
  var searchType = '/current';
  var key = '.json?key=f3315e9121504e948af175459220502';
  var currentSuffix = '&aqi=yes';
  var fullUrl = baseUrl + searchType + key + '&q=' + citySearch + currentSuffix;
  console.log(fullUrl);
  return fullUrl;
}

var apiURL = currentSearchHandler('miami');  // needs to become a function which captures text as submit button is clicked.
  
fetch(apiURL)
.then(function(response) {
  if(response.ok) {
    console.log('success');
    response.json().then(function(data) {
      console.log(data);
      locationData[0] = data.current.temp_f;           // temperature in F
      locationData[1] = data.current.wind_mph;         // wind speed
      locationData[2] = data.current.uv;               // uv
      locationData[3] = data.location.localtime;       // local date and time (at moment of search)
      locationData[4] = data.current.condition.icon;   // condition image
      locationData[5] = data.current.condition.text;   // condition text
    });
  }
  else {
    alert('Error');
  }
  console.log(locationData);
});

/* -------------------------------------------------------------------------------
-                                 EVENT LISTENERS
------------------------------------------------------------------------------- */

// var userSearch = document.addEventListener('submit', functionNameTBD());









