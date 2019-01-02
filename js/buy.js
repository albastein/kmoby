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

    function onDeviceLoad() {
        // When the user clicks on the button, open the modal 
        $('.ph-buy').click(function () {

            let brand = $('.brand-dph').data('detail');
            let model = $('.model-dph').data('detail');
            let color = $(this).parents('.card-box').find('.elcolor').data('color');
            let dprice = $(this).parents('.card-box').find('.eldprice').data('price');
            let mprice = $(this).parents('.card-box').find('.elmprice').data('price');
            let network = $('.network-dph').data('detail');
            let dtype = $('.dtype-dph').data('detail');
            let dsize = $('.dsize-dph').data('detail');
            let resolution = $('.resolution-dph').data('detail');
            let os = $('.os-dph').data('detail');
            let cpu = $('.cpu-dph').data('detail');
            let memory = $('.memory-dph').data('detail');
            let ram = $('.ram-dph').data('detail');
            let maincam = $('.maincam-dph').data('detail');
            let selfie = $('.selfie-dph').data('detail');
            let comms = $('.comms-dph').data('detail');
            let sensors = $('.sensors-dph').data('detail');
            let battery = $('.battery-dph').data('detail');

            $('.brand-ph').text('N/A');
            $('.model-ph').text('N/A');
            $('.color-ph').text('N/A');
            $('.discount-ph').text('N/A');
            $('.price-ph').text('N/A');
            $('.network-ph').text('N/A');
            $('.dtype-ph').text('N/A');
            $('.dsize-ph').text('N/A');
            $('.resolution-ph').text('N/A');
            $('.os-ph').text('N/A');
            $('.cpu-ph').text('N/A');
            $('.memory-ph').text('N/A');
            $('.ram-ph').text('N/A');
            $('.maincam-ph').text('N/A');
            $('.selfie-ph').text('N/A');
            $('.comms-ph').text('N/A');
            $('.sensors-ph').text('N/A');
            $('.battery-ph').text('N/A');


            $('.brand-ph').text(brand);
            $('.model-ph').text(model);
            $('.color-ph').text(color);
            $('.discount-ph').text(dprice);
            $('.price-ph').text(mprice);
            $('.network-ph').text(network);
            $('.dtype-ph').text(dtype);
            $('.dsize-ph').text(dsize);
            $('.resolution-ph').text(resolution);
            $('.os-ph').text(os);
            $('.cpu-ph').text(cpu);
            $('.memory-ph').text(memory);
            $('.ram-ph').text(ram);
            $('.maincam-ph').text(maincam);
            $('.selfie-ph').text(selfie);
            $('.comms-ph').text(comms);
            $('.sensors-ph').text(sensors);
            $('.battery-ph').text(battery);

            $('.img-dec')
                .attr('src', 'images/phones/' + brand + '/' + model + '.png')
                .height(400);
            $('.col-dec')
                .attr('src', 'images/colors/' + color + '.svg')
                .height(50);

            $('.buyModal').css({
                'display': 'block'
            });
            $('body').css({
                'overflow': 'hidden'
            });
        });
    };

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
                }, function () {
                    onDeviceLoad();
                });
            } else if (logoVal === "huawei" && stateVal === "brand-new") {
                let tableName = "new_huaweis";
                let phoneModel = modelVal;
                let workStatus = "brand_new";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                }, function () {
                    onDeviceLoad();
                });
            } else if (logoVal === "iphone" && stateVal === "brand-new") {
                let tableName = "new_iphones";
                let phoneModel = modelVal;
                let workStatus = "brand_new";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                }, function () {
                    onDeviceLoad();
                });
            } else if (logoVal === "samsung" && stateVal === "used") {
                let tableName = "used_samsungs";
                let phoneModel = modelVal;
                let workStatus = "used";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                }, function () {
                    onDeviceLoad();
                });
            } else if (logoVal === "huawei" && stateVal === "used") {
                let tableName = "used_huaweis";
                let phoneModel = modelVal;
                let workStatus = "used";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                }, function () {
                    onDeviceLoad();
                });
            } else if (logoVal === "iphone" && stateVal === "used") {
                let tableName = "used_iphones";
                let phoneModel = modelVal;
                let workStatus = "used";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                }, function () {
                    onDeviceLoad();
                });
            } else if (logoVal === "samsung" && stateVal === "excellent") {
                let tableName = "used_samsungs";
                let phoneModel = modelVal;
                let workStatus = "excellent";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                }, function () {
                    onDeviceLoad();
                });
            } else if (logoVal === "huawei" && stateVal === "excellent") {
                let tableName = "used_huaweis";
                let phoneModel = modelVal;
                let workStatus = "excellent";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                }, function () {
                    onDeviceLoad();
                });
            } else if (logoVal === "iphone" && stateVal === "excellent") {
                let tableName = "used_iphones";
                let phoneModel = modelVal;
                let workStatus = "excellent";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                }, function () {
                    onDeviceLoad();
                });
            } else if (logoVal === "samsung" && stateVal === "good") {
                let tableName = "used_samsungs";
                let phoneModel = modelVal;
                let workStatus = "good";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                }, function () {
                    onDeviceLoad();
                });
            } else if (logoVal === "huawei" && stateVal === "good") {
                let tableName = "used_huaweis";
                let phoneModel = modelVal;
                let workStatus = "good";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                }, function () {
                    onDeviceLoad();
                });
            } else if (logoVal === "iphone" && stateVal === "good") {
                let tableName = "used_iphones";
                let phoneModel = modelVal;
                let workStatus = "good";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                }, function () {
                    onDeviceLoad();
                });
            } else if (logoVal === "samsung" && stateVal === "damaged") {
                let tableName = "used_samsungs";
                let phoneModel = modelVal;
                let workStatus = "damaged";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                }, function () {
                    onDeviceLoad();
                });
            } else if (logoVal === "huawei" && stateVal === "damaged") {
                let tableName = "used_huaweis";
                let phoneModel = modelVal;
                let workStatus = "damaged";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                }, function () {
                    onDeviceLoad();
                });
            } else if (logoVal === "iphone" && stateVal === "damaged") {
                let tableName = "used_iphones";
                let phoneModel = modelVal;
                let workStatus = "damaged";
                $(".sendvals").load("buy.php", {
                    'table_name': tableName,
                    'phone_model': phoneModel,
                    'working_status': workStatus
                }, function () {
                    onDeviceLoad();
                });
            }
        }
    });

    // progress bar seeker
    var $point_arr, $points, $progress, $trigger, active, max, tracker, val;

    $trigger = $('.trigger').first();
    $points = $('.progress-points').first();
    $point_arr = $('.progress-point');
    $progress = $('.progress').first();

    val = +$points.data('current') - 1;
    max = $point_arr.length - 1;
    tracker = active = 0;

    function activate(index) {
        if (index !== active) {
            active = index;
            var $_active = $point_arr.eq(active);

            $point_arr
                .removeClass('completed active')
                .slice(0, active).addClass('completed');

            $_active.addClass('active');

            return $progress.css('width', (index / max * 100) + "%");
        }
    };

    setTimeout((function () {
        return activate(val);
    }), 1000);

    // Progress Bar Seeker End   

    $('.dtls-next').click(function () {
        $('.ph-details').hide();
        $('.contacts').fadeIn(800);
        var _index;
        _index = 1;
        tracker = _index === 0 ? 1 : _index === val ? 0 : tracker;

        return activate(_index);
    });

    $('.con-prev').click(function () {
        $('.contacts').hide();
        $('.ph-details').fadeIn(800);
        var _index;
        _index = 0;
        tracker = _index === 0 ? 1 : _index === val ? 0 : tracker;

        return activate(_index);
    });

    $('.con-next').click(function () {
        $('.contacts').hide();
        $('.thanks-for-order').fadeIn(800);
        var _index;
        _index = 2;
        tracker = _index === 0 ? 1 : _index === val ? 0 : tracker;

        return activate(_index);
    });

    // When the user clicks on <span> (x), close the modal
    $('.modClose').click(function () {
        $('.contacts, .thanks-for-order').hide();
        $('.ph-details').fadeIn(800);
        $('.buyModal').css('display', 'none');
        $('body').css({
            'overflow': 'scroll',
            'overflow-x': 'hidden'
        });
        var _index;
        _index = 0;
        tracker = _index === 0 ? 1 : _index === val ? 0 : tracker;

        return activate(_index);
    });

    // When the user clicks anywhere outside of the modal, close it
    $('.buyModal').click(function (e) {
        if (e.target.className == 'buyModal') {
            $('.contacts, .thanks-for-order').hide();
            $('.ph-details').fadeIn(800);
            $(this).css('display', 'none');
            $('body').css({
                'overflow': 'scroll',
                'overflow-x': 'hidden'
            });
            var _index;
            _index = 0;
            tracker = _index === 0 ? 1 : _index === val ? 0 : tracker;

            return activate(_index);
        }
    });
});