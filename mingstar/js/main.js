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

        init = function(currentPage) {
            // Do this when a page loads
            console.log('init call');

            if (currentPage=='index.html') {
                $content.load('home.html #content>*', function(responseTxt, statusTxt, xhr) {
                    if (statusTxt=='success')
                        console.log('index page initialization complete');
                    if (statusTxt=='error')
                        console.lop('Error: Fail to load home.html.');
                });
            }
            else {
                currentPage = currentPage.slice(0, currentPage.indexOf('.'));
                loadPage(currentPage);
            }
        },

        ajaxLoad = function(html) {
            console.log('ajaxLoad called');
            document.title = html
                .match(/<title>(.*?)<\/title>/)[1]
                .trim();

            // init();
        },

        loadPage = function(href) {
            console.log('load page function');
            if (href=='index.html' || href=='index')
                href = 'home'

            $content.load(href+'.html #content>*', function(responseTxt, statusTxt, xhr) {
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

            $.cachedScript('js/'+href+'.js')
                .done(function(script, textStatus) {
                    console.log(textStatus+': script loaded');
                })
                .fail(function(jqxhr, settings, exception) {
                    console.warn('no script found');
                });

            // $.getScript('js/'+href+'.js')
            //     .done(function(script, textStatus) {
            //         console.log('script loaded');
            //     })
            //     .fail(function(jqxhr, settings, exception) {
            //         console.warn('no script found');
            //     });

            // $.getScript('js/'+href+'.js', function(data, textStatus, jqxhr) {
            //     // console.log(data);
            //     // console.log(textStatus);
            //     // console.log(jqxhr);
            //     console.log('script loaded');
            // });
        };

    init(location.href.split('/').pop());

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

    $(window).bind('popstate', function(evt) {
        // if (evt.originalEvent.state !== null)
        if (location.hash.length==0) {
            var page = location.href.split('/').pop();
            page = page.slice(0, page.indexOf('.'));
            loadPage(page);
        }
    });

    $('#navbar-collapse-main').on('click', 'a', function(evt) {
        // console.log('item ID: '+$(this).attr('id'));
        var href = $(this).attr('href');
        console.log('link click');

        if (href.indexOf(document.domain) > -1 || href.indexOf(':') === -1) {
            history.pushState({}, '', href+'.html');
            loadPage(href);
            return false;
        }
    });
});

function loadpage_old(page) {
    var loadHTML = page + '.html';
    $('#content').load(loadHTML, function(responseTxt, statusTxt, xhr) {
        if (statusTxt=='success')
            console.log('load complete');
        if (statusTxt=='error')
            console.log('Error: '+xhr.status+": "+xhr.statusTxt);
    });
}