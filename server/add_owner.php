<?php
// Allowing cross-origin requests for this endpoint
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: POST");

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

// Get the posted data
$input = file_get_contents("php://input");
$data = json_decode($input);

// Debug: Check if data is received correctly
if ($data === null) {
    echo json_encode(["message" => "No data received", "input" => $input, "json_error" => json_last_error_msg()]);
    exit();
}

// Prepare and bind the SQL statement
$stmt = $conn->prepare("INSERT INTO `owners`(`owner_id`, `owner_name`) VALUES (?, ?)");
$stmt->bind_param("ss", $data->owner_id, $data->owner_name);

// Execute the query
if ($stmt->execute()) {
  echo json_encode(["message" => "User added successfully"]);
} else {
  echo json_encode(["message" => "Error adding user"]);
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
