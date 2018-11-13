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

//use user geolocation in movieglu api to find cinemas nearby

findCinemas = () => {
    axios.get(moviegluURL, {
        params : {
            key: 'Au2GVSQyKQ3qZ7Ak0PY7alzjTHNGkle6EbodvsJb'

        }
    })
}