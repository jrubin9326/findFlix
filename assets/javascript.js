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

// var latitude;
// var longitude;


$("#location-submit").on("click", function() {
    event.preventDefault();
    var location =  $("#locationtxt").val().trim()

    //call function
    geolocation();
});

// making a GET request to get user lat & long from user location
// function geolocation() {
//     location = '20 W 34th St New York NY 10001'    
//     axios.get(googleURL, {
//         params: {
//             address: location,
//             key : 'AIzaSyAWBZmsW4r6XvMYn5LUIrAT4O5Kooc4W3o'
//         }
//     })
//     .then(function(response){
//     // latitude 
//         latitude = response.data.results[0].geometry.location.lat;
//         console.log(latitude)
//         //longitude 
//         longitude = response.data.results[0].geometry.location.lng;
//         console.log(longitude)
//     })  
//     .catch (function(error){
//         alert("Sorry, there was a geolocation error: " + error)
//     });
// }

// geolocation()
// var movieURl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.758896,-73.985130&radius=1500&type=movie_theater&key=AIzaSyAWBZmsW4r6XvMYn5LUIrAT4O5Kooc4W3o"

// $.ajax({
//     url: movieURl,
//     method: "GET"
// }).then(function(response){
//     console.log(response)
// }).catch(function(error){
//     console.log(error)
// }); 


//postman code that finds movie theaters based on the users 
//latitude and longitude 
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=%2040.758896,-73.985130&radius=1500&type=movie_theater&key=AIzaSyAWBZmsW4r6XvMYn5LUIrAT4O5Kooc4W3o",
    "method": "GET",
    "headers": {
      "cache-control": "no-cache",
      "Postman-Token": "4a0e93a6-67e7-4e35-a1e8-32260d88929b"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });