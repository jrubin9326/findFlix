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