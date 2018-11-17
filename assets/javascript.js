$(".hvrbx-layer-top").on("click", function() {
    // clear the movies from the previous genre, if any are on the page
    $("#movie-results").empty();

    // grab the value of the genre button
    var searchTerm = $(this).attr("value");

    // `movieData` will hold the response object
    var movieData;

    // `search` corresponds to the genre code for the TMDB API
    var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=6d9d4c1511419d5253e7cf5683b3e1df&with_genres=" + searchTerm + "&sort_by=popularity.desc";

    // Creates AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        // creating a shortcut
        movieData = response.results;
        console.log(movieData)

        // show 10 results on the page
        for (var i = 0; i < 10; i ++) {
            displayMovieInfo(movieData[i]);
        }
    });
});

function displayMovieInfo(search) {
    var newMovieDiv = $("<div>");

    var newTitle = $("<h4>");
    newTitle.text(search.title);
    
    var newOverview = $("<p>");
    newOverview.text(search.overview);
    
    var newRelease = $("<p>");
    newRelease.text("Release: " + search.release_date);
    
    var newPopularity = $("<p>");
    newPopularity.text("Popularity: " + search.popularity);

    var newAvgVote = $("<p>");
    newAvgVote.text("Average Vote: " + search.vote_average);

    var watchTrailer = $("<button>");
    watchTrailer.addClass("watch-trailer-btn btn btn-dark sm-btn");
    watchTrailer.text("Watch the trailer");
    watchTrailer.attr("movieID", search.id);

    var newTrailer = $("<iframe>");
    newTrailer.attr("width", "956");
    newTrailer.attr("height", "538");
    newTrailer.attr("src", "");
    newTrailer.attr("class", "movie-trailer")
    // attaching the movie ID to the video element so it can be located later
    newTrailer.attr("id", search.id);

    newMovieDiv.append(newTitle);
    newMovieDiv.append(newOverview);
    newMovieDiv.append(newRelease);
    newMovieDiv.append(newPopularity);
    newMovieDiv.append(newAvgVote);
    newMovieDiv.append(watchTrailer);
    newMovieDiv.append("<br><br>");
    newMovieDiv.append(newTrailer);
    newTrailer.hide();

    $("#movie-results").append(newMovieDiv);
}

$(document).on("click", ".watch-trailer-btn", function() {
    // hide any previously opened trailer
    $(".movie-trailer").hide();
    var trailerID = $(this).attr("movieID");
    
    var trailerQueryURL = "https://api.themoviedb.org/3/movie/" + trailerID + "/videos?api_key=6d9d4c1511419d5253e7cf5683b3e1df&language=en-US";

    // Creates AJAX call for the specific trailer button being clicked
    $.ajax({
        url: trailerQueryURL,
        method: "GET"
    }).then(function(response) {
        // get the end of the URL from the response
        var videoKey = (response.results[0]).key;
        // add the key to the rest of the YouTube link
        var youtubeLink = "https://www.youtube.com/embed/" + videoKey;
        // change the source of the video and show the element
        $("#" + trailerID).attr("src", youtubeLink);
        $("#" + trailerID).show();
        
    });
});


var googleURL = "https://maps.googleapis.com/maps/api/geocode/json";
var loc;

$("#location-submit").on("click", function() {
    event.preventDefault();
    
    geolocation()
    
});

// // making a GET request to get user lat & long from user location
function geolocation() {
    loc =  $("#locationText").val().trim()   
    axios.get(googleURL, {
        params: {
            address: loc,
            key : 'AIzaSyAWBZmsW4r6XvMYn5LUIrAT4O5Kooc4W3o'
        }
    })
    .then(function(response){
        console.log(response);
    // latitude 
        const latitude = response.data.results[0].geometry.location.lat;
        console.log(latitude)
        //longitude 
        const longitude = response.data.results[0].geometry.location.lng;
        console.log(longitude)
     
        var movieURl = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+latitude+","+longitude+"&radius=1500&type=movie_theater&key=AIzaSyAWBZmsW4r6XvMYn5LUIrAT4O5Kooc4W3o";
        console.log(movieURl, "hi")
        $.ajax({
        url: movieURl,
        method: "GET"
    }).then(function(response){
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<")
        console.log(response.results[0].name)
        movieLocation = response.results[0].name; 
    }).catch(function(error){
        console.log(error)
    }); 
})
}

 


      // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyAkczBlIpMSF88zPyDTKtewrb7P7Vf9JH0",
//     authDomain: "groupproject-9d9bb.firebaseapp.com",
//     databaseURL: "https://groupproject-9d9bb.firebaseio.com",
//     projectId: "groupproject-9d9bb",
//     storageBucket: "groupproject-9d9bb.appspot.com",
//     messagingSenderId: "122843347744"
//   };
//     firebase.initializeApp(config);

//     // //Create a variable to reference the database
//     var database = firebase.database();
    // console.log(database)


    console.log("Firebase location value stored: " + userStoredLocation)

    database.ref().on("child_added", function(childSnaphot) {
        console.log(childSnaphot.val());
    
        var loc = childSnaphot.val().locationOfRequester;
        console.log(loc)
    })