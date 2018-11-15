$(".img-thumbnail").on("click", function() {
    var searchTerm = $(this).attr("value");
    console.log(searchTerm);

    displayMovieInfo(searchTerm);
});

function displayMovieInfo(search) {
    // `search` corresponds to the genre code for the TMDB API
    var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=6d9d4c1511419d5253e7cf5683b3e1df&with_genres=" + search + "&sort_by=popularity.desc";

    // Creates AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        // print movie list to console
        console.log(response.results);
    });
}

//global variables
var googleURL = "https://maps.googleapis.com/maps/api/geocode/json";

var latitude;
var longitude;

$("#location-submit").on("click", function() {
    event.preventDefault();
    var location =  $("#locationtxt").val().trim();
    $("#locationtxt").text("");

    //call function
    geolocation();
});

//making a GET request to get user lat & long from user location
function geolocation() {
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
    });
}