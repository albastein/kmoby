<?php
DEFINE ('DB_USER', 'root');
DEFINE ('DB_PSWD', '');
DEFINE ('DB_HOST', 'localhost');
DEFINE ('DB_NAME', 'buytenje');

$dbconn = mysqli_connect(DB_HOST, DB_USER, DB_PSWD, DB_NAME);

$tableName = $_POST['table_name'];
$phoneModel = $_POST['phone_model'];
$workStatus = $_POST['working_status'];

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

$divHtml ='<div class="card-items">'; // Here's where you add the main div that holds the others.

if (mysqli_num_rows($result) > 0){
    while($row=mysqli_fetch_array($result)){
        
        $divHtml .='<div class="card-box">';
        $divHtml .='<div class="used-card-box">';
        $divHtml .='    <div class="card-image">';
        $divHtml .='        <div class="phone-img">';
        $divHtml .='            <img src="images/' . $row['model'] . '.png" alt="" />';
        $divHtml .='        </div>';
        $divHtml .='        <div class="ph-color">';
        $divHtml .='            <img src="images/colors/' . $row['color'] . '.svg" alt="" />';
        $divHtml .='        </div>';
        $divHtml .='    </div>';
        $divHtml .='    <div class="card-details">';
        $divHtml .='        <div class="detail-section">';
        $divHtml .='            <p class="ph-main-memory">' . $row['memory'] . '</p>';
        $divHtml .='            <p class="ph-cable">' . $row['cable'] . '</p>';
        $divHtml .='            <p class="ph-charger">' . $row['charger'] . '</p>';
        $divHtml .='            <p class="ph-description">' . $row['description'] . '</p>';
        $divHtml .='            <p class="ph-marked-price">' . $row['marked_price'] . '</p>';
        $divHtml .='            <p class="ph-discount-price">' . $row['discount_price'] . '</p>';
        $divHtml .='        </div>';
        $divHtml .='    </div>';
        $divHtml .='</div>';
        $divHtml .='</div>';
    }
}

$divHtml .= '</div>';

echo $divHtml;



/*

while($row=mysqli_fetch_array($result)){
    echo "".$row['memory']." &nbsp;&nbsp; ".$row['color']." &nbsp;&nbsp; ".$row['cable']." &nbsp;&nbsp; ".$row['charger']." &nbsp;&nbsp; ".$row['marked_price']." &nbsp;&nbsp; ".$row['discount_price']." &nbsp;&nbsp; ".$row['description']."<br>";
}

*/

?>