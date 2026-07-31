// Background Color
const bgColor = document.getElementById("bgColor");

bgColor.addEventListener("change", function () {
    document.body.style.backgroundColor = bgColor.value;
});

// Calculator
let operation = "";

document.querySelectorAll("[data-op]").forEach(function (button) {

    button.addEventListener("click", function () {
        operation = button.dataset.op;
    });

});

// Equal Button
document.querySelector(".equal").addEventListener("click", function () {

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const display = document.getElementById("display");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter both numbers.");
        return;
    }

    let answer;

    switch (operation) {

        case "+":
            answer = num1 + num2;
            break;

        case "-":
            answer = num1 - num2;
            break;

        case "*":
            answer = num1 * num2;
            break;

        case "/":

            if (num2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }

            answer = num1 / num2;
            break;

        default:
            alert("Please select an operation.");
            return;
    }

    display.value = answer;

});

// Clear Button
document.getElementById("clear").addEventListener("click", function () {

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("display").value = "";
    operation = "";

});