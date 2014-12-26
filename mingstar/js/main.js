/*
    jquery Documentation

    Event Delegation
        - http://learn.jquery.com/events/event-delegation/
    history.pushState and jQuery
        - http://rosspenman.com/pushstate-jquery/
*/
$(document).ready(function() {
    init = function() {
        // Do this when a page loads
    },

    loadPage = function(href) {
        if (href=='index.html')
            href = 'home.html'

        $('#content').load(href, function(responseTxt, statusTxt, xhr) {
            if (statusTxt=='success') {
                console.log('load complete');
            }
            if (statusTxt=='error')
                console.log('Error: '+xhr.status+": "+xhr.statusTxt);
        });
    };

    init();

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

    $(window).on('popstate', function(evt) {
        loadPage(location.href.split('/').pop())
    });

    $('#navbar-collapse-main').on('click', 'a', function(evt) {
        // evt.preventDefault();
        // console.log('item ID: '+$(this).attr('id'));
        var href = $(this).attr('href');

        if (href.indexOf(document.domain) > -1 || href.indexOf(':') === -1) {
            history.pushState({}, '', href);
            loadPage(href);
            return false;
        }
    });
});

function loadpage(page) {
    var loadHTML = page + '.html';
    $('#content').load(loadHTML, function(responseTxt, statusTxt, xhr) {
        if (statusTxt=='success')
            console.log('load complete');
        if (statusTxt=='error')
            console.log('Error: '+xhr.status+": "+xhr.statusTxt);
    });
}
