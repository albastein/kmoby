(function ($) {
    var fncookie = Cookies.get("firstName");
    var lncookie = Cookies.get("lastName");
    var ecookie = Cookies.get("email");
    var pncookie = Cookies.get("phoneNumber");

    if (fncookie) {
        $('.inner-fname').text(fncookie);
    }
    if (lncookie) {
        $('.inner-lname').text(lncookie);
    }
    if (ecookie) {
        $('.inner-email').text(ecookie);
    }
    if (pncookie) {
        $('.inner-phone').text(pncookie);
    }
    $('.pop').click(function () {
        alert($('.inner-fname').text());
    });
})(jQuery);