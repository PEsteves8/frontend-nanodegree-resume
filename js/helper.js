var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span id="role">%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLlinkedin = '<li class="flex-item"><span class="orange-text">linkedin</span><span class="white-text"><a href="%link%" class="ghlink" target="_blank">%name%</a></span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLmedium = '<li class="flex-item"><span class="orange-text">medium</span><span class="white-text"><a href="%link%" class="ghlink" target="_blank">%name%</a></span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text"><a href="%link%" class="ghlink" target="_blank">%name%</a></span></li>';
var HTMLportfolio = '<li class="flex-item"><span class="orange-text">portfolio</span><span class="white-text"><a href="%link%" class="ghlink" target="_blank">%name%</a></span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<p class="welcome-message">%data%</p>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item white-text">%data%</li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#" target="_blank">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';
var HTMLworkTask = '<li>%data%</li>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#" target="_blank">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<li>%data%</li>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#" target="_blank">%data%';
var HTMLschoolDegree = ' - %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Main Online Classes</h3>';
var HTMLonlineTitle = '<a href="#" target="_blank">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div><br>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var HTMLlanguageName = "<h4>%data% - ";
var HTMLlanguageLevel = "<em>%data%</em></h4>";
var HTMLcertificateHeader = "<h3>Language Certificates</h3>";
var HTMLcertificateURL = "<h4><a href='%data%' target='_blank'>";
var HTMLcertificateName = "%data%</a></h4>";

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.

$(document).ready(function () {
  $('button').click(function() {
    var iName = inName() || function() {};
    $('#name').html(iName);
  });
});
*/
/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.

var clickLocations = [];

function logClicks(x, y) {
  clickLocations.push({
    x: x,
    y: y
  });
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {

});
*/

// google map section
var map;


function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array.
    education.schools.forEach(function (school) {
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array.
    work.jobs.forEach(function (job) {
      if (job.location.toUpperCase() !== "online".toUpperCase()) {
        locations.push(job.location);
      };
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();
    var lon = placeData.geometry.location.lng();
    var name = placeData.formatted_address;
    var bounds = window.mapBounds; // current boundaries of the map window


    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });



    var infoWindow = new google.maps.InfoWindow({
      content: name
    });


    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });


    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    locations.forEach(function(place) {
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}



window.addEventListener('load', initializeMap);

window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
