document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault();


  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var dob = document.getElementById('dob').value;

  
  if (name && email && phone && dob) {
    
    alert('Registration successful!');
  } else {
    alert('Please fill in all fields.');
  }
});

document.getElementById("appointment-form").addEventListener("submit", function(event) {
  event.preventDefault(); 

 
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var doctor = document.getElementById("doctor").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;

  

  
  alert("Appointment booked successfully!");


  document.getElementById("appointment-form").reset();
});