$(document).ready(function() {
    $('.navbar-nav .nav-item .nav-link').click(function(e) {
        e.preventDefault();
        var pageId = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(pageId).offset().top - 80 }, 1000);
        // $('html,body').animate({
        //     scrollTop: $(this.hash).offset().top - 80
        // }, 1000);
        $('.navbar-nav .nav-item .nav-link').removeClass('active');
        $(this).addClass('active');

    });
});

jQuery(document).on("scroll", function() {
    if (jQuery(document).scrollTop() > 100) {
        jQuery(".nav-link").removeClass("bottom").addClass("top");
    } else {
        jQuery(".nav-link").removeClass("top").addClass("bottom");
    }
});

jQuery(document).ready(function() {
    var quote = jQuery('.quote');
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quote.eq(quoteIndex % quote.length)
            .fadeIn(2000)
            .delay(1000)
            .fadeOut(2000, showNextQuote);
    }
    showNextQuote();
});

jQuery(function() {
    jQuery('.link-service').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {

                jQuery('html,body').animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
                return false;
            }
        }
    });
})

$(document).ready(function() {
    $(".mixture .nav-tabs li").click(function() {
        $('.mixture .nav-tabs li').removeClass('active');
        $(this).addClass('active');
        $(".element .tabs-content .tabs-pane").removeClass('active');
        $('#' + $(this).data('id')).addClass('active');
    });
});

$(document).ready(function() {
    $(".tabs .nav li").find(".tabs-icon").css("transition", "transform 500ms ease-in-out");
    $(".tabs .nav li").hover(
        function() {
            $(this).find(".tabs-icon").css("transform", "rotate(360deg) scale(0.5)");
        },
        function() {
            $(this).find(".tabs-icon").css("transform", "rotate(0deg) scale(1)");
        }
    );
});

$(function() {
    $('.panel .panel-body .btn').click(function() {
        $('.panel .panel-body .btn').removeClass('active');
        $(this).addClass('active');
        $('.panel .collapse').hide();
        if ($($(this).attr('href')).hasClass('active')) {
            $('.panel .collapse').removeClass('active');
        } else {
            $($(this).attr('href')).slideDown('1000');
            $($(this).attr('href')).addClass('active');
        }
    })
})

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        margin: 20,
        dotsEach: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            576: {
                items: 2,
                nav: false
            },
            768: {
                items: 3,
                nav: false,
            },
            992: {
                items: 4,
                nav: false,
            }

        }
    });
})

$(document).ready(function() {
    $('.list-item').click(function() {
        let value = $(this).attr('data-filter');
        if (value == "all") {
            $('.images-item').show(1000);
        } else {
            $('.images-item').not('.' + value).hide(1000);
            $('.images-item').filter('.' + value).show(1000);
        }
        $('.list-item').removeClass('active');
        $(this).addClass('active');
    })
})

$(document).ready(function() {
    $('.images-group').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,

            preload: [0, 2],

            navigateByImgClick: true,

            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',

            tPrev: 'Previous (Left arrow key)',
            tNext: 'Next (Right arrow key)',
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
        },
        mainClass: 'mfp-with-zoom',

        zoom: {
            enabled: true,

            duration: 300,
            easing: 'ease-in-out',
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
})

$(document).ready(function() {
    $('.beacon-circle2').hover(function() {
        $(this).prev('.beacon-circle1').css('transform', 'scale(1.1)');
        $(this).prev('.beacon-circle1').fadeOut(1000);
    }, function() {
        $(this).prev('.beacon-circle1').fadeIn();
    });
});

jQuery(function() {
    jQuery('.footer-quote .description:first-child').show();

    setInterval(function() {
        jQuery('.footer-quote .description:first-child').fadeOut().next('.description').fadeIn(5000).delay(2000).end().appendTo('.footer-quote')
    }, 5000);
})

$(document).ready(function() {
    $("#face").mouseover(function() {
        $(this).attr("src", "../images/icon-facebook-hover.png");
    });

    $("#face").mouseout(function() {
        $(this).attr("src", "../images/icon-facebook.png");
    });
});

$(document).ready(function() {
    $("#rss").mouseover(function() {
        $(this).attr("src", "../images/icon-rss-hover.png");
    });

    $("#rss").mouseout(function() {
        $(this).attr("src", "../images/icon-rss.png");
    });
});

$(document).ready(function() {
    $("#twitter").mouseover(function() {
        $(this).attr("src", "../images/icon-twitter-hover.png");
    });

    $("#twitter").mouseout(function() {
        $(this).attr("src", "../images/icon-twitter.png");
    });
});

$(document).ready(function() {
    $("#google").mouseover(function() {
        $(this).attr("src", "../images/icon-google-plus-hover.png");
    });

    $("#google").mouseout(function() {
        $(this).attr("src", "../images/icon-google-plus.png");
    });
});