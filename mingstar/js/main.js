/*
    jquery Documentation

    Event Delegation
        - http://learn.jquery.com/events/event-delegation/
    history.pushState and jQuery
        - http://rosspenman.com/pushstate-jquery/
*/
$(document).ready(function() {
    jQuery.cachedScript = function(url, options) {
         // Allow user to set any option except for dataType, cache, and url
        options = $.extend( options || {}, {
            dataType: 'script',
            cache: true,
            url: url
        });
        // Use $.ajax() since it is more flexible than $.getScript
        // Return the jqXHR object so we can chain callbacks
        return jQuery.ajax( options );
    };

    String.prototype.decodeHTML = function() {
        return $('div', {html: ''+this}).html();
    }

    var $content = $('#content'),

        init = function() {
            // Do this when a page loads
            console.log('init call');

            $content.load('home.html #main>*', function(responseTxt, statusTxt, xhr) {
                if (statusTxt=='success')
                    console.log('initialization complete');
                if (statusTxt=='error')
                    console.lop('Error: Fail to load home.html.');
            });
        },

        ajaxLoad = function(html) {
            console.log('ajaxLoad called');
            document.title = html
                .match(/<title>(.*?)<\/title>/)[1]
                .trim();

            // init();
        },

        loadPage = function(href) {
            if (href=='index.html')
                href = 'home'

            $content.load(href+'.html #main>*', function(responseTxt, statusTxt, xhr) {
                if (statusTxt=='success') {
                    console.log('load complete');
                    ajaxLoad(responseTxt);
                }
                if (statusTxt=='error')
                    console.log('Error: '+xhr.status+": "+xhr.statusTxt);
            });

            // $.load('title.html #'+href, function(responseTxt, statusTxt, xhr) {
            //     if (statusTxt=='success')
            //         ajaxLoad(responseTxt);
            //     if (statusTxt=='error')
            //         console.log('Error: '+xhr.status+": "+xhr.statusTxt);
            // });

            // $.cachedScript('js/'+href+'.js').done(function(script, textStatus) {
            //     console.log(textStatus);
            // });

            $.getScript('js/'+href+'.js', function(data, textStatus, jqxhr) {
                // console.log(data);
                // console.log(textStatus);
                // console.log(jqxhr);
                console.log('script loaded');
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
        // if (evt.originalEvent.state !== null)
            loadPage(location.href.split('/').pop());
    });

    $('#navbar-collapse-main').on('click', 'a', function(evt) {
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