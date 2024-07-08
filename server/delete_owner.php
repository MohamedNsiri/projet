<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "product_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    
    $sql = "DELETE FROM owners WHERE owner_id = $id";
    $result = $conn->query($sql);

    if ($result === TRUE) {
        echo json_encode(array("message" => "Owner deleted successfully"));
    } else {
        echo json_encode(array("error" => "Error deleting owner: " . $conn->error));
    }
} else {
    echo json_encode(array("error" => "ID parameter is required"));
}

$conn->close();
?>