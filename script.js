// Change Background Color
let color = document.getElementById("bgColor");

color.addEventListener("change", function () {
    document.body.style.backgroundColor = color.value;
});

// Store selected operation
let operation = "";

// Get all buttons
let buttons = document.querySelectorAll("button");

// Detect selected operation
buttons.forEach(function (btn) {

    btn.addEventListener("click", function () {

        if (
            btn.innerHTML == "+" ||
            btn.innerHTML == "-" ||
            btn.innerHTML == "×" ||
            btn.innerHTML == "÷"
        ) {
            operation = btn.innerHTML;
        }

        // Clear Button
        if (btn.innerHTML == "C") {

            document.getElementById("num1").value = "";
            document.getElementById("num2").value = "";
            document.getElementById("display").value = "";

            operation = "";
        }

    });

});

// Equals Button
document.querySelector(".equal").addEventListener("click", function () {

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    // Validation
    if (num1 == "" || num2 == "") {
        alert("Please enter both numbers.");
        return;
    }

    num1 = Number(num1);
    num2 = Number(num2);

    let answer;

    if (operation == "+") {
        answer = num1 + num2;
    }
    else if (operation == "-") {
        answer = num1 - num2;
    }
    else if (operation == "×") {
        answer = num1 * num2;
    }
    else if (operation == "÷") {

        if (num2 == 0) {
            alert("Cannot divide by zero.");
            return;
        }

        answer = num1 / num2;
    }
    else {
        alert("Please select an operation.");
        return;
    }

    document.getElementById("display").value = answer;

});