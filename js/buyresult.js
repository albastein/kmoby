(function ($) {
    $(".ph-buy").fancybox({
        "type": "iframe",
        "fitToView": false,
        "autoSize": false,
        "scrolling": "no",
        "iframe": {
            "scrolling": "no",
            "preload": false,
            "css": {
                "max-width": "700px",
                "min-height": "1700px",
                "border-radius": "10px",
                "overflow": "hidden"
            }
        }
    });

    $(".ph-buy").click(function () {
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

        Cookies.set("brand-c", brand, {
            expires: 1
        });
        Cookies.set("model-c", model, {
            expires: 1
        });
        Cookies.set("color-c", color, {
            expires: 1
        });
        Cookies.set("dprice-c", dprice, {
            expires: 1
        });
        Cookies.set("mprice-c", mprice, {
            expires: 1
        });
        Cookies.set("network-c", network, {
            expires: 1
        });
        Cookies.set("dtype-c", dtype, {
            expires: 1
        });
        Cookies.set("dsize-c", dsize, {
            expires: 1
        });
        Cookies.set("resolution-c", resolution, {
            expires: 1
        });
        Cookies.set("os-c", os, {
            expires: 1
        });
        Cookies.set("cpu-c", cpu, {
            expires: 1
        });
        Cookies.set("memory-c", memory, {
            expires: 1
        });
        Cookies.set("ram-c", ram, {
            expires: 1
        });
        Cookies.set("maincam-c", maincam, {
            expires: 1
        });
        Cookies.set("selfie-c", selfie, {
            expires: 1
        });
        Cookies.set("comms-c", comms, {
            expires: 1
        });
        Cookies.set("sensors-c", sensors, {
            expires: 1
        });
        Cookies.set("battery-c", battery, {
            expires: 1
        });
    });
})(jQuery);