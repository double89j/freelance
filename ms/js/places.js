$(document).ready(function() {

    function MM_openBrWindow(theURL, winName, features) { //v2.0
        open(theURL, winName, features);
        return false;
    }

    // function openGoogleMap() {
    //     open('https://www.google.com/maps/d/viewer?ll=5.332071,103.147845&source=embed&iwloc=00045067c9e420974965c&ie=UTF8&msa=0&spn=0,0&hl=en&mid=z-UdJ9CaRHZ8.kWNEoVqUrvDs');
    //     return false;
    // }

    $('#map1').click(function(evt) {
        MM_openBrWindow('images/map1.jpg','MAP1','scrollbars=yes,resizable=yes,width=750,height=610');
    });

    $('#map2').click(function(evt) {
        MM_openBrWindow('images/map2.jpg','MAP2','status=yes,scrollbars=yes,resizable=yes,width=500,height=400');
    });

});