<?php
$myName = $_POST['myName'];


$conn = new mysqli('locallost','root','test');
if($conn->connect_error){
    die('Connection Faild : '$conn->connect_error);

}else{
    $stmt = $conn->prepare("insert into registation(myName) values(?,)")
    $stmt->bind_param("s", $myName);
    $stmt->execute();
    echo "Registation Successfully...";
    $stmt->close();
    $conn->close();
}


?>