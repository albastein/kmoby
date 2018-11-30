// Fix for bootstrap tooltips, sometimes they are left in the DOM when they shouldn't be.
$('body').on('hidden.bs.tooltip', function() {
    var tooltips = $('.tooltip').not('.in');
    if (tooltips) {
        tooltips.remove();
    }
});

function scroll_to_class(element_class, removed_height) {
    var scroll_to = $(element_class).offset().top - removed_height;
    if ($(window).scrollTop() != scroll_to) {
        $('html, body').stop().animate({ scrollTop: scroll_to }, 0);
    }
}

function bar_progress(progress_line_object, direction) {
    var number_of_steps = progress_line_object.data('number-of-steps');
    var now_value = progress_line_object.data('now-value');
    var new_value = 0;
    if (direction == 'right') {
        new_value = now_value + (100 / number_of_steps);
    } else if (direction == 'left') {
        new_value = now_value - (100 / number_of_steps);
    }
    progress_line_object.attr('style', 'width: ' + new_value + '%;').data('now-value', new_value);
}

jQuery(document).ready(function() {

    $('form fieldset:first').fadeIn('slow');

    // Step 1 (brand) Next button

    $('form .brand-btn-next').on('click', function() {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;
        var current_active_step = $('form').find('.form-wizard.active');
        var progress_line = $('form').find('.progress-line');
        var brand = document.getElementById("buy-wiz").elements["brand"];
        var brand_value = brand.value;

        // Validation
        if (brand_value == "") {
            $('.brand-btn-next').popover('enable');
            $('.brand-btn-next').popover('show');
            $('.brand-btn-next').on('shown.bs.popover', function() {
                var $pop = $(this);
                setTimeout(function() {
                    $pop.popover('hide');
                }, 2000);
                setTimeout(function() {
                    $pop.popover();
                }, 2200);
            });

            next_step = false;
        } else {
            $('.brand-btn-next').popover('hide');
            $('.brand-btn-next').popover('disable');
        }

        if (next_step) {
            if (brand_value == 'huawei') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.model-huawei').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (brand_value == 'iphone') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.model-iphone').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (brand_value == 'samsung') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.model-samsung').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            }

        }
    });

    /* Step 2 (model) buttons */
    // Previous

    $('form .model-btn-previous').on('click', function() {
        var parent_fieldset = $(this).parents('fieldset');
        var model_rdb = document.getElementById("buy-wiz").elements["model"];
        var brand_rdb = document.getElementById("buy-wiz").elements["brand"];
        var current_active_step = $('form').find('.form-wizard.active');
        var progress_line = $('form').find('.progress-line');

        /*
        var brand = document.getElementById("buy-wiz").elements["brand"];
        var brand_value = brand.value;
        */

        $(brand_rdb).prop('checked', false);
        $('.image-radio-checked').removeClass('image-radio-checked');

        parent_fieldset.fadeOut(200, function() {
            current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
            bar_progress(progress_line, 'left');
            $(this).prevAll('.all-brands').fadeIn();
            scroll_to_class($('form'), 20);
            $(model_rdb).prop('checked', false);
            parent_fieldset.find('.mbf-checked').removeClass('mbf-checked');
        });
    });

    // Huawei models next button
    $('form .hmodel-btn-next').on('click', function() {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;
        var current_active_step = $('form').find('.form-wizard.active');
        var progress_line = $('form').find('.progress-line');
        var model = document.getElementById("buy-wiz").elements["model"];
        var model_value = model.value;

        // Validation
        $('.hmodel-btn-next').popover({
            container: 'body',
            content: 'Please select a model',
            placement: 'top'
        });

        if (model_value == "") {
            $('.hmodel-btn-next').popover('enable');
            $('.hmodel-btn-next').popover('show');
            $('.hmodel-btn-next').on('shown.bs.popover', function() {
                var $pop = $(this);
                setTimeout(function() {
                    $pop.popover('hide');
                }, 2000);
                setTimeout(function() {
                    $pop.popover();
                }, 2200);
            });

            next_step = false;
        } else {
            $('.hmodel-btn-next').popover('hide');
            $('.hmodel-btn-next').popover('disable');
        }

        if (next_step) {

            // Huawei models

            if (model_value == 'Huawei P20 Pro') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hp20pro').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei P20') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hp20').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei P20 Lite') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hp20l').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei P10 Plus') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hp10p').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei P10') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hp10').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei P10 Lite') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hp10l').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei P9 Plus') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hp9p').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei P9') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hp9').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei P9 Lite') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hp9l').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei P8') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hp8').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei P8 Lite (2017)') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hp8l17').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei P8 Lite') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hp8l').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei Mate 10 Pro') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hm10p').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei Mate 10') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hm10').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei Mate 9') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hm9').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei Mate 8') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hm8').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Huawei P Smart') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-hps').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            }
        }
    });

    // iPhone models next button

    $('form .imodel-btn-next').on('click', function() {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;
        var current_active_step = $('form').find('.form-wizard.active');
        var progress_line = $('form').find('.progress-line');
        var model = document.getElementById("buy-wiz").elements["model"];
        var model_value = model.value;

        // Validation
        $('.imodel-btn-next').popover({
            container: 'body',
            content: 'Please select a model',
            placement: 'top'
        });

        if (model_value == "") {
            $('.imodel-btn-next').popover('enable');
            $('.imodel-btn-next').popover('show');
            $('.imodel-btn-next').on('shown.bs.popover', function() {
                var $pop = $(this);
                setTimeout(function() {
                    $pop.popover('hide');
                }, 2000);
                setTimeout(function() {
                    $pop.popover();
                }, 2200);
            });

            next_step = false;
        } else {
            $('.imodel-btn-next').popover('hide');
            $('.imodel-btn-next').popover('disable');
        }

        if (next_step) {

            // iPhone models
            if (model_value == 'iPhone XS Max') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ipxsm').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'iPhone XS') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ipxs').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'iPhone XR') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ipxr').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'iPhone X') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ipx').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'iPhone 8 plus') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ip8p').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'iPhone 8') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ip8').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'iPhone 7 plus') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ip7p').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'iPhone 7') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ip7').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'iPhone 6s plus') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ip6sp').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'iPhone 6 plus') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ip6p').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'iPhone 6s') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ip6s').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'iPhone 6') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ip6').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'iPhone 5s') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ip5s').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'iPhone 5c') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ip5c').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'iPhone SE') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ipse').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            }
        }
    });

    // Samsung models next button

    $('form .smodel-btn-next').on('click', function() {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;
        var current_active_step = $('form').find('.form-wizard.active');
        var progress_line = $('form').find('.progress-line');
        var model = document.getElementById("buy-wiz").elements["model"];
        var model_value = model.value;

        // Validation
        $('.smodel-btn-next').popover({
            container: 'body',
            content: 'Please select a model',
            placement: 'top'
        });

        if (model_value == "") {
            $('.smodel-btn-next').popover('enable');
            $('.smodel-btn-next').popover('show');
            $('.smodel-btn-next').on('shown.bs.popover', function() {
                var $pop = $(this);
                setTimeout(function() {
                    $pop.popover('hide');
                }, 2000);
                setTimeout(function() {
                    $pop.popover();
                }, 2200);
            });

            next_step = false;
        } else {
            $('.smodel-btn-next').popover('hide');
            $('.smodel-btn-next').popover('disable');
        }

        if (next_step) {

            // Samsung models
            if (model_value == 'Galaxy S9 Plus') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gs9p').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy S9') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gs9').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy S8 Plus') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gs8p').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy S8') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gs8').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy S7 Edge') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gs7e').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy S7') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gs7').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy S6 Edge Plus') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gs6ep').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy S6 Edge') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gs6e').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy S6') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gs6').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy S5') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gs5').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy Note 8') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gn8').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy Note 5') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gn5').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy Edge') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ge').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy Note 4') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gn4').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy A8 (2018)') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ga818').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy A7 (2017)') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ga717').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy A7 (2016)') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ga716').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy A7') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ga7').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy A5 (2017)') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ga517').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy A5 (2016)') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-ga516').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy J7 (2016)') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gj716').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy J7 Prime') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gj7p').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            } else if (model_value == 'Galaxy J5 Prime') {
                parent_fieldset.fadeOut(200, function() {
                    current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                    bar_progress(progress_line, 'right');
                    $(this).nextAll('.capacity-gj5p').fadeIn();
                    scroll_to_class($('form'), 20);
                });
            }
        }
    });

    /* Step 3 (capacity) buttons */
    // Previous
    // Huawei
    $('form .hc-btn-previous').on('click', function() {
        var parent_fieldset = $(this).parents('fieldset');
        var cap_rdb = document.getElementById("buy-wiz").elements["capacity"];
        var current_active_step = $('form').find('.form-wizard.active');
        var progress_line = $('form').find('.progress-line');
        var active_cnext = parent_fieldset.find('.capacity-btn-next');

        $('.vcapacity-btn-next').popover('hide');
        $('.vcapacity-btn-next').popover('disable');
        active_cnext.removeClass('vcapacity-btn-next');

        parent_fieldset.fadeOut(200, function() {
            current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
            bar_progress(progress_line, 'left');
            $(this).prevAll('.model-huawei').fadeIn();
            scroll_to_class($('form'), 20);
            $(cap_rdb).prop('checked', false);
            parent_fieldset.find('.cbf-checked').removeClass('cbf-checked');
        });
    });

    // iPhone
    $('form .ic-btn-previous').on('click', function() {
        var parent_fieldset = $(this).parents('fieldset');
        var cap_rdb = document.getElementById("buy-wiz").elements["capacity"];
        var current_active_step = $('form').find('.form-wizard.active');
        var progress_line = $('form').find('.progress-line');
        var active_cnext = parent_fieldset.find('.capacity-btn-next');

        $('.vcapacity-btn-next').popover('hide');
        $('.vcapacity-btn-next').popover('disable');
        active_cnext.removeClass('vcapacity-btn-next');

        parent_fieldset.fadeOut(200, function() {
            current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
            bar_progress(progress_line, 'left');
            $(this).prevAll('.model-iphone').fadeIn();
            scroll_to_class($('form'), 20);
            $(cap_rdb).prop('checked', false);
            parent_fieldset.find('.cbf-checked').removeClass('cbf-checked');
        });
    });

    // Samsung
    $('form .sc-btn-previous').on('click', function() {
        var parent_fieldset = $(this).parents('fieldset');
        var cap_rdb = document.getElementById("buy-wiz").elements["capacity"];
        var current_active_step = $('form').find('.form-wizard.active');
        var progress_line = $('form').find('.progress-line');
        var active_cnext = parent_fieldset.find('.capacity-btn-next');

        $('.vcapacity-btn-next').popover('hide');
        $('.vcapacity-btn-next').popover('disable');
        active_cnext.removeClass('vcapacity-btn-next');

        parent_fieldset.fadeOut(200, function() {
            current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
            bar_progress(progress_line, 'left');
            $(this).prevAll('.model-samsung').fadeIn();
            scroll_to_class($('form'), 20);
            $(cap_rdb).prop('checked', false);
            parent_fieldset.find('.cbf-checked').removeClass('cbf-checked');
        });
    });

    // next
    $('form .capacity-btn-next').on('click', function() {
        var parent_fieldset = $(this).parents('fieldset');
        var current_active_step = $('form').find('.form-wizard.active');
        var progress_line = $('form').find('.progress-line');
        var active_cnext = parent_fieldset.find('.capacity-btn-next');
        var capacity = document.getElementById("buy-wiz").elements["capacity"];
        var capacity_value = capacity.value;
        let fncookie = Cookies.get("firstName");
        let lncookie = Cookies.get("lastName");
        let ecookie = Cookies.get("email");
        let pncookie = Cookies.get("phoneNumber");

        if (capacity_value == '') {
            active_cnext.addClass('vcapacity-btn-next');
            $('.vcapacity-btn-next').popover({
                container: 'body',
                content: 'Please select a capacity',
                placement: 'top',
                toggle: 'popover'
            });
            $('.vcapacity-btn-next').popover('enable');
            $('.vcapacity-btn-next').popover('show');
            $('.vcapacity-btn-next').on('shown.bs.popover', function() {
                var $pop = $(this);
                setTimeout(function() {
                    $pop.popover('hide');
                }, 2000);
                setTimeout(function() {
                    $pop.popover();
                }, 2200);
            });
        } else {
            $('.vcapacity-btn-next').popover('hide');
            $('.vcapacity-btn-next').popover('disable');
            active_cnext.removeClass('vcapacity-btn-next');

            parent_fieldset.addClass('selected_capacity');
            parent_fieldset.fadeOut(200, function() {
                current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                bar_progress(progress_line, 'right');
                $(this).nextAll('.details').fadeIn();
                scroll_to_class($('form'), 20);
            });

            $('.phone-mdl-ws').append(document.getElementById("buy-wiz").elements["model"].value);

            if (fncookie = Cookies.get("firstName")) document.forms["buy-wiz"]["firstName"].value = fncookie;
            if (lncookie = Cookies.get("lastName")) document.forms["buy-wiz"]["lastName"].value = lncookie;
            if (ecookie = Cookies.get("email")) document.forms["buy-wiz"]["email"].value = ecookie;
            if (pncookie = Cookies.get("phoneNumber")) document.forms["buy-wiz"]["phoneNumber"].value = pncookie;
        }
    });

    /* previous step button in step 6 (Details) */
    // previous
    $('form .dtls-btn-previous').on('click', function() {
        var current_active_step = $('form').find('.form-wizard.active');
        var progress_line = $('form').find('.progress-line');

        $('.newdtls-btn-next').popover('hide');
        $('.newdtls-btn-next').popover('disable');
        $('.accs-btn-next').removeClass('newdtls-btn-next');
        $('.cust-value').remove();
        $('.fee-value').remove();

        $(this).parents('fieldset').fadeOut(200, function() {
            current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
            bar_progress(progress_line, 'left');
            $(this).prevAll('.selected_capacity').fadeIn().removeClass('selected_capacity');
            scroll_to_class($('form'), 20);
            $('.phone-mdl-ws').replaceWith('<span class="phone-mdl-ws"></span>');
        });
    });

    // next
    $('form .dtls-btn-next').on('click', function() {
        var parent_fieldset = $(this).parents('fieldset');
        var current_active_step = $('form').find('.form-wizard.active');
        var progress_line = $('form').find('.progress-line');
        var fnbox = document.forms["buy-wiz"]["firstName"].value;
        var lnbox = document.forms["buy-wiz"]["lastName"].value;;
        var ebox = document.forms["buy-wiz"]["email"].value;
        var pnbox = document.forms["buy-wiz"]["phoneNumber"].value;

        if (fnbox !== "" && lnbox !== "" && ebox !== "" && pnbox !== "") {
            Cookies.set("firstName", fnbox, { expires: 1 });
            Cookies.set("lastName", lnbox, { expires: 1 });
            Cookies.set("email", ebox, { expires: 1 });
            Cookies.set("phoneNumber", pnbox, { expires: 1 });

            $('.newdtls-btn-next').popover('hide');
            $('.newdtls-btn-next').popover('disable');
            $('.accs-btn-next').removeClass('newdtls-btn-next');

            parent_fieldset.fadeOut(200, function() {
                current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                bar_progress(progress_line, 'right');
                $(this).nextAll('.value').fadeIn();
                scroll_to_class($('form'), 20);
            });

            $('.phone-mdl-val').append(document.getElementById("buy-wiz").elements["model"].value);
        } else {
            $('.dtls-btn-next').addClass('newdtls-btn-next');
            $('.newdtls-btn-next').popover({
                container: 'body',
                content: 'Fill all details',
                placement: 'top',
                toggle: 'popover'
            });
            $('.newdtls-btn-next').popover('enable');
            $('.newdtls-btn-next').popover('show');
            $('.newdtls-btn-next').on('shown.bs.popover', function() {
                var $pop = $(this);
                setTimeout(function() {
                    $pop.popover('hide');
                }, 2000);
                setTimeout(function() {
                    $pop.popover();
                }, 2200);
            });
        }
    });

    /* previous step button in step 7 (Value)*/
    // previous

    $('form .val-btn-previous').on('click', function() {
        var current_active_step = $('form').find('.form-wizard.active');
        var progress_line = $('form').find('.progress-line');

        $(this).parents('fieldset').fadeOut(200, function() {
            current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
            bar_progress(progress_line, 'left');
            $(this).prevAll('.details').fadeIn();
            scroll_to_class($('form'), 20);
        });

        $('.phone-mdl-val').replaceWith('<span class="phone-mdl-val"></span>');
    });

    // add new phone
    // The idea is  to call the btn-previous funtions sequentially until you are taken to brands step (step 1)

    $('form .add-new-btn').on('click', function() {
        location.reload();
    });

});