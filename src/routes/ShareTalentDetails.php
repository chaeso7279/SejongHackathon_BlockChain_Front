<?php
    include dbconnect;
                //$connect = mysqli_connect('localhost', '', '', '');
                //$number = $_GET['number'];
                //session_start();
    $query1 = "select S_title, S_content, S_picture from Auctions where sharedTalentID =$sharedTalentID";
    $query2 = "select name, email from user where userID =$userID";
    
    $result1 = $connect->query($query1);
    $rows1 = mysqli_fetch_assoc($result1);

    $result2 = $connect->query($query2);
    $rows2 = mysqli_fetch_assoc($result2);
?>

<table class="view_table" align=center>
<tr>
        <td colspan="4" class="view_title"><?php echo $rows1['S_title']?></td>
</tr>
<tr>
        <td class="view_id">작성자</td>
        <td class="view_id2"><?php echo $rows2['name']?></td>
        <td class="view_hit">이메일</td>
        <td class="view_hit2"><?php echo $rows2['email']?></td>
</tr>
<tr>
        <td colspan="4" class="view_content" valign="top">
        <?php echo $rows1['S_picture']?></td>
</tr>
<tr>
        <td colspan="4" class="view_content" valign="top">
        <?php echo $rows1['S_content']?></td>
</tr>
</table>




