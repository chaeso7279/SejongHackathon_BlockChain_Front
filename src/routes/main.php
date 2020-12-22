<?php
    $host = '15.164.102.34';
    $user = 'ubuntu';
    $pw = '1234';
    $dbName = 'SejongShare';
    
    $conn = mysqli_connect($host, $user, $pw, $dbName);
        
    $sql = "SELECT * FROM User";
    $result = mysqli_query($conn, $sql);    
    $row = mysqli_fetch_array($result);

    $list_array = array("name" =>$row['name'],
                        "email" =>$row['email'],
                        "phone" => $row['phone']);

    $result_array = json_encode($list_array);
    
    echo $result_array;
?>
