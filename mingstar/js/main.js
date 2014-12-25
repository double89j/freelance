/*
    jquery Documentation

    Event Delegation
        - http://learn.jquery.com/events/event-delegation/
*/
$(document).ready(function(){
    $(window).bind('scroll', function() {
        var navHeight = $('#box1').height();
        // ($(window).scrollTop() > navHeight) ? $('nav').addClass('goToTop') : $('nav').removeClass('goToTop');
        if ($(window).scrollTop() > navHeight) {
            $('nav').addClass('goToTop');
            // $('#box2').addClass('marginFromTop');
            $('#box3').addClass('marginFromTop');
        }
        else {
            $('nav').removeClass('goToTop');
            // $('#box2').removeClass('marginFromTop');
            $('#box3').removeClass('marginFromTop');
        }
    });

    $('#navbar-collapse-main').on('click', 'a', function(evt) {
        evt.preventDefault();
        console.log('item ID: '+$(this).attr('id'));
    })
});

function loadpage(page) {
    var loadHTML = page + '.html';
    // if (page=='contact' || page=='places') {
        $('#content').load(loadHTML, function(responseTxt, statusTxt, xhr) {
            if (statusTxt=='success')
                console.log('load complete');
            if (statusTxt=='error')
                console.log('Error: '+xhr.status+": "+xhr.statusTxt);
        });
    // }
    // else {
    //     console.warn('should load '+page+'.html');
    // }
}
