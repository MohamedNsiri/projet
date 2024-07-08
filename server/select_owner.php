<?php
// Database connection (replace with your actual database credentials)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "product_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to fetch data from owners table
$sql = "SELECT * FROM owners";
$result = $conn->query($sql);

// Check if any results were returned
if ($result->num_rows > 0) {
    // Fetch associative array of the result
    $owners = array();
    while ($row = $result->fetch_assoc()) {
        $owners[] = $row;
    }
    // Output owners data as JSON
    header('Content-Type: application/json');
    echo json_encode($owners);
} else {
    echo "No owners found";
}
$conn->close();
?>
