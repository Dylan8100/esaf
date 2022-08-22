<?php
    require 'connect.php';  

    $id = $_POST['id'];

    $records = $conn->prepare('SELECT * FROM diplomas WHERE id=:id');
    $records->bindParam(':id', $id);    
    $records->execute();
    $results = $records->fetch(PDO::FETCH_ASSOC);
    $ruta = $results['ruta'];

    header("Location: $ruta");

?>

