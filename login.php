<?php
DEFINE ('DB_USER', 'root');
DEFINE ('DB_PSWD', '');
DEFINE ('DB_HOST', 'localhost');
DEFINE ('DB_NAME', 'selltenje');

$dbconn = mysqli_connect(DB_HOST, DB_USER, DB_PSWD, DB_NAME);

?>

<!DOCTYPE HTML>
<HTML>
<head>
<link rel="stylesheet" href="css/login.css">
</head>

<body>

<?php

$email_value = $_POST['email_val'];
$paswd_value = $_POST['paswd_val'];

$chksql  = "SELECT * FROM users WHERE email = '$email_value'";

$result = mysqli_query($dbconn, $chksql);

if($result) {

        if (mysqli_num_rows($result) == 0) {

        echo '<span class="db-check">notindb</span>';

        } else {

            $sltsql = "SELECT * FROM users WHERE email = '".$email_value."' AND paswd = '".$paswd_value."'";
            
            $sltresult = mysqli_query($dbconn, $sltsql);

            if (mysqli_num_rows($sltresult) > 0) {
                echo '<span class="db-check">success</span>';
            } else {
                echo '<span class="db-check">failed</span>';

                //echo '<div class="rus-alert alert alert-primary" role="alert">
                //    Wrong password.
                //</div>';
            }

            $namesql = "SELECT fname FROM users WHERE email = '".$email_value."' AND paswd = '".$paswd_value."'";

            $nameresult = mysqli_query($dbconn, $namesql);

            if (mysqli_num_rows($nameresult) > 0) {
                $row = mysqli_fetch_assoc($nameresult);
                $cfname = $row['fname'];
                
                echo '<span class="cus-name">' . $cfname . '</span>';
            }
            
        }

} else {
        echo "<script type='text/javascript'>alert('error in your query');</script>";
}

mysqli_close($dbconn);

?>

</body>
</HTML>