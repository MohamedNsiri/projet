<?php
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

// Get the POST data sent from Angular
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

// Check if owner_id exists in the owners table
$owner_id = $request->owner_id;
$check_owner_stmt = $conn->prepare("SELECT owner_id FROM owners WHERE owner_id = ?");
$check_owner_stmt->bind_param("i", $owner_id);
$check_owner_stmt->execute();
$check_owner_stmt->store_result();

if ($check_owner_stmt->num_rows > 0) {
  // Owner ID exists, proceed to insert product
  $insert_stmt = $conn->prepare("INSERT INTO products (product_name, product_price, product_pic, owner_id, product_desc) VALUES (?, ?, ?, ?, ?)");
  $insert_stmt->bind_param("sdsis", $request->product_name, $request->product_price, $request->product_pic, $request->owner_id, $request->product_desc);

  // Execute the insert statement
  if ($insert_stmt->execute()) {
    $response = array('message' => 'Product added successfully');
  } else {
    $response = array('message' => 'Error inserting product: ' . $conn->error);
  }

  $insert_stmt->close();
} else {
  // Owner ID does not exist in the owners table
  $response = array('message' => 'Error: Owner ID does not exist');
}

$check_owner_stmt->close();
$conn->close();

// Return response to Angular
header('Content-Type: application/json');
echo json_encode($response);
?>

