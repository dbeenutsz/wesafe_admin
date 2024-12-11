function initMap() {
  // Coordinates for Metro Cebu
  var metroCebu = { lat: 10.3157, lng: 123.8854 }; // Latitude and Longitude for Cebu City
  
  // Create a map centered in Metro Cebu
  var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: metroCebu
  });
  
  // Add a marker at the center of Metro Cebu
  var marker = new google.maps.Marker({
      position: metroCebu,
      map: map,
      title: "Metro Cebu"
  });
}
