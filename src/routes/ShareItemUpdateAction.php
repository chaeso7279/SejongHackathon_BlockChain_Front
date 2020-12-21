
<?php
    include dbconnect;
    $title = $_GET[title];
    $content = $_GET[content];
    $price = $_GET[price];  
    $picture = $_GET[picture];
    $date = date('Y-m-d H:i:s');
    $query = "insert Auctions set A_title='$title', A_description='$content', A_price='$price', A_picture='$picture'";
    $result = $connect->query($query);
    if($result) {
?>
        <script>
            location.replace("./ShareItemList.php");
        </script>
<?php    }
    else {
        echo "fail";
    }
?>