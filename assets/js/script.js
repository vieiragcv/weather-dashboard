
var locationTest = 'https://api.weatherapi.com/v1/current.json?key=f3315e9121504e948af175459220502&q=miami&aqi=yes'
var searchedLocation = [];
var miami = 'miami';



var currentSearchHandler = function (citySearch) {          // outputs the full API URL based search input
  var baseUrl = 'https://api.weatherapi.com/v1';
  var searchType = '/current';
  var key = '.json?key=f3315e9121504e948af175459220502';
  var currentSuffix = '&aqi=yes';
  var fullUrl = baseUrl + searchType + key + '&q=' + citySearch + currentSuffix;
  console.log(fullUrl);
  return fullUrl;
}

var test = currentSearchHandler('miami');
  
fetch(test)
.then(function(response) {
  if(response.ok) {
    console.log('success');
    response.json().then(function(data) {
      console.log(data);
      searchedLocation[0] = data.current.temp_f;           // temperature in F
      searchedLocation[1] = data.current.wind_mph;         // wind speed
      searchedLocation[2] = data.current.uv;               // uv
      searchedLocation[3] = data.location.localtime;       // local date and time (at moment of search)
      searchedLocation[4] = data.current.condition.icon;   // condition image
      searchedLocation[5] = data.current.condition.text;   // condition text
    });
  }
  else {
    alert('Error');
  }
  console.log(searchedLocation);
});










