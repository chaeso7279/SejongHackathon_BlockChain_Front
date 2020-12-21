<?php
    include dbconnect;
                //$connect = mysqli_connect('localhost', '', '', '');
                //$number = $_GET['number'];
                //session_start();
    $query1 = "select AuctionsID, title, price, picture from Auctions LIMIT 4";
    $query2 = "select name from user where userID =$userID";
    $query3 = "select sharetalentID, S_title, S_picture from ShareTalent LIMIT 4";
    $query4 = "select currentMoney from Money where userID =$userID";
    
    
    $result1 = $connect->query($query1);

    $result2 = $connect->query($query2);
    $rows2 = mysqli_fetch_assoc($result2);

    $result3 = $connect->query($query3);

    $result4 = $connect->query($query4);
    $rows4 = mysqli_fetch_assoc($result4);

?>

<?php echo $rows2['name']?>님 안녕하세요?
현재 잔액은 <?php echo $rows4['currentMoney']?>입니다.


<table class="view_table" align=center>
<tr>
<?php
    while($rows1 = mysqli_fetch_assoc($result1)){ //DB에 저장된 데이터 수 (열 기준)
        if($total%2==0){
?>                      
<tr class = "even">
<?php   }
        else{
    ?>                      
<tr>
<?php } ?>
        <td width = "50" align = "center"><?php echo $total?></td>
        <td width = "500" align = "center">
        <a href = "view.php?number=<?php echo $rows1['AuctionsID']?>">
        <?php echo $rows1['title']?></td>
            <td width = "100" align = "center"><?php echo $rows1['picture']?></td>
        <td width = "200" align = "center"><?php echo $rows1['price']?></td>
        </tr>
<?php
        $total--;
        }
?>

<tr>
<?php
    while($rows3 = mysqli_fetch_assoc($result3)){ //DB에 저장된 데이터 수 (열 기준)
        if($total%2==0){
?>                      
<tr class = "even">
<?php   }
        else{
    ?>                      
<tr>
<?php } ?>
        <td width = "50" align = "center"><?php echo $total?></td>
        <td width = "500" align = "center">
        <a href = "view.php?number=<?php echo $rows3['sharetalentID']?>">
        <?php echo $rows3['title']?></td>
            <td width = "100" align = "center"><?php echo $rows3['picture']?></td>
        </tr>
<?php
        $total--;
        }
?>

</table>




