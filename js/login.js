$(document).ready(function () {
    $('.in-alert').text('')
    $('.form-control').click(function () {
        $('#livalue').text('');
    });
    $('.log-btn').click(function () {
        let Email = $('#email').val();
        let Paswd = $('#paswd').val();

        if (Email == "" || Paswd == "") {
            $('.in-alert').text('Invalid credentials');
            $('.login-alert').fadeIn(500);
            setTimeout("$('.login-alert').fadeOut(1500);", 3000);
        } else {
            $("#livalue").load("login.php", {
                'email_val': Email,
                'paswd_val': Paswd
            }, function () {
                $('.db-check').hide();
                if ($('.db-check').text() == 'notindb') {
                    $('.in-alert').text('Email not registered');
                    $('.login-alert').fadeIn(500);
                    setTimeout("$('.login-alert').fadeOut(1500);", 3000);
                } else if ($('.db-check').text() == 'success') {
                    alert('correct password');
                } else if ($('.db-check').text() == 'failed') {
                    $('.log-status').addClass('wrong-entry');
                    $('.in-alert').text('Wrong password');
                    $('.login-alert').fadeIn(500);
                    setTimeout("$('.login-alert').fadeOut(1500);", 3000);
                }
            });
        }
    });
});