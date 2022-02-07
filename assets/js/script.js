var baseUrl = 'https://api.weatherapi.com/v1';
var key = '.json?key=f3315e9121504e948af175459220502';
var currentSuffix = '&aqi=yes';
var forecastSuffix = '&days=6&aqi=no&alerts=no';

var locationData = [];
var forecastData = [];
var forecastDays = [];
var locationDataTitle = ['Temperature:', 'Wind Speed:', 'UV Index:', 'Date:', 'Condition Image:', 'Condition:'];
var fullResponse = [];


var forecastSearchHandler = function (searchedName) {
  var searchType = '/forecast';
  var fullUrl = baseUrl + searchType + key + '&q=' + searchedName + forecastSuffix;
  console.log(fullUrl);
  return fullUrl;
}

var apiURL = forecastSearchHandler('miami'); // TEMPORARY

var forecastWeather = function(value) {  
  fetch(apiURL)
  .then(function(response) {
    if(response.ok) {
      
      console.log('success');
      response.json().then(function(data) {
        var dateSlot = data.forecast.forecastday[value].date;                   // local date and time (at moment of search)
        var tempSlot = data.forecast.forecastday[value].day.avgtemp_f;         // temperature in F  
        var windSlot = data.forecast.forecastday[value].day.maxwind_mph;       // max wind speed
        var uvSlot = data.forecast.forecastday[value].day.uv;                // uv
        var condImgSlot = data.forecast.forecastday[value].day.condition.icon;    // condition image
        var condTxtSlot = data.forecast.forecastday[value].day.condition.text;    // condition text
        forecastData[value] = {dateSlot, tempSlot, windSlot, uvSlot, condImgSlot, condTxtSlot};
        
        return forecastData;
      });
    }
    else {
      alert('Error');
    }
  });
}

var getAllData = function () {
 for(i=0; i<3; i++) {
    forecastDays[i] = forecastWeather(i);
 }
 console.log(forecastData);
  return forecastDays;
}


getAllData();



/* -------------------------------------------------------------------------------
-                                 EVENT LISTENERS
------------------------------------------------------------------------------- */


var formSearch = document.getElementById('search-form');
// formSearch.addEventListener('submit', )

/* -----------------------------------------------

var functionTBD = function() {
  var cityName = document.getElementById('input-1').value;
  console.log(cityName);
}

-----------------------------------------------*/






/* COULD BE REMOVED 


var currentSearchHandler = function (citySearch) {          // receves city name as string ('miami') -> outputs the full API URL based search input
  var searchType = '/current'; 
  var fullUrl = baseUrl + searchType + key + '&q=' + citySearch + currentSuffix;
  console.log(fullUrl);
  return fullUrl;
}
var currentWeather = function () {

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
    //console.log(locationData);
  });
}



*/








