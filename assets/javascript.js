//global varibales 
var googleURL = "https://maps.googleapis.com/maps/api/geocode/json" 
var location =  $("#locationtxt").val().trim()
var latitude;
var longitude; 
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
    })
}

//call function

geolocation(); 