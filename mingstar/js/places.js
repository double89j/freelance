/*
    Adding a Google Map to your website
        - https://developers.google.com/maps/tutorials/fundamentals/adding-a-google-map
    Google Maps API - Tutorial
        - https://developers.google.com/maps/tutorials/
*/

$(document).ready(function() {

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

        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        var icons = {
            parking: {
                icon: iconBase + 'parking_lot_maps.png'
            },
            library: {
                icon: iconBase + 'library_maps.png'
            },
            info: {
                icon: iconBase + 'info-i_maps.png'
            }
        };

        var marker = new google.maps.Marker({
            position: hotelLatLng,
            map: map
            // icon: iconBase + 'schools_maps.png'
            // animation: google.maps.Animation.BOUNCE
        });
        // marker.setMap(map);
        function addMarker(feature) {
            var marker = new google.maps.Marker({
                position: feature.position,
                icon: icons[feature.type].icon,
                map: map
            });
        }

        var infowindow = new google.maps.InfoWindow({
            content: '<h5 id="nameOnMap">Ming Star Hotel</h5>We are here!'
        });

        infowindow.open(map, marker);
        // google.maps.event.addListener(marker, 'click', function() {
        //     // Open inforwindow on marker click event
        //     infowindow.open(map, marker);
        // });

        // map.set('styles', [
        // {
        //     featureType: 'road',
        //     elementType: 'geometry',
        //     stylers: [
        //         { color: '#000000' },
        //         { weight: 1.6 }
        //     ]
        // }, {
        //     featureType: 'road',
        //     elementType: 'labels',
        //     stylers: [
        //         { saturation: -100 },
        //         { invert_lightness: true }
        //     ]
        // }, {
        //     featureType: 'landscape',
        //     elementType: 'geometry',
        //     stylers: [
        //         { hue: '#ffff00' },
        //         { gamma: 1.4 },
        //         { saturation: 82 },
        //         { lightness: 96 }
        //     ]
        // }, {
        //     featureType: 'poi',
        //     elementType: 'geometry',
        //     stylers: [
        //         { visibility: 'off' }
        //     ]
        // }, {
        //     featureType: 'poi.school',
        //     elementType: 'geometry',
        //     stylers: [
        //         { visibility: 'on' },
        //         { hue: '#fff700' },
        //         { lightness: -15 },
        //         { saturation: 99 }
        //     ]
        // }
        // ]);
    }
    // google.maps.event.addDomListener(window, 'load', googleMapInit);
    // googleMapInit();

    $('#map1').click(function(evt) {
        MM_openBrWindow('images/map1.jpg','MAP1','scrollbars=yes,resizable=yes,width=750,height=610');
    });
    $('#map2').click(function(evt) {
        MM_openBrWindow('images/map2.jpg','MAP2','status=yes,scrollbars=yes,resizable=yes,width=500,height=400');
    });
});
