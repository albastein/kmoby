$(document).ready(function () {

    // Alerts
    $('.chocon').hide();

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

    let sowlr = $('.samsung-carousel');
    sowlr.find('.owl-item').addClass('sowlr-item');

    sowlr.find('.sowlr-item').each(function (index) {
        $(this).attr('data-position', index); // NB: .attr() instead of .data()
    });

    $(document).on('click', '.sowlr-item', function () {
        sowlr.trigger('to.owl.carousel', [$(this).data('position'), 500, true]);
    });

    let howlr = $('.huawei-carousel');
    howlr.find('.owl-item').addClass('howlr-item');

    howlr.find('.howlr-item').each(function (index) {
        $(this).attr('data-position', index); // NB: .attr() instead of .data()
    });

    $(document).on('click', '.howlr-item', function () {
        howlr.trigger('to.owl.carousel', [$(this).data('position'), 500, true]);
    });

    let iowlr = $('.iphone-carousel');
    iowlr.find('.owl-item').addClass('iowlr-item');

    iowlr.find('.iowlr-item').each(function (index) {
        $(this).attr('data-position', index); // NB: .attr() instead of .data()
    });

    $(document).on('click', '.iowlr-item', function () {
        iowlr.trigger('to.owl.carousel', [$(this).data('position'), 500, true]);
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

    sowlr.find('.sowlr-item').first().click(function () {
        sowlr.find('.owl-prev').hide();
    });

    sowlr.find('.sowlr-item').last().click(function () {
        sowlr.find('.owl-next').hide();
    });

    howlr.find('.howlr-item').first().click(function () {
        howlr.find('.owl-prev').hide();
    });

    howlr.find('.howlr-item').last().click(function () {
        howlr.find('.owl-next').hide();
    });

    iowlr.find('.iowlr-item').first().click(function () {
        iowlr.find('.owl-prev').hide();
    });

    iowlr.find('.iowlr-item').last().click(function () {
        iowlr.find('.owl-next').hide();
    });

    $('.samsung-logo').click(function () {
        $('.chobra').hide();
        $('.chocon').fadeIn(3000);
        $('.ws-brand').removeClass('active-ws');
        $('.brandl').removeClass('active-logo');
        $(this).parent().addClass('active-logo');
        if ($('.carous1').find('.samsung-carousel').length) {
            $('.carous1').find('.owl-carousel').hide();
            $('.carous1').find('.samsung-carousel').fadeIn('slow');
        } else {
            if ($('.carous1').find('.owl-carousel').length) {
                $('.carous1').find('.owl-carousel').hide();
                $('.samsung-carousel').appendTo('.carous1');
                $('.carous1').find('.samsung-carousel').fadeIn('slow');
            } else {
                $('.samsung-carousel').appendTo('.carous1');
                $('.carous1').fadeIn('slow');
            }
        }
    });

    $('.huawei-logo').click(function () {
        $('.chobra').hide();
        $('.chocon').fadeIn(3000);
        $('.ws-brand').removeClass('active-ws');
        $('.brandl').removeClass('active-logo');
        $(this).parent().addClass('active-logo');
        if ($('.carous1').find('.huawei-carousel').length) {
            $('.carous1').find('.owl-carousel').hide();
            $('.carous1').find('.huawei-carousel').fadeIn('slow');
        } else {
            if ($('.carous1').find('.owl-carousel').length) {
                $('.carous1').find('.owl-carousel').hide();
                $('.huawei-carousel').appendTo('.carous1');
                $('.carous1').find('.huawei-carousel').fadeIn('slow');
            } else {
                $('.huawei-carousel').appendTo('.carous1');
                $('.carous1').fadeIn('slow');
            }
        }
    });

    $('.iphone-logo').click(function () {
        $('.chobra').hide();
        $('.chocon').fadeIn(3000);
        $('.ws-brand').removeClass('active-ws');
        $('.brandl').removeClass('active-logo');
        $(this).parent().addClass('active-logo');
        if ($('.carous1').find('.iphone-carousel').length) {
            $('.carous1').find('.owl-carousel').hide();
            $('.carous1').find('.iphone-carousel').fadeIn('slow');
        } else {
            if ($('.carous1').find('.owl-carousel').length) {
                $('.carous1').find('.owl-carousel').hide();
                $('.iphone-carousel').appendTo('.carous1');
                $('.carous1').find('.iphone-carousel').fadeIn('slow');
            } else {
                $('.iphone-carousel').appendTo('.carous1');
                $('.carous1').fadeIn('slow');
            }
        }
    });

    $('.owl-item').click(function () {
        $('.ws-brand').removeClass('active-ws');
        $(this).parents('.owl-carousel').find('.active').removeClass('active');
        $(this).parents('.selmod').removeClass('selmod');
        if (!$(this).children('.mod').hasClass('active')) {
            $(this).parents('.owl-carousel').find('.active').removeClass('active');
            $(this).find('.mod').addClass('active');
        }
    });

    $('.owl-next').click(function () {
        $('.ws-brand').removeClass('active-ws');
        let activeel = $(this).parents('.owl-carousel').find('.active');
        activeel.parents('.owl-item').addClass('selmod');
        activeel.removeClass('active');
        $('.selmod').next('.owl-item').find('.mod').addClass('active');
        if ($('.selmod').next('.owl-item').next('.owl-item').length && $('.selmod').next('.owl-item').length) {
            $('.selmod').removeClass('selmod');
        } else {
            $(this).parents('.owl-carousel').find('.owl-item').last().prev().removeClass('selmod').find('.active').removeClass('active');
            $(this).hide();
            $(this).prev().show();
        }
    });

    $('.owl-prev').click(function () {
        $('.ws-brand').removeClass('active-ws');
        let activeel = $(this).parents('.owl-carousel').find('.active');
        activeel.parents('.owl-item').addClass('selmod');
        activeel.removeClass('active');
        $('.selmod').prev('.owl-item').find('.mod').addClass('active');
        if ($('.selmod').prev('.owl-item').prev('.owl-item').length && $('.selmod').prev('.owl-item').length) {
            $('.selmod').removeClass('selmod');
        } else {
            $(this).parents('.owl-carousel').find('.owl-item').first().next().removeClass('selmod').find('.active').removeClass('active');
            $(this).hide();
            $(this).next().show();
        }
    });

    /* working-status-active */

    $('.ws-brand').click(function () {
        if (!$('.active-logo').length) {
            $('.chobra').fadeIn(3000);
        }
        $('.chocon').hide();
        $('.ws-brand').removeClass('active-ws');
        $(this).addClass('active-ws');
    });

});