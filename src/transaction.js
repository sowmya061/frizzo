// Function to open the transaction form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

// Function to close the transaction form
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// transaction.js (client-side)
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("transactionForm").addEventListener("submit", function(event) {
        event.preventDefault();

        // Retrieve form data
        var date = document.getElementById("date").value;
        var expenseType = document.querySelector('input[name="expenseType"]:checked').value;
        var month = document.getElementById("month").value;
        var amount = document.getElementById("amount").value;

        var data = {
            date: date,
            expenseType: expenseType,
            month: month,
            amount: amount
        };

        fetch('http://localhost:5000/api/transaction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert("Transaction saved successfully!");
            // Handle success as needed (e.g., close form)
        })
        .catch(error => {
            console.error('Error saving transaction:', error);
            alert("Error saving transaction: " + error.message);
        });
        window.addEventListener('click', () => {
            closeForm();
        });
    });
});
// Function to update time
function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('time').textContent = time;
}
// Call updateTime() when the page loads to initialize time
window.onload = function() {
    updateTime();
    // Optionally update time every second (if real-time updating is needed)
    setInterval(updateTime, 1000); // Update every second
};
