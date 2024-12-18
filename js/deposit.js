document.getElementById('depositForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const accountNumber = document.getElementById('accountNumber').value;
    const amount = parseFloat(document.getElementById('amount').value);

    // Retrieve accounts from localStorage
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];

    // Find the account by account number
    const account = accounts.find(acc => acc.accountNumber === accountNumber);

    if (account) {
        // Update the account balance
        account.balance += amount;

        // Save updated accounts back to localStorage
        localStorage.setItem('accounts', JSON.stringify(accounts));

        // Show success message
        alert(`Successfully deposited $${amount.toFixed(2)} into account number ${accountNumber}.`);

        // Optionally clear the form
        document.getElementById('depositForm').reset();
    } else {
        // Show error if account not found
        alert('Account not found. Please check the account number.');
    }
});