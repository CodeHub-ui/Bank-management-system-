document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const dashboard = document.getElementById("dashboard");
    const loginSection = document.getElementById("login");
    const balanceSpan = document.getElementById("balance");
    const logoutButton = document.getElementById("logout");

    let balance = 1000; // Starting balance for demo purposes.

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "admin" && password === "password") {
            loginSection.classList.add("hidden");
            dashboard.classList.remove("hidden");
            updateBalance();
        } else {
            alert("Invalid username or password");
        }
    });

    logoutButton.addEventListener("click", () => {
        dashboard.classList.add("hidden");
        loginSection.classList.remove("hidden");
    });

    function updateBalance() {
        balanceSpan.textContent = `$${balance.toFixed(2)}`;
    }

    document.getElementById("depositBtn").addEventListener("click", () => {
        const amount = prompt("Enter deposit amount:");
        if (amount && !isNaN(amount)) {
            balance += parseFloat(amount);
            updateBalance();
        } else {
            alert("Invalid amount");
        }
    });

    document.getElementById("withdrawBtn").addEventListener("click", () => {
        const amount = prompt("Enter withdrawal amount:");
        if (amount && !isNaN(amount)) {
            if (parseFloat(amount) <= balance) {
                balance -= parseFloat(amount);
                updateBalance();
            } else {
                alert("Insufficient funds");
            }
        } else {
            alert("Invalid amount");
        }
    });

    document.getElementById("transferBtn").addEventListener("click", () => {
        const amount = prompt("Enter transfer amount:");
        if (amount && !isNaN(amount)) {
            if (parseFloat(amount) <= balance) {
                balance -= parseFloat(amount);
                alert("Transfer successful!");
                updateBalance();
            } else {
                alert("Insufficient funds");
            }
        } else {
            alert("Invalid amount");
        }
    });
});
