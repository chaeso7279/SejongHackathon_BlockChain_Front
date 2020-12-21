<?php    
    include dbconnect;
 
?>
<form method = "get" action = "modify_action.php">
<table  style="padding-top:50px" align = center width=700 border=0 cellpadding=2 >
        
        <tr>
        <td bgcolor=white>
        <table class = "table2">
        <tr>
                <tr>
                <td>제목</td>
                <td><input type = text name = title size=60 value="<?=$title?>"></td>
                </tr>

                <td>가격</td>
                <td><input type="price"" name="price" value="<?=$price?>"></td>
                </tr>

                <tr>
                <td>내용</td>
                <td><textarea name = content cols=85 rows=15><?=$content?></textarea></td>
                </tr>

                <tr>
                <td>사진</td>
                <td><textarea name = picture cols=85 rows=15><?=$picture?></textarea></td>
                </tr>


                </table>

                <center>
                <input type = "submit" value="제출">
                </center>
        </td>
        </tr>
</table>
