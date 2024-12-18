document.getElementById('bankForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const name = document.getElementById('name').value;
  const accountNumber = document.getElementById('accountNumber').value;
  const balance = document.getElementById('balance').value;

  // Retrieve existing accounts from localStorage
  const accounts = JSON.parse(localStorage.getItem('accounts')) || [];

  // Add the new account to the list
  accounts.push({
      name: name,
      accountNumber: accountNumber,
      balance: parseFloat(balance),
  });

  // Save updated accounts list back to localStorage
  localStorage.setItem('accounts', JSON.stringify(accounts));

  // Show a success message
  alert('Account successfully registered!');

 
});