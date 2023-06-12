<?php
// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
// Add more variables for additional form fields

// Connect to the MySQL database
$servername = 'localhost';
$username = 'your_username';
$password = 'your_password';
$database = 'your_database';
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
  die('Connection failed: ' . $conn->connect_error);
}

// Prepare and execute the SQL query
$sql = "INSERT INTO students (name, email, phone) VALUES ('$name', '$email', '$phone')";
// Add more columns to the SQL query as per your table structure
if ($conn->query($sql) === TRUE) {
  echo "Registration successful";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>

