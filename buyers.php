<?php
DEFINE ('DB_USER', 'root');
DEFINE ('DB_PSWD', '');
DEFINE ('DB_HOST', 'localhost');
DEFINE ('DB_NAME', 'kmoby_users');

$dbconn = mysqli_connect(DB_HOST, DB_USER, DB_PSWD, DB_NAME);

$buyer_fname = $_POST['bfname'];
$buyer_lname = $_POST['blname'];
$buyer_phone = $_POST['bphone'];
$buyer_email = $_POST['bemail'];
$buyer_county = $_POST['bcounty'];
$buyer_const = $_POST['bconst'];
$buyer_ward = $_POST['bward'];
$buyer_model = $_POST['bmodel'];
$buyer_phid = $_POST['bphid'];
$buyer_status = $_POST['bstatus'];

$inssql = "INSERT INTO buyers (fname, lname, phone, email, county, constituency, ward, model, work_status, prodID)
        VALUES ('$buyer_fname', 
        '$buyer_lname', 
        '$buyer_phone', 
        '$buyer_email', 
        '$buyer_county',
        '$buyer_const',
        '$buyer_ward',
        '$buyer_model',
        '$buyer_status',
        '$buyer_phid'
        );";

mysqli_query($dbconn, $inssql);

?>
