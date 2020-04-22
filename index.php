<?php


$con=mysqli_connect('localhost','root','');
mysqli_select_db( $con,'user');
/*if(isset($_POST['text']))
{
    $text=$_POST['text'];
    $sql="insert into member values ('$text','sadsadds','asdsadas')";
    $result=mysqli_query($con,$sql);
}*/
$x=[];
$sql="select * from member";
$result=mysqli_query($con,$sql);

while($row=mysqli_fetch_array($result))
    {
        array_push($x,$row['EMAIL']);
    }
    echo json_encode($x);


    




?>
