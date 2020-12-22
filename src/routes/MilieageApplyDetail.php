<?php
    include dbconnect;
                //$connect = mysqli_connect('localhost', '', '', '');
                //$number = $_GET['number'];
                //session_start();
    $query1 = "select M_applyID, m_usetime, m_content from MileageApply";
        
    $result1 = $connect->query($query1);


?>

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
        <a href = "view.php?number=<?php echo $rows1['M_applyID']?>">
        <td width = "100" align = "center"><?php echo $rows1['m_usetime']?></td>
        <td width = "200" align = "center"><?php echo $rows1['m_content']?></td>
        </tr>
<?php
        $total--;
        }
?>

</table>









