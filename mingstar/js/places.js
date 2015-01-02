/*
    Adding a Google Map to your website
        - https://developers.google.com/maps/tutorials/fundamentals/adding-a-google-map
*/
var hotelLatLng = new google.maps.LatLng(5.332071, 103.147845);

function googleMapInit() {
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
        // center: new google.maps.LatLng(44.5403, -78.5463),
        center: hotelLatLng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
        position: hotelLatLng
        // animation: google.maps.Animation.BOUNCE
    });
    marker.setMap(map);

    var infowindow = new google.maps.InfoWindow({
        content: '<h5 id="nameOnMap">Ming Star Hotel</h5>We are here!'
    });

    // infowindow.open(map, marker);
    google.maps.event.addListener(marker, 'click', function() {
        // Open inforwindow on marker click event
        infowindow.open(map, marker);
    });
}
// google.maps.event.addDomListener(window, 'load', googleMapInit);
googleMapInit();

$('#map1').click(function(evt) {
    MM_openBrWindow('images/map1.jpg','MAP1','scrollbars=yes,resizable=yes,width=750,height=610');
});
$('#map2').click(function(evt) {
    MM_openBrWindow('images/map2.jpg','MAP2','status=yes,scrollbars=yes,resizable=yes,width=500,height=400');
});