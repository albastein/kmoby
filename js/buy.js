$(document).ready(function () {

    // Model carousel
    let hucar = $('.huawei-carousel');
    let ipcar = $('.iphone-carousel');
    let sacar = $('.samsung-carousel');

    sacar.owlCarousel({
        center: true,
        nav: true,
        navSpeed: 700,
        navText: ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>', '<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
        responsive: {
            0: {
                items: 1
            },
            200: {
                items: 3
            },
            600: {
                items: 5
            },
            1000: {
                items: 9
            }
        }
    });

    ipcar.owlCarousel({
        center: true,
        nav: true,
        navSpeed: 700,
        navText: ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>', '<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
        responsive: {
            0: {
                items: 1
            },
            200: {
                items: 3
            },
            600: {
                items: 5
            },
            1000: {
                items: 9
            }
        }
    });

    hucar.owlCarousel({
        center: true,
        nav: true,
        navSpeed: 700,
        navText: ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>', '<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
        responsive: {
            0: {
                items: 1
            },
            200: {
                items: 3
            },
            600: {
                items: 5
            },
            1000: {
                items: 9
            }
        }
    });

    $('.carous,.carous1').hide();

    $('.owl-nav').hide();
    $('.owl-carousel')
        .mouseover(function () {
            $('.owl-nav').show();
        });

    if ($('.owl-carousel').find('.owl-item').first().find('.active') || $('.owl-carousel').find('.owl-item').last().find('.active')) {
        $('.owl-nav').find('.owl-prev').hide();
    }

    $('.samsung-logo').click(function () {
        if ($('.carous1').find('.samsung-carousel').length) {
            $('.carous1').find('.owl-carousel').hide();
            $('.carous1').find('.samsung-carousel').show();
        } else {
            if ($('.carous1').find('.owl-carousel').length) {
                $('.carous1').find('.owl-carousel').hide();
                $('.samsung-carousel').appendTo('.carous1');
                $('.carous1').find('.samsung-carousel').show();
            } else {
                $('.samsung-carousel').appendTo('.carous1');
                $('.carous1').slideDown('slow');
            }
        }
    });

    $('.huawei-logo').click(function () {
        if ($('.carous1').find('.huawei-carousel').length) {
            $('.carous1').find('.owl-carousel').hide();
            $('.carous1').find('.huawei-carousel').show();
        } else {
            if ($('.carous1').find('.owl-carousel').length) {
                $('.carous1').find('.owl-carousel').hide();
                $('.huawei-carousel').appendTo('.carous1');
                $('.carous1').find('.huawei-carousel').show();
            } else {
                $('.huawei-carousel').appendTo('.carous1');
                $('.carous1').slideDown('slow');
            }
        }
    });

    $('.iphone-logo').click(function () {
        if ($('.carous1').find('.iphone-carousel').length) {
            $('.carous1').find('.owl-carousel').hide();
            $('.carous1').find('.iphone-carousel').show();
        } else {
            if ($('.carous1').find('.owl-carousel').length) {
                $('.carous1').find('.owl-carousel').hide();
                $('.iphone-carousel').appendTo('.carous1');
                $('.carous1').find('.iphone-carousel').show();
            } else {
                $('.iphone-carousel').appendTo('.carous1');
                $('.carous1').slideDown('slow');
            }
        }
    });

    $('.owl-item').click(function () {
        $(this).parents('.owl-carousel').find('.active').removeClass('active');
        $(this).parents('.selmod').removeClass('selmod');
        if (!$(this).children('.mod').hasClass('active')) {
            $(this).parents('.owl-carousel').find('.active').removeClass('active');
            $(this).find('.mod').addClass('active');
        }
    });

    $('.owl-next').click(function () {
        let activeel = $(this).parents('.owl-carousel').find('.active');
        activeel.parents('.owl-item').addClass('selmod');
        activeel.removeClass('active');
        $('.selmod').next('.owl-item').find('.mod').addClass('active');
        if ($('.selmod').next('.owl-item').next('.owl-item').length && $('.selmod').next('.owl-item').length) {
            $('.selmod').removeClass('selmod');
        } else {
            $(this).parents('.owl-carousel').find('.owl-item').last().prev().removeClass('selmod').find('.active').removeClass('active');
            $(this).hide();
            $('.owl-prev').show();
        }
    });

    $('.owl-prev').click(function () {
        let activeel = $(this).parents('.owl-carousel').find('.active');
        activeel.parents('.owl-item').addClass('selmod');
        activeel.removeClass('active');
        $('.selmod').prev('.owl-item').find('.mod').addClass('active');
        if ($('.selmod').prev('.owl-item').prev('.owl-item').length && $('.selmod').prev('.owl-item').length) {
            $('.selmod').removeClass('selmod');
        } else {
            $(this).parents('.owl-carousel').find('.owl-item').first().next().removeClass('selmod').find('.active').removeClass('active');
            $(this).hide();
            $('.owl-next').show();
        }
    });

});