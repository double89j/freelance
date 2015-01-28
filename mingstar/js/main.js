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
    float down navbar-fixed-top
        - http://stackoverflow.com/questions/17684268/bootstrap-nav-bar-how-to-float-down-navbar-fixed-top
    Sticky Navigation Bar with jQuery and Bootstrap
        - http://www.jqueryscript.net/menu/Sticky-Navigation-Bar-with-jQuery-Bootstrap.html
    Bootstrap navigation ( Nav bar )
        - http://bootstrap-tutorial.bootstraptor.com/post/53191688399/bootstrap-navigation-nav-bar
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
        return '<p>All material herein &copy; 2014 – 2015 Ming Group. All Rights Reserved</p>';
    };
    context.getCopyright2 = function() {
        return '<p style="display:table; margin:10px auto 0;">All material herein &copy; 2014 – 2015 Ming Group</p>\
                <p style="display:table; margin:0 auto;">All Rights Reserved</p>';
    };
})(window.myglobal);

$(document).ready(function() {
    $('#hotelname').text(window.myglobal.getHotelName());
    $('#tagline').text(window.myglobal.getTagline());
    $('#hotelphone').text(window.myglobal.getHotelPhone());
    $('#hotelfax').text(window.myglobal.getHotelFax());
    $('#copyright').html(window.myglobal.getCopyright());

    $('.hotelphone').text(window.myglobal.getHotelPhone());
    $('.hotelfax').text(window.myglobal.getHotelFax());
    $('.copyright').html(window.myglobal.getCopyright());
    $('.copyright2').html(window.myglobal.getCopyright2());

    var init = function(currentPage) {
            initTooltipPopover();
            checkMenuMinimize();
        },

        initTooltipPopover = function() {
            $('[data-toggle="tooltip"]').tooltip();
            $('[data-toggle="popover"]').popover();
        },

        checkNavbarCollapse = function() {
            if ($(window).width() > 760) {
                // Still having an issue here which is FOC when toggle collapse
                if ($('.navbar-collapse').attr('class')=='navbar-collapse collapse in')
                    $('.navbar-collapse').collapse('hide');
            }
        },

        checkMenuMinimize = function() {
            if ($(window).width() > 1100)
                $('.vertical-header').removeClass('resize');
            else
                $('.vertical-header').addClass('resize');
        };

    init(location.href.split('/').pop());

    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > '50')
            $('.vertical-header').addClass('sticky');
        else
            $('.vertical-header').removeClass('sticky');
    });

    $(window).bind('resize', function() {
        checkNavbarCollapse();
        checkMenuMinimize();
    });

    $('.open-menu').on('click', function(evt) {
        $('.vertical-header').toggleClass('show animated bounceInLeft');
    });
});
