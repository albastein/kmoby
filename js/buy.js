$(document).ready(function () {

    // Alerts
    $('.chocon').hide();
    $('.chomod').hide();
    $('.working-status').hide();

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

    function owlDetach() {
        $('.working-status').hide();
        $('.chobra').hide();
        $('.chocon').hide();
        $('.sendvals').empty();
        $('.chomod').fadeIn(3000);
        $('.ws-brand').removeClass('active-ws');
        $('.owl-carousel').find('.active').removeClass('active');

        let activeLogo = $('.active-logo').data('value');

        if ($('.carous1').find('.samsung-carousel').length) {
            sol = $('.carous1').find('.samsung-carousel').detach();
        } else if ($('.carous1').find('.huawei-carousel').length) {
            hol = $('.carous1').find('.huawei-carousel').detach();
        } else if ($('.carous1').find('.iphone-carousel').length) {
            iol = $('.carous1').find('.iphone-carousel').detach();
        };
        if (activeLogo == "samsung") {
            if (sol) {
                sol.appendTo('.carous1');
                sol = null;
            } else {
                $('.samsung-carousel').appendTo('.carous1');
            }
        } else if (activeLogo == "huawei") {
            if (hol) {
                hol.appendTo('.carous1');
                hol = null;
            } else {
                $('.huawei-carousel').appendTo('.carous1');
            }
        } else if (activeLogo == "iphone") {
            if (iol) {
                iol.appendTo('.carous1');
                iol = null;
            } else {
                $('.iphone-carousel').appendTo('.carous1');
            }
        };
        $('.carous1').fadeIn('slow');
    };

    let sol, hol, iol;

    $('.samsung-logo').click(function () {
        $('.brandl').removeClass('active-logo');
        $(this).parent().addClass('active-logo');
        $('.carous1').hide();
        owlDetach();
    });

    $('.huawei-logo').click(function () {
        $('.brandl').removeClass('active-logo');
        $(this).parent().addClass('active-logo');
        $('.carous1').hide();
        owlDetach();
    });

    $('.iphone-logo').click(function () {
        $('.brandl').removeClass('active-logo');
        $(this).parent().addClass('active-logo');
        $('.carous1').hide();
        owlDetach();
    });

    $('.owl-item').click(function () {
        $('.working-status').fadeIn(400);
        $('.chobra').hide();
        $('.chomod').hide();
        $('.sendvals').empty();
        $('.chocon').fadeIn(3000);
        $('.ws-brand').removeClass('active-ws');
        $('.owl-carousel').find('.active').removeClass('active');
        $(this).parents('.selmod').removeClass('selmod');
        if (!$(this).children('.mod').hasClass('active')) {
            $('.owl-carousel').find('.active').removeClass('active');
            $(this).find('.mod').addClass('active');
        }
    });

    $('.owl-next').click(function () {
        // No need to reveal the choose condition alert as the user will have understood it
        // All reasons for the revealing of the alerts have been identified and handled
        $('.ws-brand').removeClass('active-ws');
        let activeel = $('.owl-carousel').find('.active');
        activeel.parents('.owl-item').addClass('selmod');
        activeel.removeClass('active');
        $('.selmod').next('.owl-item').find('.mod').addClass('active');
        if ($('.selmod').next('.owl-item').next('.owl-item').length && $('.selmod').next('.owl-item').length) {
            $('.selmod').removeClass('selmod');
        } else {
            $('.owl-carousel').find('.owl-item').last().prev().removeClass('selmod').find('.active').removeClass('active');
            if ($('.active').length) {
                $(this).hide();
            }
            $(this).prev().show();
        }
    });

    $('.owl-prev').click(function () {
        // No need to reveal the choose condition alert as the user will have understood it
        // All reasons for the revealing of the alerts have been identified and handled
        $('.active').parents('.owl-item').prev().removeClass('selmod').find('.active').removeClass('active');
        $('.ws-brand').removeClass('active-ws');
        let activeel = $('.owl-carousel').find('.active');
        activeel.parents('.owl-item').addClass('selmod');
        activeel.removeClass('active');
        $('.selmod').prev('.owl-item').find('.mod').addClass('active');
        if ($('.selmod').prev('.owl-item').prev('.owl-item').length && $('.selmod').prev('.owl-item').length) {
            $('.selmod').removeClass('selmod');
        } else {
            $('.owl-carousel').find('.owl-item').first().next().removeClass('selmod').find('.active').removeClass('active');
            if ($('.active').length) {
                $(this).hide();
            }
            $(this).next().show();
        }
    });

    /* working-status-active */

    $('.ws-brand').click(function () {
        $('.chocon').hide();
        $('.ws-brand').removeClass('active-ws');
        $(this).addClass('active-ws');
        let logoVal = $('.active-logo').data('value');
        let modelVal = $('.owl-carousel').find('.active').data('value');
        let stateVal = $('.active-ws').data('value');

        if (logoVal == null || modelVal == null || stateVal == null) {
            alert('Sorry :( there was an error finding the data, please reselect.');
            $('.working-status').hide();
            $('.carous1').hide();
            $('.chomod').hide();
            $('.chocon').hide();
            if ($('.sendvals').html().length > 0) {
                $('.sendvals').empty();
            }
            $('.chobra').fadeIn(3000);
            $('.ws-brand').removeClass('active-ws');
            $('.brandl').removeClass('active-logo');
            $('.owl-carousel').find('.active').removeClass('active');
        } else {

            if (logoVal === "samsung" && stateVal === "brand-new") {
                let tableName = "new_samsungs";
                let phoneModel = modelVal;
                let workStatus = "brand_new";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                });
            } else if (logoVal === "huawei" && stateVal === "brand-new") {
                let tableName = "new_huaweis";
                let phoneModel = modelVal;
                let workStatus = "brand_new";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                });
            } else if (logoVal === "iphone" && stateVal === "brand-new") {
                let tableName = "new_iphones";
                let phoneModel = modelVal;
                let workStatus = "brand_new";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                });
            } else if (logoVal === "samsung" && stateVal === "used") {
                let tableName = "used_samsungs";
                let phoneModel = modelVal;
                let workStatus = "used";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                });
            } else if (logoVal === "huawei" && stateVal === "used") {
                let tableName = "used_huaweis";
                let phoneModel = modelVal;
                let workStatus = "used";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                });
            } else if (logoVal === "iphone" && stateVal === "used") {
                let tableName = "used_iphones";
                let phoneModel = modelVal;
                let workStatus = "used";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                });
            } else if (logoVal === "samsung" && stateVal === "excellent") {
                let tableName = "used_samsungs";
                let phoneModel = modelVal;
                let workStatus = "excellent";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                });
            } else if (logoVal === "huawei" && stateVal === "excellent") {
                let tableName = "used_huaweis";
                let phoneModel = modelVal;
                let workStatus = "excellent";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                });
            } else if (logoVal === "iphone" && stateVal === "excellent") {
                let tableName = "used_iphones";
                let phoneModel = modelVal;
                let workStatus = "excellent";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                });
            } else if (logoVal === "samsung" && stateVal === "good") {
                let tableName = "used_samsungs";
                let phoneModel = modelVal;
                let workStatus = "good";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                });
            } else if (logoVal === "huawei" && stateVal === "good") {
                let tableName = "used_huaweis";
                let phoneModel = modelVal;
                let workStatus = "good";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                });
            } else if (logoVal === "iphone" && stateVal === "good") {
                let tableName = "used_iphones";
                let phoneModel = modelVal;
                let workStatus = "good";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                });
            } else if (logoVal === "samsung" && stateVal === "damaged") {
                let tableName = "used_samsungs";
                let phoneModel = modelVal;
                let workStatus = "damaged";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                });
            } else if (logoVal === "huawei" && stateVal === "damaged") {
                let tableName = "used_huaweis";
                let phoneModel = modelVal;
                let workStatus = "damaged";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                });
            } else if (logoVal === "iphone" && stateVal === "damaged") {
                let tableName = "used_iphones";
                let phoneModel = modelVal;
                let workStatus = "damaged";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                });
            }
        }
    });

    $('.ph-buy').click(function () {
        alert('testing');
    });
});