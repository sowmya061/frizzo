document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const expenseTypeImages = document.querySelectorAll(".expense-type-img");
    const transactionForm = document.getElementById("transactionForm");
    const expenseLabel = document.getElementById("expenseLabel");
    openModalBtn.addEventListener("click", function () {
        modal.style.display = "block";
    });
    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
    expenseTypeImages.forEach(function (img) {
        img.addEventListener("click", function () {
            expenseTypeImages.forEach(function (img) {
                img.classList.remove("selected");
            });
            img.classList.add("selected");
            const expenseType = img.getAttribute("data-type");
            expenseLabel.textContent = expenseType;
        });
    });
    // Form submission handling
    transactionForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const selectedExpense = expenseLabel.textContent;
        const amount = document.getElementById("amount").value;
        if (amount.trim() === "") {
            alert("Please enter an amount.");
            return;
        }
        //DATABASE SUBMISSION
        modal.style.display = "none";

        transactionForm.reset();
    });
});
