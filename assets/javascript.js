// $(".img-thumbnail").on("click", function() {
//     var searchTerm = $(this).attr("value");
//     console.log(searchTerm);

//     displayMovieInfo(searchTerm);
// });

// function displayMovieInfo(search) {
//     // `search` corresponds to the genre code for the TMDB API
//     var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=6d9d4c1511419d5253e7cf5683b3e1df&with_genres=" + search + "&sort_by=popularity.desc";

// //     // Creates AJAX call for the specific movie button being clicked
// //     $.ajax({
// //         url: queryURL,
// //         method: "GET"
// //     }).then(function(response) {
// //         // print movie list to console
// //         console.log(response.results);
// //     });
// // }
// }
// //global variables
var googleURL = "https://maps.googleapis.com/maps/api/geocode/json";

var latitude;
var longitude;


$("#location-submit").on("click", function() {
    event.preventDefault();
    var location =  $("#locationtxt").val().trim()

    //call function
    geolocation();
});

// // making a GET request to get user lat & long from user location
function geolocation() {
    let loc = '22 Main st Boston MA'    
    axios.get(googleURL, {
        params: {
            address: loc,
            key : 'AIzaSyAWBZmsW4r6XvMYn5LUIrAT4O5Kooc4W3o'
        }
    })
    .then(function(response){
        console.log(response);
    // latitude 
        latitude = response.data.results[0].geometry.location.lat;
        console.log(latitude)
        //longitude 
        longitude = response.data.results[0].geometry.location.lng;
        console.log(longitude)
    })  
    .catch (function(error){
        alert("Sorry, there was a geolocation error: " + error)
    });
}; 

geolocation()
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
// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=%2040.758896,-73.985130&radius=1500&type=movie_theater&key=AIzaSyAWBZmsW4r6XvMYn5LUIrAT4O5Kooc4W3o",
//     "method": "GET",
//     "headers": {
//       "cache-control": "no-cache",
//       "Postman-Token": "4a0e93a6-67e7-4e35-a1e8-32260d88929b"
//     }
//   }
  
//   $.ajax(settings).done(function (response) {
//     console.log(response);
//   })


var movieURl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=%2040.758896,-73.985130&radius=1500&type=movie_theater&key=AIzaSyAWBZmsW4r6XvMYn5LUIrAT4O5Kooc4W3o";

 $.ajax({
        url: movieURl,
        method: "GET"
    }).then(function(response){
        console.log(response)
    }).catch(function(error){
        console.log(error)
    }); 
    


    // let locationBias: {radius: 100, center: {lat:40.758896, lng: -73.985130}}
