$(".img-thumbnail").on("click", function() {
    $("#movie-results").empty();
    var searchTerm = $(this).attr("value");
    console.log(searchTerm);

    // `movieData` will hold the response object
    var movieData;

    // `search` corresponds to the genre code for the TMDB API
    var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=6d9d4c1511419d5253e7cf5683b3e1df&with_genres=" + searchTerm + "&sort_by=popularity.desc";

    // Creates AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        // print movie list to console
        console.log(response.results);
        movieData = response.results;

        // show 10 results on the page
        for (var i = 0; i < 10; i ++) {
            displayMovieInfo(movieData[i]);
        }
    });
});

function displayMovieInfo(search) {
    console.log(search.overview);
    console.log(search.release_date);
    console.log(search.popularity);
    console.log(search.vote_average);

    var newMovieDiv = $("<div>");

    var newTitle = $("<h5>");
    newTitle.text(search.title);
    
    var newOverview = $("<p>");
    newOverview.text(search.overview);
    
    var newRelease = $("<p>");
    newRelease.text("Release: " + search.release_date);
    
    var newPopularity = $("<p>");
    newPopularity.text("Popularity: " + search.popularity);

    var newAvgVote = $("<p>");
    newAvgVote.text("Average Vote: " + search.vote_average);

    newMovieDiv.append(newTitle);
    newMovieDiv.append(newOverview);
    newMovieDiv.append(newRelease);
    newMovieDiv.append(newPopularity);
    newMovieDiv.append(newAvgVote);

    $("#movie-results").append(newMovieDiv);
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