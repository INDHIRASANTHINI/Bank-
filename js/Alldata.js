   // Retrieve accounts from localStorage
   let accounts = JSON.parse(localStorage.getItem('accounts')) || [];

   // Populate the table
   function populateTable() {
       const tableBody = document.getElementById('accountTableBody');
       tableBody.innerHTML = ''; // Clear existing rows

       accounts.forEach((account, index) => {
           const row = document.createElement('tr');
           row.innerHTML = `
               <td>${index + 1}</td>
               <td>${account.name}</td>
               <td>${account.accountNumber}</td>
               <td>${account.balance.toFixed(2)}</td>
               <td><button onclick="deleteAccount(${index})">Delete</button></td>
           `;
           tableBody.appendChild(row);
       });
   }

   // Function to delete an account
   function deleteAccount(index) {
       // Remove account from array
       accounts.splice(index, 1);

       // Update localStorage
       localStorage.setItem('accounts', JSON.stringify(accounts));

       // Refresh the table
       populateTable();
   }

   // Initial table population
   populateTable();
</script>