function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("transactionForm").addEventListener("submit", function(event) {
        event.preventDefault();

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
function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('time').textContent = time;
}
window.onload = function() {
    updateTime();
    setInterval(updateTime, 1000); 
};
