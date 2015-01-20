/*
    jquery Documentation

    Event Delegation
        - http://learn.jquery.com/events/event-delegation/
    history.pushState and jQuery
        - http://rosspenman.com/pushstate-jquery/
    Set Dropdown Menu height
        - http://stackoverflow.com/questions/19227496/scrollable-menu-with-bootstrap-3-menu-expanding-its-container-when-it-should-n
    expanded mobile navbar doesn't collapse after clicking link #12852 
        - https://github.com/twbs/bootstrap/issues/12852
*/

window.myglobal = {};
(function(context) {
    context.getHotelName = function() {
        return 'Ming Star Hotel';
    };
    context.getTagline = function() {
        return 'A Luxury WP Theme';
    };
    context.getHotelPhone = function() {
        return '+60-9-6228666';
    };
    context.getHotelFax = function() {
        return '+60-9-6221888';
    };
    context.getCopyright = function() {
        return '<p>All material herein &copy; 2014 – 2015 Ming Group<br />All Rights Reserved</p>';

    };
})(window.myglobal);

$(document).ready(function() {
    $('#hotelname').text(window.myglobal.getHotelName());
    $('#tagline').text(window.myglobal.getTagline());
    $('#hotelphone').text(window.myglobal.getHotelPhone());
    $('#hotelfax').text(window.myglobal.getHotelFax());
    $('#copyright').html(window.myglobal.getCopyright());

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
        checkCtrl = false,

        init = function(currentPage) {
            // Do this when a page loads
            // console.log('init call');

            if (currentPage=='index.html' || currentPage=='') {
                // currentPage = 'home'
                currentPage = 'aboutus'
            }
            else
                currentPage = currentPage.slice(0, currentPage.indexOf('.'));

            loadPage(currentPage);
            checkGalleryRoomTypeBox();

            // if (currentPage=='index.html') {
            //     $content.load('home.html #content>*', function(responseTxt, statusTxt, xhr) {
            //         if (statusTxt=='success')
            //             console.log('index page initialization complete');
            //         if (statusTxt=='error')
            //             console.lop('Error: Fail to load home.html.');
            //     });
            // }
            // else {
            //     currentPage = currentPage.slice(0, currentPage.indexOf('.'));
            //     loadPage(currentPage);
            // }
        },

        initTooltipPopover = function() {
            $('[data-toggle="tooltip"]').tooltip();
            $('[data-toggle="popover"]').popover();
        },

        ajaxLoad = function(html) {
            document.title = html
                .match(/<title>(.*?)<\/title>/)[1]
                .trim(); // console.log('ajaxLoad called');

            // init();
        },

        loadPage = function(href) {
            if (href=='#')
                return;

            if (href=='index.html' || href=='index' || href=='')
                href = 'aboutus';

            $content.load(href+'.html #content>*', function(responseTxt, statusTxt, xhr) {
                if (statusTxt=='success') {
                    initTooltipPopover();
                    ajaxLoad(responseTxt); // console.log('load complete');
                }
                if (statusTxt=='error')
                    console.log('Error: '+xhr.status+": "+xhr.statusTxt);
            });

            setTimeout(function(evt) {
                $.cachedScript('js/'+href+'.js')
                    .done(function(script, textStatus) {
                        console.log(textStatus+': script loaded');
                    })
                    .fail(function(jqxhr, settings, exception) {
                        console.warn('no script found');
                    });
            }, 300);

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
        },

        checkGalleryRoomTypeBox = function() {
            // var navWidth = $('#gallery-room-type-box').width();
            // if ($(window).width() > 1300)
            //     $('#gallery-room-type-box').addClass('gallery-fixed-box');
            // else
            //     $('#gallery-room-type-box').removeClass('gallery-fixed-box');

            // if ($('#gallery-room-type-box').length != 0) {
            //     if (navWidth > 190)
            //         $('#gallery-room-type-box').addClass('gallery-fixed-box');
            //     else
            //         $('#gallery-room-type-box').removeClass('gallery-fixed-box');
            // }
        },

        checkNavbarCollapse = function() {
            // Still having an issue here which is FOC when toggle collapse
            if ($('.navbar-collapse').attr('class')=='navbar-collapse collapse in')
                $('.navbar-collapse').collapse('hide');
        };

    init(location.href.split('/').pop());

    $(window).bind('scroll', function() {
        // var navHeight = $('#box1').height();
        // if ($(window).scrollTop() > navHeight) {
        //     $('nav').addClass('goToTop');
        //     $('#box3').addClass('marginFromTop');
        // }
        // else {
        //     $('nav').removeClass('goToTop');
        //     $('#box3').removeClass('marginFromTop');
        // }

        // ($(window).scrollTop() > navHeight) ? $('nav').addClass('goToTop') : $('nav').removeClass('goToTop');

        /*var navHeight = $('#box1').height();
        if ($(window).scrollTop() > navHeight) {
            $('nav').addClass('navbar-fixed-top');
            $('#box3').addClass('marginFromTop');
        }
        else {
            $('nav').removeClass('navbar-fixed-top');
            $('#box3').removeClass('marginFromTop');
        }*/
    });

    $(window).bind('resize', function() {
        checkGalleryRoomTypeBox();
        if ($(window).width() > 760)
            checkNavbarCollapse();
    });

    $(window).bind('popstate', function(evt) {
        // if (evt.originalEvent.state !== null)
        if (location.hash.length==0) {
            var page = location.href.split('/').pop();
            page = page.slice(0, page.indexOf('.'));
            loadPage(page);
        }
    });

    $(document).keydown(function(evt) {
        if (evt.keyCode==17)
            checkCtrl = true;
    });

    $(document).keyup(function(evt) {
        checkCtrl = false;
    });

    $('#navbar-collapse-main1').on('click', 'a', function(evt) {
        // console.log('item ID: '+$(this).attr('id'));
        var href = $(this).attr('href');
            href = href.slice(0, href.indexOf('.'));
        // if (href=='deluxe') {
        //     evt.preventDefault();
        //     alert(href);
        //     return;
        // }
        if (href=='#' || href=='') {
            // evt.preventDefault();
            return;
        }
        if (checkCtrl) {
            // cater ctrl + click event
            return;
        }

        console.log('link click');

        if (href.indexOf(document.domain) > -1 || href.indexOf(':') === -1) {
            if (href=='home')
                history.pushState({}, '', 'index.html');
            else if (href=='deluxe' || href=='superiorPlus' || href=='superior' || href=='standard') {
                history.pushState({}, '', href+'.html');
                // console.log('close');
                // close the dropdown
                $('#rooms-nav').dropdown('toggle');
            }
            else
                history.pushState({}, '', href+'.html');

            loadPage(href);
            if ($('.navbar-toggle').css('display')=='block')
                $('.navbar-collapse').collapse('hide');
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
