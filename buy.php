<?php
DEFINE ('DB_USER', 'root');
DEFINE ('DB_PSWD', '');
DEFINE ('DB_HOST', 'localhost');
DEFINE ('DB_NAME', 'buytenje');

$dbconn = mysqli_connect(DB_HOST, DB_USER, DB_PSWD, DB_NAME);

$tableName = $_POST['table_name'];
$phoneModel = $_POST['phone_model'];
$brand = "";

if ($tableName == "used_samsungs" || $tableName == "new_samsungs") {
    $brand = "samsung";
} else if ($tableName == "used_huaweis" || $tableName == "new_huaweis") {
    $brand = "huawei";
} else if ($tableName == "used_iphones" || $tableName == "new_iphones") {
    $brand = "iphone";
}

if ($tableName == "used_samsungs" || $tableName == "used_huaweis" || $tableName == "used_iphones") {

    $workStatus = $_POST['working_status'];

    if ($workStatus == "used"){
        $sql= "SELECT *
        FROM ".$tableName."
        WHERE 
            model = '".$phoneModel."'";

        $result = mysqli_query($dbconn, $sql);

        if (!$result) {
            printf("Error: %s\n", mysqli_error($dbconn));
            exit();
        }
    
        $udivHtml ='<div class="item-cards">'; // Here's where you add the main div that holds the others.
    
        if (mysqli_num_rows($result) > 0){
            while($row=mysqli_fetch_array($result)){
                
                $udivHtml .='<div class="card-items">';
                $udivHtml .='   <div class="card-box">';
                $udivHtml .='       <div class="used-card-box">';
                $udivHtml .='           <div class="card-image">';
                $udivHtml .='               <div class="phone-img">';
                $udivHtml .='                   <img src="images/phones/' . $brand . '/' . $row['model'] . '.png" alt="" />';
                $udivHtml .='               </div>';
                $udivHtml .='               <div class="ph-color">';
                $udivHtml .='                   <img src="images/colors/' . $row['color'] . '.svg" alt="" />';
                $udivHtml .='               </div>';
                $udivHtml .='           </div>';
                $udivHtml .='           <div class="card-details">';
                $udivHtml .='               <div class="detail-section">';
                $udivHtml .='                   <p class="ph-main-memory">' . $row['memory'] . '</p>';
                $udivHtml .='                   <p class="ph-cable">' . $row['cable'] . '</p>';
                $udivHtml .='                   <p class="ph-charger">' . $row['charger'] . '</p>';
                $udivHtml .='                   <p class="ph-description">' . $row['description'] . '</p>';
                $udivHtml .='                   <p class="ph-marked-price">Ksh. ' . $row['marked_price'] . '</p>';
                $udivHtml .='                   <p class="ph-discount-price">Ksh. ' . $row['discount_price'] . '</p>';
                $udivHtml .='               </div>';
                $udivHtml .='               <div class="buy-button">';
                $udivHtml .='                   <a class="ph-buy">buy</a>';
                $udivHtml .='               </div>';
                $udivHtml .='           </div>';
                $udivHtml .='       </div>';
                $udivHtml .='       <span class="elcolor" data-color="' . $row['color'] . '"></span>';
                $udivHtml .='       <span class="elmprice" data-price="' . $row['marked_price'] . '"></span>';
                $udivHtml .='       <span class="eldprice" data-price="' . $row['discount_price'] . '"></span>';
                $udivHtml .='       <span class="elid" data-id="' . $row['id'] . '"></span>';
                $udivHtml .='   </div>';
                $udivHtml .='</div>';
            }
        }       
    
        $udivHtml .= '</div>';
    
        echo $udivHtml;
    } else if ($workStatus !== "used"){

        $sql= "SELECT *
        FROM ".$tableName."
        WHERE 
            model = '".$phoneModel."' AND
            working_status = '".$workStatus."'";

        $result = mysqli_query($dbconn, $sql);

        if (!$result) {
            printf("Error: %s\n", mysqli_error($dbconn));
            exit();
        }

        $udivHtml ='<div class="item-cards">'; // Here's where you add the main div that holds the others.

        if (mysqli_num_rows($result) > 0){
            while($row=mysqli_fetch_array($result)){
                
                $udivHtml .='<div class="card-items">';
                $udivHtml .='   <div class="card-box">';
                $udivHtml .='       <div class="used-card-box">';
                $udivHtml .='           <div class="card-image">';
                $udivHtml .='               <div class="phone-img">';
                $udivHtml .='                   <img src="images/phones/' . $brand . '/' . $row['model'] . '.png" alt="" />';
                $udivHtml .='               </div>';
                $udivHtml .='               <div class="ph-color">';
                $udivHtml .='                   <img src="images/colors/' . $row['color'] . '.svg" alt="" />';
                $udivHtml .='               </div>';
                $udivHtml .='           </div>';
                $udivHtml .='           <div class="card-details">';
                $udivHtml .='               <div class="detail-section">';
                $udivHtml .='                   <p class="ph-main-memory">' . $row['memory'] . '</p>';
                $udivHtml .='                   <p class="ph-cable">' . $row['cable'] . '</p>';
                $udivHtml .='                   <p class="ph-charger">' . $row['charger'] . '</p>';
                $udivHtml .='                   <p class="ph-description">' . $row['description'] . '</p>';
                $udivHtml .='                   <p class="ph-marked-price">Ksh. ' . $row['marked_price'] . '</p>';
                $udivHtml .='                   <p class="ph-discount-price">Ksh. ' . $row['discount_price'] . '</p>';
                $udivHtml .='               </div>';
                $udivHtml .='               <div class="buy-button">';
                $udivHtml .='                   <a class="ph-buy">buy</a>';
                $udivHtml .='               </div>';
                $udivHtml .='           </div>';
                $udivHtml .='       </div>';
                $udivHtml .='       <span class="elcolor" data-color="' . $row['color'] . '"></span>';
                $udivHtml .='       <span class="elmprice" data-price="' . $row['marked_price'] . '"></span>';
                $udivHtml .='       <span class="eldprice" data-price="' . $row['discount_price'] . '"></span>';
                $udivHtml .='       <span class="elid" data-id="' . $row['id'] . '"></span>';
                $udivHtml .='   </div>';
                $udivHtml .='</div>';
            }
        }

        $udivHtml .= '</div>';

        echo $udivHtml;
    }
} else if ($tableName == "new_samsungs" || $tableName == "new_huaweis" || $tableName == "new_iphones") {

    $sql= "SELECT *
    FROM ".$tableName."
    WHERE 
        model = '".$phoneModel."'";

    $result = mysqli_query($dbconn, $sql);

    if (!$result) {
        printf("Error: %s\n", mysqli_error($dbconn));
        exit();
    }
    
    $ndivHtml ='<div class="item-cards">'; // Here's where you add the main div that holds the others.

    if (mysqli_num_rows($result) > 0){
        while($row=mysqli_fetch_array($result)){
            
            $ndivHtml .='<div class="card-box">';
            $ndivHtml .='    <div class="new-card-box">';
            $ndivHtml .='        <div class="card-image">';
            $ndivHtml .='            <div class="phone-img">';
            $ndivHtml .='                <img src="images/' . $row['model'] . '.png" alt="" />';
            $ndivHtml .='            </div>';
            $ndivHtml .='            <div class="ph-color">';
            $ndivHtml .='                <img src="images/colors/' . $row['color'] . '.svg" alt="" />';
            $ndivHtml .='            </div>';
            $ndivHtml .='        </div>';
            $ndivHtml .='        <div class="card-details">';
            $ndivHtml .='            <div class="detail-section">';
            $ndivHtml .='                <p class="ph-main-memory">' . $row['internal_memory'] . '</p>';
            $ndivHtml .='                <p class="ph-ram">' . $row['ram'] . '</p>';
            $ndivHtml .='                <p class="ph-rear-camera">' . $row['main_camera'] . '</p>';
            $ndivHtml .='                <p class="ph-front-camera">' . $row['selfie_camera'] . '</p>';
            $ndivHtml .='                <p class="ph-display">Ksh. ' . $row['display_type'] . '</p>';
            $ndivHtml .='                <p class="ph-battery">Ksh. ' . $row['battery'] . '</p>';
            $ndivHtml .='                <p class="ph-marked-price">Ksh. ' . $row['price'] . '</p>';
            $ndivHtml .='                <p class="ph-discount-price">Ksh. ' . $row['discount_price'] . '</p>';
            $ndivHtml .='            </div>';
            $ndivHtml .='            <div class="buy-button">';
            $ndivHtml .='                <a class="ph-buy">buy</a>';
            $ndivHtml .='            </div>';
            $ndivHtml .='        </div>';
            $ndivHtml .='    </div>';
            $ndivHtml .='       <span class="elcolor" data-color="' . $row['color'] . '"></span>';
            $ndivHtml .='       <span class="elmprice" data-price="' . $row['price'] . '"></span>';
            $ndivHtml .='       <span class="eldprice" data-price="' . $row['discount_price'] . '"></span>';
            $udivHtml .='       <span class="elid" data-id="' . $row['id'] . '"></span>';
            $ndivHtml .='</div>';
        }
    }

    $ndivHtml .= '</div>';

    echo $ndivHtml;
}

$sql= "SELECT *
FROM ".$brand."
WHERE 
    model = '".$phoneModel."'";

$result = mysqli_query($dbconn, $sql);

if (!$result) {
    printf("Error: %s\n", mysqli_error($dbconn));
    exit();
}

$xdivHtml ='<div class="full-details">';

if (mysqli_num_rows($result) > 0){
    while($row=mysqli_fetch_array($result)){
        $xdivHtml ='<div class="full-details">';            
        $xdivHtml .='<span class="brand-dph" data-detail="' . $brand . '"></span>';
        $xdivHtml .='<span class="model-dph" data-detail="' . $row['model'] . '"></span>';
        $xdivHtml .='<span class="color-dph" data-detail="' . $row['color'] . '"></span>';
        $xdivHtml .='<span class="network-dph" data-detail="' . $row['network'] . '"></span>';
        $xdivHtml .='<span class="dtype-dph" data-detail="' . $row['display_type'] . '"></span>';
        $xdivHtml .='<span class="dsize-dph" data-detail="' . $row['display_size'] . '"></span>';
        $xdivHtml .='<span class="resolution-dph" data-detail="' . $row['resolution'] . '"></span>';
        $xdivHtml .='<span class="os-dph" data-detail="' . $row['os'] . '"></span>';
        $xdivHtml .='<span class="cpu-dph" data-detail="' . $row['cpu'] . '"></span>';
        $xdivHtml .='<span class="memory-dph" data-detail="' . $row['internal_memory'] . '"></span>';
        $xdivHtml .='<span class="ram-dph" data-detail="' . $row['ram'] . '"></span>';
        $xdivHtml .='<span class="maincam-dph" data-detail="' . $row['main_camera'] . '"></span>';
        $xdivHtml .='<span class="selfie-dph" data-detail="' . $row['selfie_camera'] . '"></span>';
        $xdivHtml .='<span class="comms-dph" data-detail="' . $row['comms'] . '"></span>';
        $xdivHtml .='<span class="sensors-dph" data-detail="' . $row['sensors'] . '"></span>';
        $xdivHtml .='<span class="battery-dph" data-detail="' . $row['battery'] . '"></span>';
    }
}

$xdivHtml .= '</div>';


echo $xdivHtml;

/*

while($row=mysqli_fetch_array($result)){
    echo "".$row['memory']." &nbsp;&nbsp; ".$row['color']." &nbsp;&nbsp; ".$row['cable']." &nbsp;&nbsp; ".$row['charger']." &nbsp;&nbsp; ".$row['marked_price']." &nbsp;&nbsp; ".$row['discount_price']." &nbsp;&nbsp; ".$row['description']."<br>";
}

*/

?>