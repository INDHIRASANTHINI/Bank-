document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login-form');
    
    // Form submit handler
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form from submitting normally
  
      // Get input values
      const email = document.querySelector('#email').value.trim();
      const password = document.querySelector('#password').value.trim();
  
      // Basic form validation
      let errorMessage = '';
      
      // Check if the email field is empty
      if (email === '') {
        errorMessage += 'Please enter your email.\n';
      } else if (!isValidEmail(email)) {
        errorMessage += 'Please enter a valid email address.\n';
      }
  
      // Check if the password field is empty
      if (password === '') {
        errorMessage += 'Please enter your password.\n';
      }
  
      // If there are any errors, show the message
      if (errorMessage) {
        showErrorMessages(errorMessage); // Display error messages
        return;
      }
  
      // If everything is fine, simulate a successful login
      alert('Login successful!'); // You can replace this with actual login logic (e.g., AJAX)
  
      // Optionally, redirect to a different page after successful login
      // window.location.href = "dashboard.html";  // Replace with actual page
    });
  
    // Function to validate email format using a simple regex
    function isValidEmail(email) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailPattern.test(email);
    }
  
    // Function to display error messages
    function showErrorMessages(message) {
      const errorContainer = document.createElement('div');
      errorContainer.classList.add('error-message');
      errorContainer.textContent = message;
  
      // Insert error message before the form
      const form = document.querySelector('.login-form');
      form.insertBefore(errorContainer, form.firstChild);
    }
  });
  