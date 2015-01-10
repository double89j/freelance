/*
    How to animate height from 0 to auto using CSS Transitions
        - http://css3.bradshawenterprises.com/animating_height/
*/
$('#readmore').click(function(evt) {
    $("#readmoretext").toggleClass("showtext");
});

var aboutusSliderOptions = {
        sliderId: "aboutusSlider",
        startSlide: 0,
        effect: "13",
        effectRandom: false,
        pauseTime: 5000,
        transitionTime: 500,
        slices: 12,
        boxes: 8,
        hoverPause: 1,
        autoAdvance: true,
        captionOpacity: 0.3,
        captionEffect: "fade",
        thumbnailsWrapperId: "thumbs",
        m: false,
        license: "mylicense"
    },
    aboutusImageSlider = new mcImgSlider(aboutusSliderOptions);
aboutusImageSlider.reload();

// $.getScript('http://www.jscache.com/wejs?wtype=selfserveprop&amp;uniq=461&amp;locationId=1222443&amp;lang=en_MY&amp;rating=true&amp;nreviews=4&amp;writereviewlink=true&amp;popIdx=true&amp;iswide=true&amp;border=true&amp;display_version=2', function() {
//     if (typeof(window.taValidate) != 'undefined') {
//       window.taValidate();
//     }
// });