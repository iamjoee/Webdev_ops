const users = [
  { username: "admin", password: "admin123" },
  { username: "user1", password: "pass123" },
  { username: "user2", password: "qwerty" },
];

function validateLogin(event) {
  event.preventDefault(); // Prevent form submission

  // Get form input values
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  // Perform validation
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    // Successful login
    // alert(`Welcome, ${user.username}!`);
    usernameInput.value = "";
    passwordInput.value = "";
    document.getElementById("login-error").textContent = "";
    window.location.href = "admin-dashboard.html";
  } else {
    // Failed login
    document.getElementById("login-error").textContent =
      "Invalid username or password";
  }
}
document.getElementById("logout-btn").addEventListener("click", function () {
  // Perform logout functionality here
  alert("Logout successful!");
});
