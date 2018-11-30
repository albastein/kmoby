<?php
    include 'dbconn.php';

    $brand_val = $_POST['brandValue'];
    $model_val = $_POST['modelValue'];
    $capac_val = $_POST['capacityValue'];
    $state_val = $_POST['statusValue'];
    $acces_val = $_POST['accessoryValue'];

    $sql = "SELECT price
            FROM ".$brand_val."
            WHERE 
            model = '".$model_val."' AND 
            capacity = '".$capac_val."' AND 
            working_status = '".$state_val."' AND 
            accessories = '".$acces_val."'";

    $result = mysqli_query($dbconn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        $realval = $row['price'];
        $sellval = $realval - 650;
        $custval = $sellval * 0.82;
        $feeval = $sellval * 0.18;
        if ($feeval >= 500) {
            print '<span class="cust-value">' . max((int)$custval, 0) . '</span>';
            print '</br>';
            print '<span class="fee-value">' . max((int)$feeval, 0) . '</span>';
        } else if ($feeval > 500) {
            print '<span class="cust-value">0</span>';
            print '</br>';
            print '<span class="fee-value">0</span>';
        } else {
            print '<span class="cust-value"></span>';
            print '</br>';
            print '<span class="fee-value"></span>';
        }
    }
?>