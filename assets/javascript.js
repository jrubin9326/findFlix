$(".img-thumbnail").on("click", function() {
    var searchTerm = $(this).attr("value");
    console.log(searchTerm);

    displayMovieInfo(searchTerm);
})

function displayMovieInfo(search) {
    // `search` corresponds to the genre code for the TMDB API
    var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=6d9d4c1511419d5253e7cf5683b3e1df&with_genres=" + search;

    // Creates AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response.results);
    });
}

//global varibales 
var googleURL = "https://maps.googleapis.com/maps/api/geocode/json" 
var location =  $("#locationtxt").val().trim()
var latitude;
var longitude; 
//n = 10, number of movie theaters that link will return 
var moviegluURL = "https://api-gate2.movieglu.com/"

//making a GET request to get user lat & long from user location
function geolocation() {
    location = '20 W 34th St, New York, NY 10001'
   
    axios.get(googleURL, {
        params: {
            address: location,
            key : 'AIzaSyAWBZmsW4r6XvMYn5LUIrAT4O5Kooc4W3o'
        }
    })
    .then(function(response){
        //latitude 
        latitude = response.data.results[0].geometry.location.lat;
        //longitude 
        longitude = response.data.results[0].geometry.location.lng;
    })    
    .catch (function(error){
        console.log(error); 
    })
}

//call function

geolocation();
