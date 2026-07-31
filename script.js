const bgColor = document.getElementById("bgColor");

bgColor.addEventListener("change", function () {
    document.body.style.backgroundColor = bgColor.value;
});

// Display
const display = document.getElementById("display");

// Get all buttons
const buttons = document.querySelectorAll(".calculator button");

// Store expression
let expression = "";

// Loop through buttons
buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        const value = button.innerText;

        // Equal
        if (value === "=") {

            try {

                expression = expression.replace(/×/g, "*");
                expression = expression.replace(/÷/g, "/");

                display.value = eval(expression);

                expression = display.value;

            } catch {

                display.value = "Error";
                expression = "";

            }

            return;
        }

        // Clear
        if (value === "C") {

            expression = "";
            display.value = "";
            return;

        }

        // Ignore empty button
        if (button.classList.contains("equal"))
            return;

        // Add pressed button to expression
        expression += value;

        display.value = expression;

    });

});