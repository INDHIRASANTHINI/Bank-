document.getElementById('withdrawForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const accountNumber = document.getElementById('accountNumber').value;
    const amount = parseFloat(document.getElementById('amount').value);

    // Retrieve accounts from localStorage
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];

    // Find the account by account number
    const account = accounts.find(acc => acc.accountNumber === accountNumber);

    if (account) {
        // Check if the account has enough balance
        if (account.balance >= amount) {
            // Deduct the withdraw amount
            account.balance -= amount;

            // Save updated accounts back to localStorage
            localStorage.setItem('accounts', JSON.stringify(accounts));

            // Show success message
            alert(`Successfully withdrew ${amount.toFixed(2)} from account number ${accountNumber}.`);

            // Optionally clear the form
            document.getElementById('withdrawForm').reset();
        } else {
            // Show error if insufficient balance
            alert('Insufficient balance. Please enter a smaller amount.');
        }
    } else {
        // Show error if account not found
        alert('Account not found. Please check the account number.');
    }
});