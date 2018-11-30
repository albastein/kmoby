<?php
DEFINE ('DB_USER', 'root');
DEFINE ('DB_PSWD', '');
DEFINE ('DB_HOST', 'localhost');
DEFINE ('DB_NAME', 'selltenje');

$dbconn = mysqli_connect(DB_HOST, DB_USER, DB_PSWD, DB_NAME);

?>

<!DOCTYPE HTML>
<html>
<head>
<link rel="stylesheet" href="css/style.css">
</head>
<body>

<?php

$fname_value = $_POST['fname_val'];
$lname_value = $_POST['lname_val'];
$email_value = $_POST['email_val'];
$phone_value = $_POST['phone_val'];
$paswd_value = $_POST['paswd_val'];

$chksql  = "SELECT * FROM users WHERE email = '$email_value'";

$result = mysqli_query($dbconn, $chksql);

if($result) {

        if (mysqli_num_rows($result) == 0) {

        $inssql = "INSERT INTO users (fname, lname, email, phone, paswd)
        VALUES ('$fname_value', '$lname_value', '$email_value', '$phone_value', '$paswd_value');";

        mysqli_query($dbconn, $inssql);

        } else {

        echo '<div class="rus-alert alert alert-primary" role="alert">
        Your email was registered earlier. Click <a href="#" class="alert-link">here</a> to log in.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
        </button>
        </div>';
        
        }

} else {
        echo "<script type='text/javascript'>alert('error in your query');</script>";
}

mysqli_close($dbconn);

?>

</body>
</html>