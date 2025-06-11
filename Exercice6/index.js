const display = document.getElementById("display")

function appendToDisplay(btn) {
    display.value += btn
}

function calculateResult() {
    if (display.value.includes("/0")) {
        display.value = "Division by zero is not allowed"
        return "Division by zero is not allowed"
    } else {
        display.value = eval(display.value)
    }
}

function clearDisplay() {
    display.value = ""
}