<!DOCTYPE html>
<html>

<head>
  <title>Hospital Services - Oakwood Medical Centre (OMC)</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
  <link rel="icon" type="image/x-icon" href="assets/oakwoodlogored.jpg">
</head>

<body>

  <form method="POST" class="search-form" action="site.php">
    <input type="text" name="search" placeholder="Search..." class="search-input">
    <button type="submit" class="search-button">Search</button>
  </form>
  <section class="container">
    <form id="registration-form" action="process_form.php" method="post">
      <div class="form-group">
        <label for="name">Full Name:</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" required>
      </div>

      <div class="form-group">
        <button type="submit">Register</button>
      </div>
    </form>
  </section>

</body>

</html>
