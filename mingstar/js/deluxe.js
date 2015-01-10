var deluxeSliderOptions = {
        sliderId: "deluxeSlider",
        startSlide: 0,
        effect: "12",
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
    deluxeImageSlider = new mcImgSlider(deluxeSliderOptions);
deluxeImageSlider.reload();

// $.getScript('http://www.jscache.com/wejs?wtype=selfserveprop&amp;uniq=461&amp;locationId=1222443&amp;lang=en_MY&amp;rating=true&amp;nreviews=4&amp;writereviewlink=true&amp;popIdx=true&amp;iswide=true&amp;border=true&amp;display_version=2', function() {
//     if (typeof(window.taValidate) != 'undefined') {
//       window.taValidate();
//     }
// });