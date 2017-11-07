var locations = [
  {
    lat : 10.805313,
    lng : 106.691377
  },
  {
    lat : 10.803793,
    lng : 106.686612
  },
  {
    lat : 10.800863,
    lng : 106.685969
  }
];
var map = null;
var markers = [];
var marker;

function myMap(){
  var myCenter  = new google.maps.LatLng(locations[0].lat, locations[0].lng);
  var mapCanvas = document.getElementById("MyMap");
  var mapOption = {center: myCenter, zoom: 14};
  map =  new google.maps.Map(mapCanvas, mapOption);

  for (var i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position  : new google.maps.LatLng(locations[i].lat, locations[i].lng),
      icon      : 'images/pointer-color-icon.png'
    });
    marker.setMap(map);
    markers.push(marker);
  }
}