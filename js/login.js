$(document).ready(function () {
    $('.in-alert').text('');
    $('.form-control').click(function () {
        $('#livalue').text('');
    });
    $('.log-btn').click(function () {
        let Email = $('#email').val();
        let Paswd = $('#paswd').val();

        $('.login-loader').show();

        if (Email == "" || Paswd == "") {
            $('.login-loader').hide();
            $('.in-alert').text('Invalid credentials');
            $('.login-alert').fadeIn(500);
            setTimeout("$('.login-alert').fadeOut(1500);", 3000);
        } else {
            $("#livalue").load("login.php", {
                'email_val': Email,
                'paswd_val': Paswd
            }, function () {
                $('.db-check').hide();
                $('.cus-name').hide();
                $('.cus-lname').hide();
                $('.cus-mail').hide();
                $('.cus-phone').hide();
                if ($('.db-check').text() == 'notindb') {

                    $('.in-alert').text('Email not registered');
                    $('.login-loader').hide();
                    $('.login-alert').fadeIn(500);
                    setTimeout("$('.login-alert').fadeOut(1500);", 3000);
                } else if ($('.db-check').text() == 'success') {
                    let uname = $('.cus-name').text();
                    let ulname = $('.cus-lname').text();
                    let umail = $('.cus-mail').text();
                    let uphone = $('.cus-phone').text();

                    Cookies.set("firstName", uname, {
                        expires: 1
                    });
                    Cookies.set("lastName", ulname, {
                        expires: 1
                    });
                    Cookies.set("email", umail, {
                        expires: 1
                    });
                    Cookies.set("phoneNumber", uphone, {
                        expires: 1
                    });

                    $('.signup-btn').hide();
                    $('.login-btn').hide();
                    $('.prof-name').text(uname);
                    $('.prof-name').css({
                        "text-transform": "lowercase !important",
                        "letter-spacing": "1px !important"
                    });
                    $('.login-loader').hide();
                    $('.login').fadeOut('slow');
                    $('.profile-btn').show();

                } else if ($('.db-check').text() == 'failed') {

                    $('.log-status').addClass('wrong-entry');
                    $('.in-alert').text('Wrong password');
                    $('.login-loader').hide();
                    $('.login-alert').fadeIn(500);
                    setTimeout("$('.login-alert').fadeOut(1500);", 3000);
                }
            });
        }
    });

    $('.log-out').click(function () {
        $('.profile-btn').hide();
        $('.signup-btn').show();
        $('.login-btn').show();
    });
});