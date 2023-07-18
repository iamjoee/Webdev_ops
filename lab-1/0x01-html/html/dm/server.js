const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_database_name',
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL server');
});

// Create an API endpoint to handle form submissions
app.post('/register', (req, res) => {
  const { firstname, secondname, phonenumber, email, organization } = req.body;
  const query = `INSERT INTO users (firstname, secondname, phonenumber, email, organization) VALUES (?, ?, ?, ?, ?)`;
  const values = [firstname, secondname, phonenumber, email, organization];

  // Execute the SQL query
  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.sendStatus(500);
      return;
    }
    res.sendStatus(200);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
