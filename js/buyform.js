(function () {
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
            var $_active = $point_arr.eq(active)

            $point_arr
                .removeClass('completed active')
                .slice(0, active).addClass('completed')

            $_active.addClass('active');

            return $progress.css('width', (index / max * 100) + "%");
        }
    };

    $points.on('click', 'li', function (event) {
        var _index;
        _index = $point_arr.index(this);
        tracker = _index === 0 ? 1 : _index === val ? 0 : tracker;

        return activate(_index);
    });

    $trigger.on('click', function () {
        return activate(tracker++ % 2 === 0 ? 0 : val);
    });

    setTimeout((function () {
        return activate(val);
    }), 1000);

}).call(this);

(function ($) {

    let brandCookie = Cookies.get("brand-c");
    let modelCookie = Cookies.get("model-c");
    let colorCookie = Cookies.get("color-c");
    let dpriceCookie = Cookies.get("dprice-c");
    let mpriceCookie = Cookies.get("mprice-c");
    let networkCookie = Cookies.get("network-c");
    let dtypeCookie = Cookies.get("dtype-c");
    let dsizeCookie = Cookies.get("dsize-c");
    let resolutionCookie = Cookies.get("resolution-c");
    let osCookie = Cookies.get("os-c");
    let cpuCookie = Cookies.get("cpu-c");
    let memoryCookie = Cookies.get("memory-c");
    let ramCookie = Cookies.get("ram-c");
    let maincamCookie = Cookies.get("maincam-c");
    let selfieCookie = Cookies.get("selfie-c");
    let commsCookie = Cookies.get("comms-c");
    let sensorsCookie = Cookies.get("sensors-c");
    let batteryCookie = Cookies.get("battery-c");

    if (brandCookie) {
        $('.brand-ph').text(brandCookie);
    }
    if (modelCookie) {
        $('.model-ph').text(modelCookie);
    }
    if (colorCookie) {
        $('.color-ph').text(colorCookie);
    }
    if (dpriceCookie) {
        $('.discount-ph').text(dpriceCookie);
    }
    if (mpriceCookie) {
        $('.price-ph').text(mpriceCookie);
    }
    if (networkCookie) {
        $('.network-ph').text(networkCookie);
    }
    if (dtypeCookie) {
        $('.dtype-ph').text(dtypeCookie);
    }
    if (dsizeCookie) {
        $('.dsize-ph').text(dsizeCookie);
    }
    if (resolutionCookie) {
        $('.resolution-ph').text(resolutionCookie);
    }
    if (osCookie) {
        $('.os-ph').text(osCookie);
    }
    if (cpuCookie) {
        $('.cpu-ph').text(cpuCookie);
    }
    if (memoryCookie) {
        $('.memory-ph').text(memoryCookie);
    }
    if (ramCookie) {
        $('.ram-ph').text(ramCookie);
    }
    if (maincamCookie) {
        $('.maincam-ph').text(maincamCookie);
    }
    if (selfieCookie) {
        $('.selfie-ph').text(selfieCookie);
    }
    if (commsCookie) {
        $('.comms-ph').text(commsCookie);
    }
    if (sensorsCookie) {
        $('.sensors-ph').text(sensorsCookie);
    }
    if (batteryCookie) {
        $('.battery-ph').text(batteryCookie);
    }

    $('.img-dec')
        .attr('src', 'images/phones/' + brandCookie + '/' + modelCookie + '.png')
        .height(400);
    $('.col-dec')
        .attr('src', 'images/colors/' + colorCookie + '.svg')
        .height(50);

    $('.in-next').click(function () {
        $('.ph-details').hide();
        $('.contacts').fadeIn(800);
    });

})(jQuery);