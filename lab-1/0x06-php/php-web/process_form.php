<!DOCTYPE html>
<html>

<head>
  <title>Registered Entries - Oakwood Medical Centre (OMC)</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
  <link rel="icon" type="image/x-icon" href="assets/oakwoodlogored.jpg">
</head>

<body>
  <h1>Registered Entries</h1>

  <?php
  //this checks if form data is submitted
  if ($_SERVER["REQUEST_METHOD"] === "POST") {
    //this checks if all form fields are set
    if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["phone"])) {
      //this stores form data in variables
      $name = htmlspecialchars($_POST["name"]);
      $email = htmlspecialchars($_POST["email"]);
      $phone = htmlspecialchars($_POST["phone"]);

      //this displays the form data in a table
      echo "<table border='1'>";
      echo "<tr><th>Full Name</th><th>Email</th><th>Phone</th></tr>";
      echo "<tr><td>" . $name . "</td><td>" . $email . "</td><td>" . $phone . "</td></tr>";
      echo "</table>";
    } else {
      echo "<p>Form data is incomplete. Please fill out all required fields.</p>";
    }
  } else {
    echo "<p>No form data submitted yet.</p>";
  }
  ?>

  <p><a href="site.php">Back to Registration Form</a></p>
</body>

</html>
