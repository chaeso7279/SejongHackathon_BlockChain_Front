<?php
    $id = "ubuntu";
    $password = "1234";
    $name = "SejongShare";
    $host = "15.164.102.34";

    $dbConn = mysql_connect($host, $id, $password);
    mysql_select_db($name, $dbConn);


?>
